// Cloudflare Pages Function: POST /api/contact
//
// Handles submissions from both the Contact page and the Get Involved
// page and emails them to info@rightsintoreality.org using MailChannels,
// which Cloudflare Pages/Workers can send through for free with no
// separate API key or account needed.
//
// IMPORTANT SETUP STEP (one-time, in the Cloudflare dashboard):
// MailChannels requires a DNS TXT record on rightsintoreality.org to
// prove this Cloudflare Pages project is allowed to send mail as your
// domain. Add this TXT record at your DNS provider:
//
//   Name:  _mailchannels.rightsintoreality.org
//   Type:  TXT
//   Value: v=mc1 cfid=<your-pages-project>.pages.dev
//
// Replace <your-pages-project> with your actual *.pages.dev subdomain,
// shown in the Cloudflare Pages dashboard for this project. Without
// this record, MailChannels will reject the send with a 401/403.

const TO_EMAIL = 'info@rightsintoreality.org';
const TO_NAME = 'Rights Into Reality';
const FROM_EMAIL = 'noreply@rightsintoreality.org'; // must be a rightsintoreality.org address

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function onRequestPost({ request }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, subject, interest, message, source } = data || {};

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const emailSubject = subject
    ? `[${source || 'Website'}] ${subject}`
    : `[${source || 'Website'}] New submission from ${name}`;

  const textLines = [
    `Source: ${source || 'Website'}`,
    `Name: ${name}`,
    `Email: ${email}`,
    interest ? `Interested in: ${interest}` : null,
    subject ? `Subject: ${subject}` : null,
    '',
    'Message:',
    message,
  ].filter(Boolean);

  const htmlBody = `
    <h2>New message from ${escapeHtml(source || 'Website')}</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${interest ? `<p><strong>Interested in:</strong> ${escapeHtml(interest)}</p>` : ''}
    ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  const payload = {
    personalizations: [{ to: [{ email: TO_EMAIL, name: TO_NAME }] }],
    from: { email: FROM_EMAIL, name: 'Rights Into Reality Website' },
    reply_to: { email, name },
    subject: emailSubject,
    content: [
      { type: 'text/plain', value: textLines.join('\n') },
      { type: 'text/html', value: htmlBody },
    ],
  };

  try {
    const mcResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!mcResponse.ok) {
      const errText = await mcResponse.text();
      console.error('MailChannels error:', mcResponse.status, errText);
      return new Response(JSON.stringify({ error: 'Failed to send message' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

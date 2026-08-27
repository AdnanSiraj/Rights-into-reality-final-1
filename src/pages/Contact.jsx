import React, { useState } from 'react';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import { SocialLinks, WhatsAppIcon } from '../components/SocialIcons.jsx';
import { contactInfo } from '../data/orgData.js';

// Web3Forms — submissions are emailed straight to info@rightsintoreality.org.
const WEB3FORMS_ACCESS_KEY = '6c93a1bf-8c39-4016-899c-12d43b9b806d';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'submitting', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: formState.subject || `New website message from ${formState.name}`,
          source: 'Contact Page',
          ...formState,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error('Request failed');
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  return (
    <div>
      <Hero title="Contact Us" />

      {/* Contact Form */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="h2" className="text-3xl font-bold text-center mb-12 text-navy-900">
            Send Us a Message
          </Reveal>
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-amber-100 text-amber-800 rounded-lg">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
              There was an error submitting your form. Please try again, or reach us directly on{' '}
              <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="underline">
                WhatsApp
              </a>.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows="6"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-navy-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors disabled:opacity-50"
              disabled={submitStatus === 'submitting'}
            >
              {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* Location and Contact Info */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="h2" className="text-3xl font-bold text-center mb-12 text-navy-900">
            Get in Touch
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Location */}
            <Reveal>
              <div className="bg-white p-6 rounded-lg shadow h-full">
                <h3 className="text-xl font-semibold mb-4 text-navy-900">Our Location</h3>
                <p className="text-gray-700 mb-4">{contactInfo.address}</p>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    title="Rights Into Reality location map"
                    src={contactInfo.mapEmbedUrl}
                    className="w-full h-56 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </Reveal>
            {/* Contact Details */}
            <Reveal delay={80}>
              <div className="bg-white p-6 rounded-lg shadow h-full">
                <h3 className="text-xl font-semibold mb-4 text-navy-900">Contact Information</h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Email:</span>{' '}
                  <a href={`mailto:${contactInfo.email}`} className="text-amber-600 hover:text-amber-500">
                    {contactInfo.email}
                  </a>
                </p>
                <p className="text-gray-700 mb-2 flex items-center gap-2">
                  <span className="font-medium">WhatsApp:</span>
                  <a
                    href={contactInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-500 inline-flex items-center gap-1"
                  >
                    <WhatsAppIcon /> {contactInfo.whatsapp}
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Address:</span> {contactInfo.address}
                </p>
              </div>
            </Reveal>
            {/* Social Media */}
            <Reveal delay={160}>
              <div className="bg-white p-6 rounded-lg shadow h-full">
                <h3 className="text-xl font-semibold mb-4 text-navy-900">Follow Us</h3>
                <SocialLinks iconClassName="text-amber-500" />
                <p className="mt-4 text-sm text-gray-500">
                  More of our social accounts are launching soon.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

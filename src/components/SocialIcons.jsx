import React from 'react';

/* Lightweight inline SVG icons (no external icon package needed) */
const iconProps = { viewBox: '0 0 24 24', fill: 'currentColor', className: 'w-5 h-5' };

export const FacebookIcon = () => (
  <svg {...iconProps}><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.06 5.66 21.2 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.2 22 17.06 22 12.06z"/></svg>
);
export const InstagramIcon = () => (
  <svg {...iconProps}><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.14 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.66.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.66 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z"/></svg>
);
export const LinkedInIcon = () => (
  <svg {...iconProps}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/></svg>
);
export const YouTubeIcon = () => (
  <svg {...iconProps}><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.27 3.6-6.27 3.6z"/></svg>
);
export const TikTokIcon = () => (
  <svg {...iconProps}><path d="M16.6 2c.4 2.2 1.85 3.9 4.1 4.15v2.7c-1.44.06-2.75-.4-4.1-1.3v6.6c0 3.35-2.44 5.85-5.8 5.85A5.75 5.75 0 0 1 5.05 14.2a5.78 5.78 0 0 1 5.8-5.85c.36 0 .7.03 1.03.09v2.85a2.9 2.9 0 0 0-1.03-.19 2.9 2.9 0 1 0 2.9 2.9V2h2.85z"/></svg>
);
export const XIcon = () => (
  <svg {...iconProps}><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.7l8.1-9.3L1 2h7.1l4.9 6.1L18.9 2zm-1.2 18h1.9L7.4 4H5.4l12.3 16z"/></svg>
);
export const WhatsAppIcon = () => (
  <svg {...iconProps}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2zm0 18.06h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.16 8.16 0 0 1-1.26-4.29c0-4.52 3.68-8.2 8.24-8.2 2.2 0 4.27.86 5.83 2.42a8.16 8.16 0 0 1 2.41 5.79c0 4.52-3.68 8.14-8.24 8.14zm4.52-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.93.93 0 0 0-.67.31c-.23.25-.87.85-.87 2.08s.9 2.42 1.02 2.58c.12.17 1.77 2.7 4.28 3.79.6.26 1.06.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
);

export const socialLinks = [
  { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/share/1bu22EFNvc/?mibextid=wwXIfr', live: true },
  { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/rightsintoreality', live: true },
  { name: 'TikTok', icon: TikTokIcon, href: 'https://www.tiktok.com/@rightsintoreality', live: true },
  { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com/company/rightsintorealityorganization', live: true },
  { name: 'YouTube', icon: YouTubeIcon, href: 'https://www.youtube.com/@rightsintorealityorganization', live: true },
  { name: 'X (Twitter)', icon: XIcon, href: 'https://x.com/rirorganization', live: true },
];

/**
 * Renders the social icon row. Live links open in a new tab;
 * not-yet-live ones render dimmed and non-clickable with a
 * "coming soon" tooltip, so nothing points to a dead href="#".
 */
export const SocialLinks = ({ className = '', iconClassName = '' }) => (
  <div className={`flex flex-wrap gap-4 ${className}`}>
    {socialLinks.map(({ name, icon: Icon, href, live }) =>
      live ? (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
          className={`hover:text-amber-300 transition-colors ${iconClassName}`}
        >
          <Icon />
        </a>
      ) : (
        <span
          key={name}
          aria-label={`${name} (coming soon)`}
          title={`${name} - coming soon`}
          className={`opacity-40 cursor-default ${iconClassName}`}
        >
          <Icon />
        </span>
      )
    )}
  </div>
);

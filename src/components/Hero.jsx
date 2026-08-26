import React from 'react';

/**
 * Shared Hero banner. Renders the same background-image treatment on
 * every page so the site has one consistent "look" instead of the
 * plain navy header that used to appear on inner pages.
 *
 * Props:
 *  - title:    main heading (required)
 *  - subtitle: smaller line under the title (defaults to the org motto)
 *  - tagline:  optional extra sentence under the subtitle (Home only, usually)
 *  - size:     'lg' (Home) | 'md' (inner pages) - controls vertical padding
 */
const Hero = ({ title, subtitle = 'Turning Rights into Reality', tagline, size = 'md' }) => {
  const padding = size === 'lg' ? 'py-24 sm:py-28' : 'py-16 sm:py-20';

  return (
    <section className={`relative text-white ${padding} overflow-hidden bg-navy-900`}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-hero-zoom"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      ></div>
      {/* Dark overlay so text stays readable over the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-800/75 to-navy-900/85"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl sm:text-2xl mb-2 text-amber-300">{subtitle}</p>
        {tagline && <p className="text-lg mt-4 max-w-2xl mx-auto text-navy-100">{tagline}</p>}
      </div>
    </section>
  );
};

export default Hero;

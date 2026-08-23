# Rights Into Reality Organization Website

A modern, professional website for a youth-led, research-driven non-profit organization based in Upper Swat, Khyber Pakhtunkhwa, Pakistan.

## Tech Stack
- React + Vite
- React Router for multi-page navigation
- Custom CSS (no external CSS framework for simplicity and performance)
- Responsive design

## Features
- Fully responsive (mobile, tablet, desktop)
- Modern UI with navy blue and amber/gold professional color scheme
- Reusable Navbar and Footer components
- Placeholder images and content for easy customization
- Accessible design with semantic HTML
- SEO-friendly structure
- Optimized for fast loading

## Pages
1. Home - Hero section, vision/mission, Educate→Engage→Act→Measure Impact process, core programs preview, SDG alignment
2. About Us - Full vision/mission, organizational story, values, team leadership, research-driven approach
3. Programs - Detailed sections for all 5 programs with activities and impact goals
4. SDGs - Alignment with SDG 4, 13, and 16 plus placeholder impact metrics
5. Get Involved - Volunteer, partnership, donation sections and contact form
6. Contact - Contact form, location details, social media links

## Setup Instructions
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
   Visit http://localhost:5173
4. For production build:
   ```bash
   npm run build
   ```
   Outputs to /dist directory

## Customization Guide

### Replace Placeholder Content
- Images: Replace files in `public/images/` directory (create this folder and add your photos)
- Text: Look for these markers in component files:
  - `[Founder's Name]` - About page
  - `X+` - Impact metrics throughout site (replace with actual numbers)
  - `[Map Placeholder]` - Home and Contact pages (replace with actual map embed)
  - Social media links - Footer and Contact pages (replace `#` with real URLs)
  - Contact details - Footer and Contact pages (update email/phone/address)

### Color Scheme
The site uses these CSS variables in `src/index.css`:
- Navy: `--navy-900: #1e293b` (primary), `--navy-600: #2563eb` (accent)
- Amber: `--amber-500: #f97316` (primary), `--amber-400: #fb923c` (accent)

Modify these values to adjust colors.

### Fonts
Uses system fonts by default. To change:
1. Edit `src/index.css` `--font-sans` variable
2. Or add `@import` statements at the top of `index.css`

## Deployment
The built site (in `/dist` after `npm run build`) can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static web hosting service

For GitHub Pages:
1. Push to main branch
2. In repo Settings > Pages, set source to gh-pages branch
3. Or use `npm run build` then manually push dist content to gh-pages branch

## Notes
- All images should be placed in `public/images/` directory and referenced as `/images/your-image.jpg`
- The favicon is a globe emoji (🌍) in `public/favicon.svg` - replace with your own if desired
- Forms are frontend-only; connect to your preferred backend/service for actual submissions

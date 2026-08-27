import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import { contactInfo } from '../data/orgData.js';

// Web3Forms — submissions are emailed straight to info@rightsintoreality.org.
const WEB3FORMS_ACCESS_KEY = '6c93a1bf-8c39-4016-899c-12d43b9b806d';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const GetInvolved = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Used by the Volunteer / Partner / Donate buttons — pre-selects the
  // matching option in the form's dropdown and scrolls the form into view.
  const goToForm = (interest) => {
    setFormState(prev => ({ ...prev, interest }));
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          subject: `New Get Involved submission from ${formState.name}`,
          source: 'Get Involved Page',
          ...formState,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error('Request failed');
      setSubmitStatus('success');
      setFormState({ name: '', email: '', interest: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  return (
    <div>
      <Hero title="Get Involved" />

      {/* Introduction */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            There are many ways to support our mission. Whether you want to volunteer your time, partner with us, or make a donation, your contribution helps us turn rights into reality for communities in Upper Swat and beyond.
          </p>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">
            Volunteer
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
            Join our team of dedicated volunteers and make a direct impact in the community.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
              <div className="text-amber-400 text-4xl mb-3">👨‍🏫</div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Education Support</h3>
              <p className="text-gray-600 text-sm">
                Assist with tutoring, mentoring, or conducting workshops in schools.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
              <div className="text-amber-400 text-4xl mb-3">🌱</div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Environmental Action</h3>
              <p className="text-gray-600 text-sm">
                Participate in tree plantation, clean-up drives, or garden projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
              <div className="text-amber-400 text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Community Outreach</h3>
              <p className="text-gray-600 text-sm">
                Help with awareness campaigns, surveys, or community events.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => goToForm('volunteering')}
              className="bg-navy-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors"
            >
              Volunteer Now
            </button>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">
            Partner with Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
            We welcome partnerships with schools, NGOs, businesses, and government agencies to amplify our impact.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Schools & Educational Institutions</h3>
              <p className="text-gray-700">
                Collaborate on program implementation, resource sharing, and joint initiatives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-navy-900">NGOs & Community Organizations</h3>
              <p className="text-gray-700">
                Partner on projects, share best practices, and coordinate efforts for greater reach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Businesses & Corporates</h3>
              <p className="text-gray-700">
                Engage in corporate social responsibility (CSR) initiatives, sponsorships, or employee volunteering programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Government Agencies</h3>
              <p className="text-gray-700">
                Work together on policy advocacy, program scaling, and public service delivery.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => goToForm('partnering')}
              className="bg-navy-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors"
            >
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-navy-900">
            Support Our Work
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Your donation helps us continue our vital work in education, climate action, human rights, and youth leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors"
            >
              Contact Us to Donate
            </a>
            <button
              onClick={() => goToForm('donating')}
              className="bg-white text-navy-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors border border-navy-900"
            >
              Fill the Form Instead
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Online donation processing is coming soon — for now, message us on WhatsApp or email{' '}
            <a href={`mailto:${contactInfo.email}`} className="underline">{contactInfo.email}</a> to arrange a donation.
          </p>
        </div>
      </section>

      {/* Contact / Interest Form */}
      <section ref={formRef} className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">
            Contact Us
          </h2>
          {/* Form Status Messages */}
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
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                I'm interested in:
              </label>
              <select
                id="interest"
                name="interest"
                value={formState.interest}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="">Select an option</option>
                <option value="volunteering">Volunteering</option>
                <option value="partnering">Partnering</option>
                <option value="donating">Donating</option>
                <option value="other">Other</option>
              </select>
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
                rows="5"
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
    </div>
  );
};

export default GetInvolved;

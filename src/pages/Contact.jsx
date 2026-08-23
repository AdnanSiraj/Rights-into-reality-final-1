import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would normally send the data to a server
    // For now, we'll just simulate a successful submission
    setSubmitStatus('success');
    // Reset form
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl sm:text-2xl mb-6">
            Turning Rights into Reality
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">
            Send Us a Message
          </h2>
          {/* Form Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-amber-100 text-amber-800 rounded-lg">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
              There was an error submitting your form. Please try again.
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
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Location */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-navy-900">Our Location</h3>
              <p className="text-gray-700">
                Upper Swat, Khyber Pakhtunkhwa, Pakistan
              </p>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mt-4">
                {/* Placeholder for map */}
                <div className="bg-navy-200 flex items-center justify-center text-navy-500 text-italic">
                  [Map Placeholder]
                </div>
              </div>
            </div>
            {/* Contact Details */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-navy-900">Contact Information</h3>
              <p className="space-y-2 text-gray-700">
                <span className="font-medium">Email:</span> info@rightsintoreality.org
              </p>
              <p className="space-y-2 text-gray-700">
                <span className="font-medium">Phone:</span> +92 123 4567890
              </p>
              <p className="space-y-2 text-gray-700">
                <span className="font-medium">Address:</span> Upper Swat, Khyber Pakhtunkhwa, Pakistan
              </p>
            </div>
            {/* Social Media */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-navy-900">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                  <span aria-label="Facebook">📘</span>
                </a>
                <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                  <span aria-label="Twitter">🐦</span>
                </a>
                <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                  <span aria-label="Instagram">📸</span>
                </a>
                <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                  <span aria-label="LinkedIn">💼</span>
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                *Social media links are placeholders
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

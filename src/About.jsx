import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl sm:text-2xl mb-6">
            Turning Rights into Reality
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">
            Vision & Mission
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">Vision</h3>
              <p className="text-gray-700">
                To build resilient, educated, environmentally responsible, and peaceful communities where every individual has the opportunity, knowledge, and confidence to contribute to sustainable development.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">Mission</h3>
              <p className="text-gray-700">
                To transform knowledge into action by promoting quality education, climate resilience, environmental stewardship, human rights, peacebuilding, and youth leadership through research, partnerships, volunteerism, and community-driven initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="bg-amber-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">
            Our Motto
          </h2>
          <p className="text-2xl text-amber-600 font-bold">
            "Turning Rights into Reality"
          </p>
        </div>
      </section>

      {/* Story / Origin */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-navy-900">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Rights Into Reality Organization began with a simple belief: that every person in the rural communities of Upper Swat, Khyber Pakhtunkhwa, Pakistan, deserves the opportunity to learn, grow, and thrive. Founded by local educators and community leaders, we started by conducting awareness seminars in a handful of schools, focusing on the importance of education and environmental stewardship.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            Over time, our work expanded to include climate action initiatives, human rights workshops, and youth leadership programs. We remain rooted in the communities we serve, ensuring that our initiatives are designed with, not just for, the people of Upper Swat.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
              <div className="text-amber-400 text-4xl mb-3">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Education</h3>
              <p className="text-gray-600 text-sm">
                We believe in the power of quality education to transform lives and communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
              <div className="text-amber-400 text-4xl mb-3">🌍</div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                We are committed to environmental stewardship and climate action.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
              <div className="text-amber-400 text-4xl mb-3">⚖️</div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Justice</h3>
              <p className="text-gray-600 text-sm">
                We uphold human rights, peace, and the rule of law in all our work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
              <div className="text-amber-400 text-4xl mb-3">👥</div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Community</h3>
              <p className="text-gray-600 text-sm">
                We work hand-in-hand with local communities to ensure our initiatives are relevant and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Leadership */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">
            Our Team
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Founder */}
            <Link to="/about#founder" className="group block bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg overflow-hidden shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-amber-400 text-3xl">👨‍🏫</div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">Founder: [Founder's Name]</h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      Visionary leader and educator dedicated to empowering youth in Upper Swat.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <span className="text-sm font-medium text-amber-600 group-hover:text-amber-500">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>
            {/* Team Member 1 */}
            <Link to="/about#team-1" className="group block bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg overflow-hidden shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-amber-400 text-3xl">👩‍💼</div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">Program Director</h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      Oversees the implementation of our core programs across the region.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <span className="text-sm font-medium text-amber-600 group-hover:text-amber-500">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>
            {/* Team Member 2 */}
            <Link to="/about#team-2" className="group block bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg overflow-hidden shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-amber-400 text-3xl">👨‍🌾</div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">Field Coordinator</h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      Works directly with communities to ensure our programs meet local needs.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <span className="text-sm font-medium text-amber-600 group-hover:text-amber-500">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Research-Driven Approach */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">
            Research-Driven Approach
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We design evidence-based initiatives that connect local needs with practical solutions and measurable outcomes.
          </p>
          <div className="bg-white p-8 rounded-lg shadow">
            <p className="text-gray-700">
              Our approach combines rigorous research with community insights to create programs that are both effective and sustainable. We continuously monitor and evaluate our initiatives to ensure they deliver real impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

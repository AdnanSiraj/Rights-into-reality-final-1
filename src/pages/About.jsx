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
            Rights Into Reality Organization began with a simple belief: that every person in the rural communities of Pakistan, deserves the opportunity to learn, grow, and thrive. Founded by local educators and community leaders, we started by conducting awareness seminars in a handful of schools, focusing on the importance of education and environmental stewardship.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            Over time, our work expanded to include climate action initiatives, human rights workshops, and youth leadership programs. We remain rooted in the communities we serve, ensuring that our initiatives are designed with, not just for, the people of Pakistan.
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
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">

            {/* Team member 1 */}
            <div className="bg-gray-50 rounded-lg shadow overflow-hidden flex flex-col sm:flex-row items-center">
              <img
                src="/team/member-1.jpg"
                alt="Adnan Siraj, Co-Founder & President"
                className="w-full sm:w-48 h-48 object-cover flex-shrink-0"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900">Adnan Siraj</h3>
                <p className="text-amber-600 font-medium mb-1">Co-Founder & President</p>
                <p className="text-gray-600 text-sm mb-3">
                  Bachelor's in International Law
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/team/cv/adnan-siraj-cv.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-amber-600 hover:text-amber-500">
                    View CV →
                  </a>
                </div>
              </div>
            </div>

            {/* Team member 2 */}
            <div className="bg-gray-50 rounded-lg shadow overflow-hidden flex flex-col sm:flex-row items-center">
              <img
                src="/team/member-2.jpg"
                alt="Nasar Shah Mian, Co-Founder & Administrator"
                className="w-full sm:w-48 h-48 object-cover flex-shrink-0"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900">Nasar Shah Mian</h3>
                <p className="text-amber-600 font-medium mb-1">Co-Founder & Administrator</p>
                <p className="text-gray-600 text-sm mb-3">
                  M.Phil. in Environmental Sciences
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/team/cv/nasar-shah-mian-cv.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-amber-600 hover:text-amber-500">
                    View CV →
                  </a>
                </div>
              </div>
            </div>

            {/* Team member 3 */}
            <div className="bg-gray-50 rounded-lg shadow overflow-hidden flex flex-col sm:flex-row items-center">
              <img
                src="/team/member-3.jpg"
                alt="Jamshaid Ahmed, General Secretary"
                className="w-full sm:w-48 h-48 object-cover flex-shrink-0"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900">Jamshaid Ahmed</h3>
                <p className="text-amber-600 font-medium mb-1">General Secretary</p>
                <p className="text-gray-600 text-sm mb-3">
                  Bachelor's in Economics
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/team/cv/jamshaid-ahmed-cv.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-amber-600 hover:text-amber-500">
                    View CV →
                  </a>
                </div>
              </div>
            </div>

            {/* Team member 4 */}
            <div className="bg-gray-50 rounded-lg shadow overflow-hidden flex flex-col sm:flex-row items-center">
              <img
                src="/team/member-4.jpg"
                alt="Kamran Shah, Project Coordinator"
                className="w-full sm:w-48 h-48 object-cover flex-shrink-0"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900">Kamran Shah</h3>
                <p className="text-amber-600 font-medium mb-1">Project Coordinator</p>
                <p className="text-gray-600 text-sm">
                  Bachelor's of Economics
                </p>
              </div>
            </div>

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

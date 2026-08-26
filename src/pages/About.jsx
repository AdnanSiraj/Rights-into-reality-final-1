import React from 'react';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import { teamMembers, impactStats } from '../data/orgData.js';

const About = () => {
  return (
    <div>
      <Hero title="About Us" />

      {/* Vision & Mission */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="h2" className="text-3xl font-bold text-center mb-12 text-navy-900">
            Vision & Mission
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Reveal>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">Vision</h3>
              <p className="text-gray-700">
                To build resilient, educated, environmentally responsible, and peaceful communities where every individual has the opportunity, knowledge, and confidence to contribute to sustainable development.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">Mission</h3>
              <p className="text-gray-700">
                To transform knowledge into action by promoting quality education, climate resilience, environmental stewardship, human rights, peacebuilding, and youth leadership through research, partnerships, volunteerism, and community-driven initiatives.
              </p>
            </Reveal>
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
          <Reveal as="h2" className="text-3xl font-bold mb-2 text-navy-900">
            Our Story
          </Reveal>
          <p className="text-amber-600 font-medium mb-6">Founded {impactStats.since} in Upper Swat, Khyber Pakhtunkhwa</p>
          <Reveal delay={100}>
            <p className="text-gray-700 text-lg leading-relaxed">
              Rights Into Reality Organization began with a simple belief: that every person in the rural communities of Pakistan deserves the opportunity to learn, grow, and thrive. Founded by local educators and community leaders, we started by conducting awareness seminars in a handful of schools, focusing on the importance of education and environmental stewardship.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              Since then, our work has expanded to include climate action initiatives, human rights workshops, and youth leadership programs, reaching {impactStats.studentsReached} students and engaging {impactStats.communityMembersEngaged} community members through partnerships with {impactStats.schoolsPartnered.length} schools in Upper Swat. We remain rooted in the communities we serve, ensuring that our initiatives are designed with, not just for, the people of Pakistan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="h2" className="text-3xl font-bold text-center mb-12 text-navy-900">
            Our Values
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '📚', title: 'Education', text: 'We believe in the power of quality education to transform lives and communities.' },
              { icon: '🌍', title: 'Sustainability', text: 'We are committed to environmental stewardship and climate action.' },
              { icon: '⚖️', title: 'Justice', text: 'We uphold human rights, peace, and the rule of law in all our work.' },
              { icon: '👥', title: 'Community', text: 'We work hand-in-hand with local communities to ensure our initiatives are relevant and effective.' },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center h-full">
                  <div className="text-amber-400 text-4xl mb-3">{v.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-navy-900">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Leadership */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="h2" className="text-3xl font-bold text-center mb-12 text-navy-900">
            Our Team
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <div className="bg-gray-50 rounded-lg shadow overflow-hidden h-full flex flex-col sm:flex-row items-start">
                  <img
                    src={member.photo}
                    alt={`${member.name}, ${member.role}`}
                    className="w-full sm:w-40 h-40 object-cover flex-shrink-0"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-navy-900">{member.name}</h3>
                    <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{member.bio}</p>
                    {member.cv && (
                      <a
                        href={member.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-amber-600 hover:text-amber-500"
                      >
                        View CV →
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research-Driven Approach */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal as="h2" className="text-3xl font-bold text-navy-900 mb-8">
            Research-Driven Approach
          </Reveal>
          <Reveal delay={100} className="text-lg text-gray-700 mb-6">
            We design evidence-based initiatives that connect local needs with practical solutions and measurable outcomes.
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-white p-8 rounded-lg shadow">
              <p className="text-gray-700">
                Our approach combines rigorous research with community insights to create programs that are both effective and sustainable. Every workshop and plantation drive since {impactStats.since} has been logged and reviewed so we can track what is working and adjust what isn't.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;

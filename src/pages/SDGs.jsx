import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';
import { impactStats } from '../data/orgData.js';

const SDGs = () => {
  return (
    <div>
      <Hero title="Sustainable Development Goals" />

      {/* Introduction */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Our work is aligned with the United Nations Sustainable Development Goals (SDGs), particularly SDG 4 (Quality Education), SDG 13 (Climate Action), and SDG 16 (Peace, Justice and Strong Institutions).
          </p>
        </div>
      </section>

      {/* SDG Sections */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SDG 4: Quality Education */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy-900" id="sdg-4">
              SDG 4: Quality Education
            </h2>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-navy-900">Overview</h3>
              <p className="text-gray-700">
                Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-navy-900">Our Contribution</h3>
              <p className="text-gray-700">
                Through our Education for Change and Green Schools Initiative programs, we work to improve access to quality education, enhance learning environments, and promote lifelong learning opportunities for youth in Upper Swat.
              </p>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="font-semibold text-navy-900">Key Initiatives:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>School awareness seminars and workshops</li>
                  <li>Digital literacy and career guidance training</li>
                  <li>STEM and science awareness programs</li>
                  <li>Leadership education for students</li>
                  <li>Teacher training and capacity building</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SDG 13: Climate Action */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy-900" id="sdg-13">
              SDG 13: Climate Action
            </h2>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-navy-900">Overview</h3>
              <p className="text-gray-700">
                Take urgent action to combat climate change and its impacts.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-navy-900">Our Contribution</h3>
              <p className="text-gray-700">
                Through our Green Schools Initiative and Climate Action & Sustainability programs, we promote environmental stewardship, conserve natural resources, and build community resilience to climate change.
              </p>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="font-semibold text-navy-900">Key Initiatives:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Tree plantation and school garden programs</li>
                  <li>Waste segregation and recycling initiatives</li>
                  <li>Water conservation education and projects</li>
                  <li>Renewable energy awareness sessions</li>
                  <li>Community clean-up and conservation drives</li>
                  <li>Climate education and adaptation training</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SDG 16: Peace, Justice and Strong Institutions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy-900" id="sdg-16">
              SDG 16: Peace, Justice and Strong Institutions
            </h2>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-navy-900">Overview</h3>
              <p className="text-gray-700">
                Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-navy-900">Our Contribution</h3>
              <p className="text-gray-700">
                Through our Human Rights & Peacebuilding and Youth Leadership & Community Development programs, we promote human rights, peace, civic responsibility, and strengthen community institutions and local governance.
              </p>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="font-semibold text-navy-900">Key Initiatives:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Human rights and peace education workshops</li>
                  <li>Child protection and women's empowerment programs</li>
                  <li>Civic responsibility and peacebuilding initiatives</li>
                  <li>Youth leadership training and community service projects</li>
                  <li>Digital citizenship and online safety education</li>
                  <li>Strengthening local community institutions and governance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal as="h2" className="text-3xl font-bold mb-2 text-navy-900">
            Our Impact
          </Reveal>
          <Reveal delay={100} className="text-gray-500 mb-12">Since {impactStats.since}</Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: impactStats.studentsReached, label: 'Students Reached' },
              { value: impactStats.treesPlanted, label: 'Trees Planted' },
              { value: impactStats.workshopsConducted, label: 'Workshops Conducted' },
              { value: impactStats.communityMembersEngaged, label: 'Community Members Engaged' },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="bg-amber-50 p-6 rounded-lg h-full">
                  <div className="text-4xl font-bold text-amber-600">
                    <Counter value={stat.value} />
                  </div>
                  <p className="text-gray-700 mt-2">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Figures reflect activity across our partner schools: {impactStats.schoolsPartnered.join(', ')}.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SDGs;

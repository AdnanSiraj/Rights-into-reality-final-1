import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import { impactStats } from '../data/orgData.js';

const Programs = () => {
  return (
    <div>
      <Hero title="Our Programs" />

      {/* Introduction */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Our five core programs work together to create holistic community transformation in Upper Swat and beyond.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Education for Change */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy-900" id="education">
              Education for Change
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-amber-400 text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Program Overview</h3>
                <p className="text-gray-700">
                  Empowering youth through comprehensive educational initiatives that build knowledge, skills, and leadership capabilities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Key Activities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>School awareness seminars</li>
                  <li>Workshops on various topics</li>
                  <li>Career guidance sessions</li>
                  <li>Digital literacy training</li>
                  <li>Debate and public speaking clubs</li>
                  <li>Reading clubs and literacy programs</li>
                  <li>Science awareness initiatives</li>
                  <li>Leadership education programs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Impact & Goals</h3>
                <p className="text-gray-700">
                  To increase school enrollment, improve learning outcomes, and develop educated youth who can contribute to community development.
                </p>
                <p className="mt-4 text-sm text-amber-600 font-medium">
                  {impactStats.studentsReached} students reached since {impactStats.since}
                </p>
              </div>
            </div>
          </div>

          {/* Green Schools Initiative */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy-900" id="green-schools">
              Green Schools Initiative
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-amber-400 text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Program Overview</h3>
                <p className="text-gray-700">
                  Creating environmentally conscious schools and communities through hands-on ecological initiatives.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Key Activities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Eco clubs establishment</li>
                  <li>Cleanliness campaigns</li>
                  <li>Waste segregation programs</li>
                  <li>Recycling awareness initiatives</li>
                  <li>Tree plantation drives</li>
                  <li>School garden projects</li>
                  <li>Plastic reduction campaigns</li>
                  <li>Water conservation education</li>
                  <li>Climate education programs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Impact & Goals</h3>
                <p className="text-gray-700">
                  To reduce school waste, increase green spaces, and foster environmental stewardship among students and communities.
                </p>
                <p className="mt-4 text-sm text-amber-600 font-medium">
                  {impactStats.treesPlanted} trees planted since {impactStats.since}
                </p>
              </div>
            </div>
          </div>

          {/* Climate Action & Sustainability */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy-900" id="climate-action">
              Climate Action & Sustainability
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-amber-400 text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Program Overview</h3>
                <p className="text-gray-700">
                  Addressing climate change through community-based adaptation and mitigation initiatives.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Key Activities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Community clean-up drives</li>
                  <li>River and water body conservation</li>
                  <li>Waste management awareness</li>
                  <li>Circular economy education</li>
                  <li>Renewable energy awareness</li>
                  <li>Biodiversity conservation projects</li>
                  <li>Climate resilience activities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Impact & Goals</h3>
                <p className="text-gray-700">
                  To reduce local pollution, conserve natural resources, and build community resilience to climate impacts.
                </p>
                <p className="mt-4 text-sm text-amber-600 font-medium">
                  {impactStats.communityMembersEngaged} community members engaged since {impactStats.since}
                </p>
              </div>
            </div>
          </div>

          {/* Human Rights & Peacebuilding */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy-900" id="human-rights">
              Human Rights & Peacebuilding
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-amber-400 text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Program Overview</h3>
                <p className="text-gray-700">
                  Promoting human rights, peace, and social harmony through education and community engagement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Key Activities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Human rights awareness workshops</li>
                  <li>Child protection initiatives</li>
                  <li>Women's empowerment programs</li>
                  <li>Civic responsibility education</li>
                  <li>Peace education and conflict resolution training</li>
                  <li>Digital citizenship and online safety</li>
                  <li>Rule of law awareness sessions</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Impact & Goals</h3>
                <p className="text-gray-700">
                  To increase awareness of human rights, reduce violence, and promote peaceful coexistence in communities.
                </p>
                <p className="mt-4 text-sm text-amber-600 font-medium">
                  {impactStats.workshopsConducted} workshops conducted since {impactStats.since}
                </p>
              </div>
            </div>
          </div>

          {/* Youth Leadership & Community Development */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy-900" id="youth-leadership">
              Youth Leadership & Community Development
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-amber-400 text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Program Overview</h3>
                <p className="text-gray-700">
                  Developing the next generation of leaders who can drive positive change in their communities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Key Activities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Leadership training workshops</li>
                  <li>Volunteer development programs</li>
                  <li>Community service projects</li>
                  <li>Team-building activities</li>
                  <li>Project management training</li>
                  <li>Entrepreneurship awareness sessions</li>
                  <li>Innovation and creativity workshops</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Impact & Goals</h3>
                <p className="text-gray-700">
                  To increase youth participation in community development and foster a culture of service and innovation.
                </p>
                <p className="mt-4 text-sm text-amber-600 font-medium">
                  Tracking begins with our first cohort ({impactStats.since})
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;

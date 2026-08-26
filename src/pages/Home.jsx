import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
<section className="relative text-white py-20 overflow-hidden bg-navy-900">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
  ></div>
  {/* Dark overlay so text stays readable over the image */}
  <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-800/70 to-navy-900/80"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
      Rights Into Reality
    </h1>
    <p className="text-xl sm:text-2xl mb-6">
      Turning Rights into Reality
    </p>
    <p className="text-lg mb-8">
      Empowering communities through education, climate action, and human rights.
    </p>
  </div>
</section>

      {/* Vision & Mission Summary */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-navy-900">
            Our Vision & Mission
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

      {/* Process Pillars */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">
            Our Approach: Educate → Engage → Act → Measure Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
              <div className="text-amber-400 text-4xl mb-3">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Educate</h3>
              <p className="text-gray-600 text-sm">
                Build knowledge, awareness, and critical thinking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
              <div className="text-amber-400 text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Engage</h3>
              <p className="text-gray-600 text-sm">
                Collaborate with schools, communities, institutions, NGOs, and volunteers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
              <div className="text-amber-400 text-4xl mb-3">💪</div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Act</h3>
              <p className="text-gray-600 text-sm">
                Implement practical projects that solve real problems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
              <div className="text-amber-400 text-4xl mb-3">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Measure Impact</h3>
              <p className="text-gray-600 text-sm">
                Collect evidence, evaluate outcomes, and improve continuously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs Preview */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">
            Core Programs
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Program 1 */}
            <Link to="/programs" className="group block bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg overflow-hidden shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-amber-400 text-3xl">🎓</div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">Education for Change</h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      School awareness seminars, workshops, career guidance, digital literacy, debate, reading clubs, science awareness, and leadership education.
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
            {/* Program 2 */}
            <Link to="/programs" className="group block bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg overflow-hidden shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-amber-400 text-3xl">🌱</div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">Green Schools Initiative</h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      Eco clubs, cleanliness campaigns, waste segregation, recycling awareness, tree plantation, school gardens, plastic reduction, water conservation, and climate education.
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
            {/* Program 3 */}
            <Link to="/programs" className="group block bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg overflow-hidden shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-amber-400 text-3xl">🌍</div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">Climate Action & Sustainability</h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      Community clean-ups, river conservation, waste management awareness, circular economy, renewable energy awareness, biodiversity conservation, and resilience activities.
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
            {/* Program 4 */}
            <Link to="/programs" className="group block bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg overflow-hidden shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-amber-400 text-3xl">⚖️</div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">Human Rights & Peacebuilding</h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      Human rights awareness, child protection, women's empowerment, civic responsibility, peace education, conflict resolution, digital citizenship, and rule of law awareness.
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
            {/* Program 5 */}
            <Link to="/programs" className="group block bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg overflow-hidden shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-amber-400 text-3xl">🚀</div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">Youth Leadership & Community Development</h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      Leadership training, volunteer development, community service projects, team-building, project management workshops, entrepreneurship awareness, and innovation.
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

      {/* SDG Alignment Strip */}
      <section className="bg-amber-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 text-navy-900">
            Aligned with Sustainable Development Goals
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow">
              <div className="text-amber-400 text-3xl">📚</div>
              <span>SDG 4: Quality Education</span>
            </div>
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow">
              <div className="text-amber-400 text-3xl">🌍</div>
              <span>SDG 13: Climate Action</span>
            </div>
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow">
              <div className="text-amber-400 text-3xl">⚖️</div>
              <span>SDG 16: Peace, Justice and Strong Institutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-navy-900">
            Local in Origin, Global in Impact
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            We began with rural communities in Swat and are building a model for scalable, collaborative impact across Pakistan and beyond.
          </p>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
            {/* Placeholder for map or image */}
            <div className="bg-navy-200 flex items-center justify-center text-navy-500 text-italic">
              [Map / Image Placeholder]
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-action Banner */}
      <section className="bg-amber-400 text-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Us in Turning Rights into Reality
          </h2>
          <p className="text-lg mb-6">
            Volunteer, partner, or donate to support our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="bg-navy-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors">
              Volunteer
            </Link>
            <Link to="/get-involved" className="bg-white text-navy-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors border border-navy-900">
              Partner
            </Link>
            <Link to="/get-involved" className="bg-white text-navy-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors border border-navy-900">
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

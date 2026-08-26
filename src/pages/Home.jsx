import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';
import { impactStats, featuredActivities, testimonials, contactInfo } from '../data/orgData.js';

const Home = () => {
  return (
    <div>
      <Hero
        title="Rights Into Reality"
        subtitle="Turning Rights into Reality"
        tagline="Empowering communities through education, climate action, and human rights."
        size="lg"
      />

      {/* Vision & Mission Summary */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="h2" className="text-3xl font-bold text-center mb-8 text-navy-900">
            Our Vision & Mission
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

      {/* Process Pillars */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="h2" className="text-3xl font-bold text-center mb-12 text-navy-900">
            Our Approach: Educate → Engage → Act → Measure Impact
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '📚', title: 'Educate', text: 'Build knowledge, awareness, and critical thinking.' },
              { icon: '🤝', title: 'Engage', text: 'Collaborate with schools, communities, institutions, NGOs, and volunteers.' },
              { icon: '💪', title: 'Act', text: 'Implement practical projects that solve real problems.' },
              { icon: '📊', title: 'Measure Impact', text: 'Collect evidence, evaluate outcomes, and improve continuously.' },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center h-full transition-transform hover:-translate-y-1">
                  <div className="text-amber-400 text-4xl mb-3">{p.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-navy-900">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Programs Preview */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="h2" className="text-3xl font-bold text-center mb-12 text-navy-900">
            Core Programs
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { anchor: 'education', icon: '🎓', title: 'Education for Change', text: 'School awareness seminars, workshops, career guidance, digital literacy, debate, reading clubs, science awareness, and leadership education.' },
              { anchor: 'green-schools', icon: '🌱', title: 'Green Schools Initiative', text: 'Eco clubs, cleanliness campaigns, waste segregation, recycling awareness, tree plantation, school gardens, plastic reduction, water conservation, and climate education.' },
              { anchor: 'climate-action', icon: '🌍', title: 'Climate Action & Sustainability', text: 'Community clean-ups, river conservation, waste management awareness, circular economy, renewable energy awareness, biodiversity conservation, and resilience activities.' },
              { anchor: 'human-rights', icon: '⚖️', title: 'Human Rights & Peacebuilding', text: "Human rights awareness, child protection, women's empowerment, civic responsibility, peace education, conflict resolution, digital citizenship, and rule of law awareness." },
              { anchor: 'youth-leadership', icon: '🚀', title: 'Youth Leadership & Community Development', text: 'Leadership training, volunteer development, community service projects, team-building, project management workshops, entrepreneurship awareness, and innovation.' },
            ].map((prog, i) => (
              <Reveal key={prog.anchor} delay={i * 80}>
                <Link
                  to={`/programs#${prog.anchor}`}
                  className="group block bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg overflow-hidden shadow h-full"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-amber-400 text-3xl">{prog.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy-900">{prog.title}</h3>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{prog.text}</p>
                      </div>
                    </div>
                    <div className="mt-4 text-right">
                      <span className="text-sm font-medium text-amber-600 group-hover:text-amber-500">
                        Learn more →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal as="h2" className="text-3xl font-bold mb-2">Our Impact So Far</Reveal>
          <Reveal delay={100} className="text-navy-200 mb-12">Since {impactStats.since}</Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: impactStats.studentsReached, label: 'Students Reached' },
              { value: impactStats.treesPlanted, label: 'Trees Planted' },
              { value: impactStats.workshopsConducted, label: 'Workshops Conducted' },
              { value: impactStats.communityMembersEngaged, label: 'Community Members Engaged' },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="text-4xl font-bold text-amber-400">
                  <Counter value={stat.value} />
                </div>
                <p className="mt-2 text-navy-100 text-sm">{stat.label}</p>
              </Reveal>
            ))}
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
            <Link to="/sdgs#sdg-4" className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-amber-400 text-3xl">📚</div>
              <span>SDG 4: Quality Education</span>
            </Link>
            <Link to="/sdgs#sdg-13" className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-amber-400 text-3xl">🌍</div>
              <span>SDG 13: Climate Action</span>
            </Link>
            <Link to="/sdgs#sdg-16" className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-amber-400 text-3xl">⚖️</div>
              <span>SDG 16: Peace, Justice and Strong Institutions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Activities highlight */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="h2" className="text-3xl font-bold text-center mb-12 text-navy-900">
            Recent Activities
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {featuredActivities.map((activity, i) => (
              <Reveal key={activity.slug} delay={i * 100}>
                <div className="bg-gray-50 rounded-lg shadow h-full flex flex-col overflow-hidden">
                  {activity.photo ? (
                    <img
                      src={activity.photo}
                      alt={activity.title}
                      loading="lazy"
                      className="w-full h-40 object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-40 bg-navy-50 flex items-center justify-center text-navy-300 text-4xl">
                      {activity.icon}
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-navy-900">{activity.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{activity.summary}</p>
                    <Link
                      to={`/activities#${activity.slug}`}
                      className="text-sm font-medium text-amber-600 hover:text-amber-500 self-start"
                    >
                      See more →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/activities"
              className="inline-block bg-navy-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors"
            >
              View All Activities
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="h2" className="text-3xl font-bold text-center mb-12 text-navy-900">
            What People Say
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="bg-white p-6 rounded-lg shadow h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    {t.photo ? (
                      <img src={t.photo} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center text-navy-500 text-xl font-semibold">
                        {t.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <figcaption className="font-semibold text-navy-900">{t.name}</figcaption>
                      <p className="text-sm text-amber-600">{t.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 text-sm leading-relaxed">"{t.quote}"</blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal as="h2" className="text-3xl font-bold mb-8 text-navy-900">
            Local in Origin, Global in Impact
          </Reveal>
          <Reveal delay={100} className="text-lg mb-6 text-gray-700">
            We began with rural communities in Swat and are building a model for scalable, collaborative impact across Pakistan and beyond.
          </Reveal>
          <Reveal delay={200}>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow">
              <iframe
                title="Rights Into Reality location map"
                src={contactInfo.mapEmbedUrl}
                className="w-full h-80 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Reveal>
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

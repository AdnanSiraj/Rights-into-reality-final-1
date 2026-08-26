import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import { allActivities, impactStats } from '../data/orgData.js';

const Activities = () => {
  return (
    <div>
      <Hero title="Our Activities" tagline="A closer look at what we've delivered on the ground so far." />

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Since {impactStats.since}, our team has delivered hands-on activities across partner schools
            and communities in Upper Swat — reaching {impactStats.studentsReached} students and engaging{' '}
            {impactStats.communityMembersEngaged} community members.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {allActivities.map((activity, i) => (
            <Reveal key={activity.slug} delay={i * 80}>
              <div id={activity.slug} className="bg-white rounded-lg shadow overflow-hidden scroll-mt-24">
                {activity.photo ? (
                  <img
                    src={activity.photo}
                    alt={activity.title}
                    loading="lazy"
                    className="w-full h-64 object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-64 bg-navy-50 flex flex-col items-center justify-center text-navy-300">
                    <div className="text-5xl mb-2">{activity.icon}</div>
                    <span className="text-sm">Photo coming soon</span>
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-amber-400 text-4xl">{activity.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-navy-900 mb-2">{activity.title}</h2>
                      <p className="text-gray-700 leading-relaxed">{activity.description}</p>
                      {activity.blog && (
                        <p className="text-gray-600 leading-relaxed mt-4 italic">{activity.blog}</p>
                      )}
                      <p className="mt-4 text-sm font-medium text-amber-600">{activity.stat}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-amber-400 text-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Host an Activity at Your School?</h2>
          <p className="text-lg mb-6">
            We partner with schools and community groups across Upper Swat to run these programs.
          </p>
          <Link
            to="/get-involved"
            className="inline-block bg-navy-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Activities;

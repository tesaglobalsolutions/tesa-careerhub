'use client';

import React, { useState } from 'react';

export default function PerksDashboard() {
  const [tab, setTab] = useState<'community' | 'jobs' | 'mentors'>('community');

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Sub-navigation */}
      <div className="flex gap-2 border-b border-slate-800 pb-3">
        {[
          { id: 'community', label: 'Peer Community & Chat' },
          { id: 'jobs', label: 'Job Opportunities' },
          { id: 'mentors', label: 'Book 1-on-1 Mentorship' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setTab(item.id as any)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
              tab === item.id
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Community Feed */}
      {tab === 'community' && (
        <div className="space-y-4">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3">
            <textarea
              rows={2}
              placeholder="Share an update, ask a technical question, or post a win..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-indigo-500 resize-none"
            />
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-500">
                Posting to TESA Global Community
              </span>
              <button className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition">
                Post Message
              </button>
            </div>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-white">
                Adaora N.{' '}
                <span className="text-slate-500 font-normal">
                  • Frontend Student
                </span>
              </span>
              <span className="text-[10px] text-slate-500">2h ago</span>
            </div>
            <p className="text-xs text-slate-300">
              Just finished the React state management module in the Learning
              Portal! The live examples made it so much clearer.
            </p>
          </div>
        </div>
      )}

      {/* Job Board */}
      {tab === 'jobs' && (
        <div className="space-y-3">
          {[
            {
              id: 1,
              title: 'Junior Frontend Developer',
              company: 'Paystack',
              location: 'Lagos / Remote',
              type: 'Full-time',
            },
            {
              id: 2,
              title: 'Data Analyst Intern',
              company: 'TESA Solutions',
              location: 'Remote',
              type: 'Internship',
            },
          ].map((job) => (
            <div
              key={job.id}
              className="p-5 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center"
            >
              <div>
                <h4 className="font-bold text-white text-sm">{job.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {job.company} • {job.location}
                </p>
                <span className="inline-block mt-2 px-2 py-0.5 bg-slate-800 text-[10px] text-slate-300 rounded">
                  {job.type}
                </span>
              </div>
              <button
                onClick={() => alert(`Applying to ${job.title}...`)}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Mentorship Booking */}
      {tab === 'mentors' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: 'Dr. Samuel O.',
              role: 'Senior AI Engineer',
              availability: 'Available Tomorrow',
            },
            {
              name: 'Blessing K.',
              role: 'Product Design Lead',
              availability: 'Available Friday',
            },
          ].map((mentor, index) => (
            <div
              key={index}
              className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-3"
            >
              <div>
                <h4 className="font-bold text-white text-sm">{mentor.name}</h4>
                <p className="text-xs text-indigo-400">{mentor.role}</p>
                <p className="text-[10px] text-slate-500 mt-1">
                  {mentor.availability}
                </p>
              </div>
              <button
                onClick={() => alert(`Booking session with ${mentor.name}...`)}
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-lg transition"
              >
                Book 1-on-1 Session
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

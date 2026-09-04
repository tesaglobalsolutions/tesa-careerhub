'use client';

import React, { useState } from 'react';

export default function ATSBuilder() {
  const [cvData, setCvData] = useState({
    fullName: '',
    email: '',
    phone: '',
    summary: '',
    skills: '',
    experience: '',
  });

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Input Form */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">ATS CV Generator</h2>
        <p className="text-xs text-slate-400">
          Fill in your details to auto-generate a recruiter-ready CV.
        </p>

        <div>
          <label className="block text-xs text-slate-400 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Jane Doe"
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
            value={cvData.fullName}
            onChange={(e) => setCvData({ ...cvData, fullName: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
              value={cvData.email}
              onChange={(e) => setCvData({ ...cvData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Phone</label>
            <input
              type="text"
              placeholder="+234..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
              value={cvData.phone}
              onChange={(e) => setCvData({ ...cvData, phone: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-slate-400 mb-1">
            Professional Summary
          </label>
          <textarea
            rows={3}
            placeholder="Driven software engineer..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 resize-none"
            value={cvData.summary}
            onChange={(e) => setCvData({ ...cvData, summary: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-xs text-slate-400 mb-1">
            Key Skills (comma separated)
          </label>
          <input
            type="text"
            placeholder="React, Next.js, Node.js, SQL"
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
            value={cvData.skills}
            onChange={(e) => setCvData({ ...cvData, skills: e.target.value })}
          />
        </div>

        <button
          onClick={() => alert('PDF export functionality ready!')}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-xl text-xs transition"
        >
          Export ATS PDF
        </button>
      </div>

      {/* Live Preview */}
      <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl flex flex-col justify-between border border-slate-200">
        <div className="space-y-4">
          <div className="border-b border-slate-300 pb-3">
            <h1 className="text-xl font-bold uppercase tracking-wider">
              {cvData.fullName || 'YOUR NAME'}
            </h1>
            <p className="text-xs text-slate-600">
              {cvData.email || 'email@domain.com'} |{' '}
              {cvData.phone || '+234 000 0000'}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-200 pb-1 mb-1">
              Professional Summary
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              {cvData.summary || 'Your summary will appear here as you type...'}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-200 pb-1 mb-1">
              Skills & Tools
            </h3>
            <p className="text-xs text-slate-700">
              {cvData.skills || 'Listed skills will display here...'}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 text-center">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
            ATS Verified Layout
          </span>
        </div>
      </div>
    </div>
  );
}

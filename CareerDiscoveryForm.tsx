'use client';

import React, { useState } from 'react';

export default function CareerDiscoveryForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    interests: '',
    experience: '',
    goal: '',
  });

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
      <div className="mb-6">
        <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
          Step {step} of 3
        </span>
        <h2 className="text-2xl font-bold text-white mt-1">
          Career Assessment Engine
        </h2>
        <p className="text-sm text-slate-400">
          Discover tailored tech pathways based on your skill set.
        </p>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-300">
            What fields interest you most?
          </label>
          <input
            type="text"
            placeholder="e.g. Data Analytics, Web Development, UI/UX"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            value={formData.interests}
            onChange={(e) =>
              setFormData({ ...formData, interests: e.target.value })
            }
          />
          <button
            onClick={() => setStep(2)}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition text-sm"
          >
            Next Step &rarr;
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-300">
            What is your current experience level?
          </label>
          <select
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            value={formData.experience}
            onChange={(e) =>
              setFormData({ ...formData, experience: e.target.value })
            }
          >
            <option value="">Select Level</option>
            <option value="beginner">
              Beginner (No prior coding / tech experience)
            </option>
            <option value="intermediate">
              Intermediate (Some self-taught / entry level)
            </option>
            <option value="advanced">
              Advanced (Looking to transition / upskill)
            </option>
          </select>
          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="w-1/2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-3 rounded-xl transition text-sm"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="w-1/2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition text-sm"
            >
              Next Step &rarr;
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-300">
            What is your primary career goal?
          </label>
          <input
            type="text"
            placeholder="e.g. Land a remote junior developer role in 6 months"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
          />
          <div className="flex gap-3">
            <button
              onClick={() => setStep(2)}
              className="w-1/2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-3 rounded-xl transition text-sm"
            >
              Back
            </button>
            <button
              onClick={() => alert('Assessment Submitted!')}
              className="w-1/2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-xl transition text-sm"
            >
              Generate Career Path
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

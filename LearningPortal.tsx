'use client';

import React, { useState } from 'react';

export default function LearningPortal() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses = [
    {
      id: '1',
      title: 'Full-Stack Web Development',
      price: '₦25,000',
      duration: '8 Weeks',
      locked: false,
    },
    {
      id: '2',
      title: 'Data Analytics & AI Mastery',
      price: '₦25,000',
      duration: '6 Weeks',
      locked: true,
    },
    {
      id: '3',
      title: 'UI/UX Design Systems',
      price: '₦20,000',
      duration: '4 Weeks',
      locked: true,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Learning Portal</h2>
          <p className="text-sm text-slate-400">
            Access your enrolled courses and unlock new career tracks.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-indigo-400 border border-slate-700">
                  {course.duration}
                </span>
                {course.locked && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Locked
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {course.title}
              </h3>
              <p className="text-xl font-black text-indigo-400 mb-6">
                {course.price}
              </p>
            </div>

            <button
              onClick={() => setSelectedCourse(course.title)}
              className={`w-full py-3 rounded-xl font-semibold text-sm transition ${
                course.locked
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
              }`}
            >
              {course.locked ? 'Unlock Course' : 'Continue Learning'}
            </button>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="p-4 bg-indigo-950/50 border border-indigo-800/50 rounded-xl text-center">
          <p className="text-sm text-indigo-200">
            Selected track:{' '}
            <span className="font-bold text-white">{selectedCourse}</span>.
            Redirecting to payment checkout...
          </p>
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Search, MapPin, CheckCircle2, Video, Clock, BellRing, PhoneCall, X } from 'lucide-react';

export default function Home() {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  const [userRole, setUserRole] = useState<'seeker' | 'company' | 'admin'>('seeker');
  const [activeInterviewJob, setActiveInterviewJob] = useState<any | null>(null);

  const jobsList = [
    {
      id: 1,
      title: 'Senior Cybersecurity Engineer',
      company: 'CloudShield Tech',
      location: 'Remote',
      type: 'Full-time',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&auto=format&fit=crop&q=80',
      tags: ['Security', 'Cloudflare', 'Network Defense'],
      interviewTime: 'Interview starts in 15 hours',
      roomCode: 'ROOM-CYBER-402'
    },
    {
      id: 2,
      title: 'Full Stack Next.js Developer',
      company: 'Apex Digital Solutions',
      location: 'Riyadh, KSA',
      type: 'Full-time',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&auto=format&fit=crop&q=80',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
      interviewTime: 'Interview starts in 24 hours',
      roomCode: 'ROOM-NEXT-881'
    },
    {
      id: 3,
      title: 'Product Designer (UI/UX)',
      company: 'Vanguard Labs',
      location: 'Hybrid',
      type: 'Contract',
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&auto=format&fit=crop&q=80',
      tags: ['Figma', 'User Research', 'Prototyping'],
      interviewTime: 'Interview starts in 6 hours',
      roomCode: 'ROOM-UI-309'
    }
  ];

  const filteredJobs = jobsList.filter(job => {
    const matchesTitle = job.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchTitle.toLowerCase()));
    const matchesLocation = job.location.toLowerCase().includes(searchLocation.toLowerCase());
    return matchesTitle && matchesLocation;
  });

  const handleApply = (id: number) => {
    if (!appliedJobs.includes(id)) {
      setAppliedJobs([...appliedJobs, id]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative">
      {/* Navigation Header */}
      <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-base shadow-sm">
              H
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">Hiried</span>
          </div>

          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
            <button 
              onClick={() => setUserRole('seeker')}
              className={`px-3 py-1.5 rounded-lg transition ${
                userRole === 'seeker' ? 'bg-white text-slate-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              تقديم على وظيفة
            </button>
            <button 
              onClick={() => setUserRole('company')}
              className={`px-3 py-1.5 rounded-lg transition ${
                userRole === 'company' ? 'bg-white text-slate-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              شركة
            </button>
            <button 
              onClick={() => setUserRole('admin')}
              className={`px-3 py-1.5 rounded-lg transition ${
                userRole === 'admin' ? 'bg-white text-slate-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              أدمن
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-extrabold text-2xl shadow-md">
              H
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            {userRole === 'company' && 'Company Portal & Applicant Management'}
            {userRole === 'seeker' && 'Find your next career opportunity with Hiried'}
            {userRole === 'admin' && 'Platform Control Center & System Oversight'}
          </h1>
          
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mb-8 font-medium">
            {userRole === 'company' && 'Review applicants and manage secure live video interviews.'}
            {userRole === 'seeker' && 'Direct job search platform with automated video interview scheduling.'}
            {userRole === 'admin' && 'Monitor platform activity and server statuses.'}
          </p>

          {userRole !== 'admin' && (
            <div className="bg-white p-2 rounded-xl shadow-lg border border-slate-200 flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
              <div className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <Search className="w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                  placeholder="Job title or skills..." 
                  className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400 text-xs font-medium"
                />
              </div>
              
              <div className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <MapPin className="w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="City or Remote..." 
                  className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400 text-xs font-medium"
                />
              </div>

              <button 
                onClick={() => {
                  document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-slate-900 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-slate-800 transition text-xs cursor-pointer"
              >
                Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-12 max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            {userRole === 'company' ? 'Your Posted Positions' : 'Available Positions for Live Interviews'}
          </h2>
          <span className="text-xs font-medium text-slate-500">{filteredJobs.length} positions available</span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredJobs.map((job) => {
            const isApplied = appliedJobs.includes(job.id);
            return (
              <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition flex flex-col gap-4">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <img src={job.logo} alt={job.company} className="w-14 h-14 rounded-xl object-cover border border-slate-200" />
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{job.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <span>{job.company}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">{job.type}</span>
                      </div>
                      <div className="flex gap-1.5 mt-2.5">
                        {job.tags.map((tag, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
                    {userRole === 'seeker' && (
                      <button 
                        onClick={() => handleApply(job.id)}
                        disabled={isApplied}
                        className={`text-xs font-semibold px-5 py-2.5 rounded-xl transition flex items-center gap-2 ${
                          isApplied 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-default' 
                            : 'bg-slate-900 text-white hover:bg-slate-800 cursor-pointer shadow-sm'
                        }`}
                      >
                        {isApplied ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            Applied Successfully
                          </>
                        ) : (
                          'Apply Now'
                        )}
                      </button>
                    )}

                    {userRole === 'company' && (
                      <button className="text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 px-4 py-2 rounded-lg hover:bg-indigo-100 transition">
                        Manage Applicants
                      </button>
                    )}
                  </div>
                </div>

                {/* شريط التوقيت والمقابلة */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 text-slate-700 font-medium">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>{job.interviewTime}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <BellRing className="w-3.5 h-3.5 text-indigo-600" /> Auto-alert 30 mins before session
                    </span>
                  </div>

                  {isApplied ? (
                    <button 
                      onClick={() => setActiveInterviewJob(job)}
                      className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold px-4 py-2 rounded-lg transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Video className="w-4 h-4" /> Join Video Interview Room
                    </button>
                  ) : (
                    <span className="text-slate-400 font-medium text-[11px]">
                      Apply to unlock video interview room
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* نافذة الفيديو المنبثقة */}
      {activeInterviewJob && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-3xl p-6 text-white relative shadow-2xl">
            <button 
              onClick={() => setActiveInterviewJob(null)}
              className="absolute top-5 left-5 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center pt-4 pb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800 mb-3">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span> Secure Encrypted Room
              </div>
              <h3 className="text-xl font-black">{activeInterviewJob.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{activeInterviewJob.company} — Room ID: {activeInterviewJob.roomCode}</p>
            </div>

            <div className="bg-slate-950 rounded-2xl p-10 text-center border border-slate-800 mb-6">
              <Video className="w-16 h-16 mx-auto text-slate-600 mb-4 animate-pulse" />
              <h4 className="text-sm font-bold text-slate-300">Connecting to hiring manager...</h4>
              <p className="text-xs text-slate-500 mt-1">A reminder message will be sent 30 minutes prior to the session.</p>
            </div>

            <div className="flex justify-center gap-3">
              <button 
                onClick={() => setActiveInterviewJob(null)}
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Leave / End Interview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        <p>©️ 2026 Hiried Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
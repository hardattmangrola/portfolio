import React from 'react';
import Section from './Section';

const Experience = () => {
    return (
        <Section id="experience" className="py-20">
            <h2 className="text-4xl font-bold mb-12 font-mono">Experience & Research<span className="text-blue-500">.</span></h2>

            <div className="space-y-12 relative border-l border-gray-800 ml-3 md:ml-6 pl-8 md:pl-12">
                <div className="relative">
                    <span className="absolute -left-[43px] md:-left-[59px] top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-[#050505]"></span>
                    <h3 className="text-2xl font-bold">Researcher</h3>
                    <p className="text-lg text-gray-400 mb-2">Nirma University &bull; Dec 2024 – Jan 2025</p>
                    <p className="text-gray-300 mb-4">LLM-Driven Framework for Wireless Security Underlying uRLLC</p>
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                        <li>Developed a real-time anomaly detection framework using LLMs.</li>
                        <li>Published in CCCI 2025.</li>
                    </ul>
                </div>

                <div className="relative">
                    <span className="absolute -left-[43px] md:-left-[59px] top-2 w-5 h-5 bg-gray-700 rounded-full border-4 border-[#050505]"></span>
                    <h3 className="text-2xl font-bold">CP/DSA Lead</h3>
                    <p className="text-lg text-gray-400 mb-2">Google Developer Group On Campus (GDG) &bull; Sept 2025 – Present</p>
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                        <li>Mentoring 100+ students in Data Structures and Algorithms.</li>
                        <li>Organizing workshops and coding sessions.</li>
                        <li>Leading structured practice initiatives.</li>
                    </ul>
                </div>

                <div className="relative">
                    <span className="absolute -left-[43px] md:-left-[59px] top-2 w-5 h-5 bg-gray-700 rounded-full border-4 border-[#050505]"></span>
                    <h3 className="text-2xl font-bold">Core Committee Member</h3>
                    <p className="text-lg text-gray-400 mb-2">Computer Society of India (CSI) &bull; Oct 2024 – Sept 2025</p>
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                        <li>Organized HackNUThon (1,200+ students).</li>
                        <li>Coordinated logistics and problem statement planning.</li>
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default Experience;

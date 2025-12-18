import React from 'react';
import Section from './Section';

const EducationAwards = () => {
    return (
        <Section id="education" className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-bold mb-8 font-mono">Education<span className="text-blue-500">.</span></h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold">Nirma University</h3>
                            <p className="text-gray-400 text-sm mb-1">B.Tech in Computer Science & Engineering</p>
                            <p className="text-gray-500 text-xs tracking-wider uppercase mb-2">2023 – 2027 &bull; CGPA: 9.46</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Chanderbala Modi Academy</h3>
                            <p className="text-gray-400 text-sm mb-1">Higher Secondary Education</p>
                            <p className="text-gray-500 text-xs tracking-wider uppercase mb-2">2020 – 2022</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-8 font-mono">Awards<span className="text-blue-500">.</span></h2>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">▹</span>
                            <div>
                                <strong className="text-white block">2025 Finalist, Odoo Hackathon</strong>
                                <span className="text-gray-500 text-sm">Gandhinagar</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">▹</span>
                            <div>
                                <strong className="text-white block">2025 Finalist, Code For Good</strong>
                                <span className="text-gray-500 text-sm">JPMorgan Chase</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">▹</span>
                            <div>
                                <strong className="text-white block">2025 Marketing Marathon</strong>
                                <span className="text-gray-500 text-sm">E-Cell, Nirma University</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">▹</span>
                            <div>
                                <strong className="text-white block">2024 Silver Medalist</strong>
                                <span className="text-gray-500 text-sm">Nirma University</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">▹</span>
                            <div>
                                <strong className="text-white block">2024 Participant</strong>
                                <span className="text-gray-500 text-sm">GirlScript Summer of Code</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default EducationAwards;

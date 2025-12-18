import React from 'react';
import Section from './Section';

const Skills = () => {
    const categories = [
        {
            title: "Programming Languages",
            skills: ["C", "C++", "Python", "Java"]
        },
        {
            title: "Web Development",
            skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "REST APIs"]
        },
        {
            title: "Databases",
            skills: ["MySQL", "MongoDB", "PostgreSQL"]
        },
        {
            title: "Cloud & Tools",
            skills: ["AWS (Basic)", "Git", "GitHub", "Linux", "VS Code", "Tableau", "Knime"]
        },
        {
            title: "Machine Learning & AI",
            skills: ["PyTorch", "OpenCV", "Numpy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"]
        }
    ];

    return (
        <Section id="skills" className="py-20">
            <h2 className="text-4xl font-bold mb-12 font-mono">Skills<span className="text-blue-500">.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-semibold mb-4 text-gray-200">{cat.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 font-mono">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;

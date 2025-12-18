import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "HireMitraAI",
      tech: "Streamlit, Groq, PyMuPDF, Apify",
      description: "An AI-assisted job recommendation application that analyzes a PDF resume and surfaces top job postings from LinkedIn and Naukri.",
      achievements: [
        "Resume analysis from PDF upload with AI-generated summary and skill gaps.",
        "Top 5 job recommendations using Apify for job data.",
        "Robust display with graceful handling of missing fields."
      ],
      link: "https://github.com/hardattmangrola/HireMitraAI"
    },
    {
      title: "MindSprint",
      tech: "React, Node.js, MongoDB, AI-Powered",
      description: "A comprehensive wellness tracking application that combines AI-powered chat assistance with detailed mood and wellness monitoring.",
      achievements: [
        "Provides users with personalized insights and data-driven wellness reports.",
        "Integrates AI-powered mental health assistance.",
        "Tracks daily wellness metrics like mood, energy, and stress."
      ],
      link: "https://github.com/hardattmangrola/MindSprint"
    },
    {
      title: "PriceSense",
      tech: "PyTorch, Transformers, CLIP, DeBERTa-v3",
      date: "Oct 2025",
      description: "Developed a multimodal regression system combining text, image, and numeric features for accurate product price prediction.",
      achievements: [
        "Integrated DeBERTa-v3, CLIP-ViT-B/16, and numeric encoders using an Adaptive Attention Fusion and Mixture-of-Experts architecture.",
        "Achieved 51% SMAPE, outperforming baseline models through dual expert heads and value-weighted loss optimization."
      ],
      link: "https://github.com/hardattmangrola/PriceSense"
    },
    {
      title: "UNIX Inode Simulator",
      tech: "Interactive Visualization",
      description: "Interactive visualization of how UNIX-like file systems use inodes to manage files.",
      achievements: [
        "Demonstrates inode-based system powering UNIX file systems.",
        "Visualizes how files are stored across disk blocks (direct, indirect pointers).",
        "Allows experimentation with file creation and real-time effects."
      ],
      link: "https://github.com/hardattmangrola/Inode-File-System-Stimulator"
    },
    {
      title: "CaptionAI",
      tech: "FastAPI, BLIP, Transformers, HTML/CSS/JS",
      description: "An AI-powered Image Caption Generator that creates meaningful captions for your images using BLIP.",
      achievements: [
        "Generates AI-based captions from uploaded images.",
        "FastAPI backend with Hugging Face Transformers.",
        "One-click Copy, Download, or Share options."
      ],
      link: "https://github.com/hardattmangrola/CaptionAI"
    },
    {
      title: "PixVerNet",
      tech: "PyTorch, EfficientNetV2, Pix2Pix GAN",
      date: "Oct 2025",
      description: "Implemented an image authenticity classification pipeline trained on the 11GB AI vs Human Generated Images dataset.",
      achievements: [
        "Utilized EfficientNetV2 for precise real vs AI image detection.",
        "Utilized a paired real–synthetic image corpus enabling rich feature extraction.",
        "Created a Pix2Pix-based generative module to convert user inputs into synthetic counterparts for side-by-side assessment."
      ],
      link: "https://github.com/hardattmangrola/PixVerNet"
    },
    {
      title: "Talk2DB",
      tech: "React, Flask, MySQL, Pandas, Gemini API",
      date: "Sept 2025",
      description: "Developed an LLM-powered Natural Language Query System that converts plain-English prompts into executable SQL.",
      achievements: [
        "Engineered a multi-CSV ingestion and auto-relation pipeline.",
        "Built RESTful APIs using Flask and integrated with a React-based frontend featuring interactive query results and theme switching."
      ],
      link: "https://github.com/hardattmangrola/Talk2DB"
    }
  ];

  return (
    <Section id="projects" className="py-20">
      <h2 className="text-4xl font-bold mb-12 font-mono">Selected Projects<span className="text-blue-500">.</span></h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-white/20 transition-all"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">{project.date}</span>
              </div>
              <p className="text-sm text-blue-400 font-mono mb-6">{project.tech}</p>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <ul className="space-y-2 mb-8 list-disc list-inside text-sm text-gray-400">
                {project.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>

              <a href={project.link} className="inline-flex items-center text-sm font-semibold hover:text-blue-400 transition-colors">
                View on GitHub <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

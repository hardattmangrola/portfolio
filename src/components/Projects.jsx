import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

import HireMitraPic from '../assets/hiremitra.jpg';
import MindSprintPic from '../assets/mindsprint.png';
import PriceSensePic from '../assets/pricesense.jpg';
import InodePic from '../assets/inode.png';
import PixVerNetPic from '../assets/pixvernet.jpg';
import Talk2DBPic from '../assets/talk2db.png';
import CaptionAIPic from '../assets/captionAi.png';

const Projects = () => {
  const projects = [
    {
      title: "HireMitraAI",
      tech: "Streamlit, Groq, PyMuPDF, Apify",
      date: "Oct 2025",
      pic: HireMitraPic,
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
      date: "Sept 2025",
      pic: MindSprintPic,
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
      pic: PriceSensePic,
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
      date: "Sept 2025",
      pic: InodePic,
      description: "Interactive visualization of how UNIX-like file systems use inodes to manage files.",
      achievements: [
        "Demonstrates inode-based system powering UNIX file systems.",
        "Visualizes how files are stored across disk blocks (direct, indirect pointers).",
        "Allows experimentation with file creation and real-time effects."
      ],
      link: "https://github.com/hardattmangrola/Inode-File-System-Stimulator"
    },
    {
      title: "PixVerNet",
      tech: "PyTorch, EfficientNetV2, Pix2Pix GAN",
      date: "Oct 2025",
      pic: PixVerNetPic,
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
      pic: Talk2DBPic,
      description: "Developed an LLM-powered Natural Language Query System that converts plain-English prompts into executable SQL.",
      achievements: [
        "Engineered a multi-CSV ingestion and auto-relation pipeline.",
        "Built RESTful APIs using Flask and integrated with a React-based frontend featuring interactive query results and theme switching."
      ],
      link: "https://github.com/hardattmangrola/Talk2DB"
    },
    {
      title: "CaptionAI",
      tech: "FastAPI, BLIP, Transformers, HTML/CSS/JS",
      date: "April 2025",
      pic: CaptionAIPic,
      description: "An AI-powered Image Caption Generator that creates meaningful captions for your images using BLIP.",
      achievements: [
        "Generates AI-based captions from uploaded images.",
        "FastAPI backend with Hugging Face Transformers.",
        "One-click Copy, Download, or Share options."
      ],
      link: "https://github.com/hardattmangrola/CaptionAI"
    },
  ];

  return (
    <Section id="projects" className="py-20">
      <h2 className="text-4xl font-bold mb-12 font-mono">My Projects<span className="text-blue-500">.</span></h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-white/20 transition-all flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-full h-48 bg-gray-900/50 rounded-xl mb-6 overflow-hidden border border-white/5 flex items-center justify-center group-hover:border-white/10 transition-colors">
                <img src={project.pic} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">{project.date}</span>
              </div>
              <p className="text-sm text-blue-400 font-mono mb-6">{project.tech}</p>
              <p className="text-gray-300 mb-8 leading-relaxed flex-grow">{project.description}</p>

              <div className="mt-auto">
                <a href={project.link} className="inline-flex items-center text-sm font-semibold hover:text-blue-400 transition-colors">
                  View on GitHub <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

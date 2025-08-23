import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpeg";

export const HERO_CONTENT = `I am a curious and enthusiastic full stack developer in the making, with a strong foundation in computer science and a passion for building impactful projects. Currently pursuing my B.Tech in Computer Science and Engineering at Nirma University, I enjoy working with modern technologies like React, Node.js, and MongoDB to create interactive and scalable web applications. I’m eager to explore innovative solutions, contribute to real-world projects, and continuously grow as a developer while turning ideas into reality.`;

export const ABOUT_TEXT = `I am a passionate computer science student who loves blending creativity with technology. My interests span full stack development, AI research, and tackling challenges through competitions. Beyond coding, I find inspiration in music and enjoy exploring new ideas, places, and technologies that push me to grow personally and professionally.`;

export const PROJECTS = [
  {
    title: "Globe Trotter",
    image: project1,
    description:
      "A personalized travel planning with integrated APIs for hotels, flights, and weather,secure authentication and database-backed itinerary",
    technologies: ["React", "Express.js", "MongoDB", "JWT"],
  },
  {
    title: "CaptionAI",
    image: project2,
    description:
      "An AI-powered Image Caption Generator that creates meaningful captions for your images using BLIP.",
    technologies: ["HTML", "CSS", "JavaScript", "FastAPI", "Uvicorn",  "PyTorch"],
  },
  {
    title: "Diabetes Prediction",
    image: project3,
    description:
      "Uses various machine learning models - K-Nearest Neighbors (KNN), XGBoost, Support Vector Machine (SVM), Random Forest.",
    technologies: ["Machine Learning"],
  },
  {
    title: "Cipher Chronicle",
    image: project4,
    description:
      "A secure personal diary application using XOR-based encryption. ",
    technologies: ["C"],
  },
];

export const CONTACT = {
  address: "Ahemdabad",
  email: "hardattmangrola55@gmail.com",
};

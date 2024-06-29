"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Assuming framer-motion is already imported
import Image from "next/image";

interface ExperienceItem {
  title: string;
  institution?: string;
  company?: string;
  period?: string;
  location?: string;
  description?: string;
}

interface RoadmapProps {
  data: ExperienceItem[];
}

// Dummy data for education and professional experiences
const educationData = [
  {
    title: "Bachelor's Degree in Computer Engineering",
    institution: "University of Illinois Urbana-Champaign",
    period: "2023 - 2027",
    location: "Champaign-Urbana, Illinois",
    description: `
      <ul>
        <li>
          As a current sophomore pursuing a Bachelor's degree in Computer Engineering at the University of Illinois Urbana-Champaign, I have engaged deeply in coursework encompassing digital logic design, circuit analysis, embedded systems, and Assembly with LC-3 and C/C++. 
        </li>
        <li>
          My academic journey is underscored by a robust foundation in mathematics and physics, including advanced studies in three-dimensional calculus and linear algebra. I am particularly drawn to the realms of Machine Learning and Artificial Intelligence, leveraging hands-on experience gained through pivotal roles in research projects and internships. Under the mentorship of industry leaders, distinguished professors, and PhD students, I have contributed to cutting-edge developments in AI, refining my skills in data-driven problem-solving and innovative algorithm design.
        </li>
      </ul>
    `,
  },
  {
    title: "High School Diploma",
    institution: "Stevenson High School",
    location: "Lincolnshire, Illinois",
    description: "Achieved High School Diploma with distinction from Stevenson High School, excelling academically with completion and high achievement in 13 Advanced Placement (AP) courses. Beyond academic excellence, I actively participated in a diverse array of extracurricular activities, both academic and non-academic, enriching my personal growth and fostering a well-rounded skill set.",
  },
];

const professionalData = [
  {
    title: "AI Developer Intern",
    company: "thewalnut.ai",
    period: "Jun. 2024 - Current",
    description: `
      <ul>
        <li>
          As an AI Developer at thewalnut.ai, I am working with Large Language Models (LLMs) and SQL databases in order to develop NL2SQL models using open-Source models which will enable interacting with SQL databases via Natural Language on private servers. 
        </li>
        <li>
          Developed initial prototype using LLama 3 and the Langchain SQL Agent for intial testing purposes.
        </li>
        <li>
          I have worked with both closed-source LLMs (GPT-3.5, GPT-4) and open-source LLMs (Llama 3, Mistral) and evaluated them on various benchmarks such as the Spider Benchmark and the Bird Benchmark to evaluate model capabilities and document them.
        </li>
        <li>
          I am currently working on improving the performance of currently available open-source LLMs through Direct Preference Optimization (DPO), Fine-tuning and Reinforcement Learning from Human Feedback (RLHF) to improve open-source model performance for clients and reducing costs.
        </li>
        <li>
          Conducting research into existing techniques and framework to augment that capabilites of LLMs to understand and interact with SQL databases. 
        </li>
      </ul>
    `,
  },
  {
    title: "LLM Research Intern",
    company: "Department of Electrical and Computer Engineering",
    period: "March 2024 - Present",
    description: `
      <ul>
        <li>
          Developed an innovative Artificial Intelligence-based Teaching Assistant to support students in the ECE120 course on computer architecture design.
        </li>
        <li>
          Utilized advanced Retrieval Augmented Generation (RAG) techniques with Langchain and ChromaDB to enhance learning outcomes in C programming.
        </li>
      </ul>
    `,
  },
  {
    title: "Deep Learning Research Intern",
    company: "Multimodality Research Lab, University of Illinois Urbana-Champaign",
    period: "Feb. 2024 - Present",
    description: `
      <ul>
        <li>
          Conducted pioneering research in deep learning, focusing on MRI brain scans using state-of-the-art architectures including U-Net, SegNet, and FCN.
        </li>
        <li>
          Collaborated intensively with a PhD student mentor to optimize model performance using TensorFlow, Keras, and Matplotlib, contributing significantly to project success.
        </li>
      </ul>
    `,
  },
  {
    title: "Research Intern",
    company: "Ecoservity Inc",
    period: "Dec. 2023 - Current",
    description: `
      <ul>
        <li>
          As an LLM Integration Engineer at Ecoservity Inc, I led the development of an advanced conversational bot utilizing cutting-edge technologies including Llama 3, Ollama, Pandas, PandasAI, langchain, llama-index, and HuggingFace. This project achieved exceptional user engagement and satisfaction rates.
        </li>
        <li>
          Engineered seamless data integration pathways to enhance data accessibility and retrieval efficiency, thereby enabling deeper insights and informed decision-making.
        </li>
      </ul>
    `,
  },
];

const Roadmap = ({ data }: RoadmapProps) => {
  return (
    <div className="roadmap-container overflow-hidden">
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`roadmap-item ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="roadmap-content">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <h3 className="text-lg">{item.institution || item.company}</h3>
            <p className="text-gray-600">{item.period}</p>
            {item.location && <p className="text-gray-700">{item.location}</p>}
            {item.description && (
              <div
                className="text-black-700 roadmap-description"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Encryption = () => {
  const [selectedSection, setSelectedSection] = useState('Education');

  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          className="text-[40px] font-medium text-center text-gray-200"
          id="research"
        >
          My
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "} Experience {" "}
          </span>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center absolute z-[20] w-auto h-auto">
        <div className="flex flex-row space-x-4 mb-4">
          <button
            onClick={() => setSelectedSection('Education')}
            className={`px-4 py-2 rounded ${selectedSection === 'Education' ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            Education
          </button>
          <button
            onClick={() => setSelectedSection('Professional')}
            className={`px-4 py-2 rounded ${selectedSection === 'Professional' ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            Professional
          </button>
        </div>
        <Roadmap data={selectedSection === 'Education' ? educationData : professionalData} />
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Explore my projects in depth!
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="./encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
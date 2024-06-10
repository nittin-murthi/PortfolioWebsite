"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "@/utils/motion";

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
    title: "Bachelor's Degree in Computer Enginering",
    institution: "University of Illinois Urbana-Champaign",
    period: "2023 - 2027",
    location: "Champaign-Urbana, Illinois",
    description: "Current Sophomore as a Computer Engineering major. I have currently completed coursework in fundamental digital logic design and embedded systems which provided me with a strong background in Assembly through the LC-3 and C/C++ with a strong background in mathematics and physics having completed coursework in three dimensional calculus and foundational linear algebra. I plan on conentrating within the field of Machine Learning and Artificial Intelligence through my technical electives in my upcoming years. I have already participated and gained valuable experience through research project within the field working under the suprvision of knowledgable professors and PhD Students.",
  },
  {
    title: "High School Diploma",
    institution: "Stevenson High School",
    location: "Lincolshire, Illinois",
    description: "Completed High School Diploma at Stevenson High School. Succesfully completed and earned credit on 13 AP Courses. Parciticated in numerous academic and non-academic extracurriculars for personal enrichment.",
  },
];

const professionalData = [
  {
    title: "Research Intern",
    company: "Ecoservity Inc",
    period: "Dec. 2023 - Current",
    description: "As an LLM Integration Engineer at Ecoservity Inc, I led the development of a state-of-the-art conversational bot using Llama 3, OpenAI API, llama-index, PandasAI and HuggingFace, achieving remarkable user engagement and satisfaction rates. I also engineered seamless data integration pathways for data analysis, boosting data accessibility and retrieval efficiency and most importantly data derived insights for further analysis. I implemented advanced techniques like Direct Preference Optimization (DPO) to fine-tune large language models and Reinforcement Learning from Human Feedback (RLHF) throughout the processes to continually optimize the accuracy and efficiency of the model. I closely collaborated with the CEO in order to deploy it on the company’s AWS server and Microsoft PowerBI. Finally, I was able to integrate all the existing capabilities of the bot with SQL and .json data formats using PandasAI.",
  },
  {
    title: "Deep Learning Research Intern",
    company: "Multimodality Research Lab, University of Illinois Urbana-Champaign",
    period: "Feb. 2023 - Present",
    description: "During my research internship at the Multimodality Research Lab at the University of Illinois Urbana-Champaign, I developed and trained deep learning models on MRI brain scans, achieving notable results with U-Net, SegNet, and FCN architectures. I collaborated closely with a PhD student mentor, utilizing tools like TensorFlow, Keras, and Matplotlib to optimize model performance and contribute to the success of the research project.",
  },
  {
    title: "LLM Research Intern",
    company: "Deparment of Electrical and Computer Engineering",
    period: "March 2023- Present",
    description: "In an effort to enhance the learning experience for students enrolled in the introductory computer architecture design course ECE120, I developed an Artificial Intelligence-based Teaching Assistant. Leveraging Retrieval Augmented Generation (RAG) techniques with Langchain and ChromaDB, I provided assistance to students in C programming. To find the optimal balance between cost and performance, I experimented with multiple open-source and closed-source Large Language Models (LLMs), including Llama 3, LLama 2, Code-Llama, Mistral, GPT 3.5, and GPT-4. Additionally, I read research papers on novel RAG techniques such as self-correcting RAGs and Direct Preference Optimization (DPO), successfully implementing them to improve the overall performance of the Teaching Assistant.",
  },
];

const Roadmap = ({ data }: RoadmapProps ) => {
    return (
      <div className="roadmap-container">
        {data.map((item, index) => (
          <div key={index} className={`roadmap-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="roadmap-content">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <h3 className="text-lg">{item.institution || item.company}</h3>
              <p className="text-gray-600">{item.period}</p>
              {item.location && <p className="text-gray-700">{item.location}</p>}
              {item.description && <p className="text-black-700">{item.description}</p>}
            </div>
          </div>
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
            variants={slideInFromTop}
            className="text-[40px] font-medium text-center text-gray-200"
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
          src="./encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;

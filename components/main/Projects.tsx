"use client"

import React, { useState } from 'react';
import ProjectCard from "../sub/ProjectCard";

const Projects: React.FC = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const projects = [
        {
            title: "Deep Learning for Vascular Segmentation",
            highlights: `Developed and trained deep learning models on MRI brain scans, achieving notable results: 
               U-Net: Achieved a Mean IoU of 0.813, a Precision of 0.935, and an Accuracy of 0.9878.
               SegNet: Attained a Precision of 0.9001 and a Recall of 0.8748.
               FCN: Produced a Precision of 0.916 and an Accuracy of 0.989.
               To optimize the segmentation performance, a custom loss function was developed that combines several complementary loss components: Dice loss, Intersection over Union (IoU) loss, Binary cross-entropy (BCE) loss term, Boundary loss.
               The final combined loss function is a weighted sum of these four components, with the weights (α, β, γ, δ) empirically tuned to balance the contributions of each loss term. This multifaceted loss function helps the model optimize for both global and local segmentation accuracy, leading to improved overall performance.`,
            skills: "Python, Tensorflow, Keras, PyTorch, Scikit-Learn, Pandas, Numpy, Amazon Sagemaker, NVIDIA CUDA, Jupyter Notebook",
            buttonText: "Download Research Poster (Coming soon)",
            buttonLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
            buttonDownload: true
        },
        {
            title: "Data Insight Extraction using LLMs",
            highlights: `Led the development of a state-of-the-art conversational bot using Llama 3, Ollama, PandasAI, llama-index, and langchain, achieving a 42% increase in user engagement with the company data as reported by the CEO and 94% satisfaction rating within 3 months of implementing and testing as reported by the employees. 
               Engineered seamless data integration pathways for (CSV, JSON, Parquet) files with PandasAI, and Langchain, boosting Data accessibility by 64% and Retrieval efficiency by 78% as the mean score reported by employees. 
               Mastered intricate technologies (llama index, Hugging Face, PyTorch) through focused study, swiftly implementing solutions for direct data interaction at Ecoservity Inc.
               Implemented Direct Preference Optimization (DPO) using libraries like Hugging Face Transformers (HLT) to fine-tune large language models and reduce reliance on complex Reinforcement Learning from Human Feedback (RLHF) techniques.`,
            skills: "Python, Llama 3, OpenAI, Mistral, Pandas AI, Retrieval Augmented Generation, ChromaDB, PandasAI, Numpy, DPO, RLHF, Fine-tuning, Streamlit, Hugginface, Transformers, Embeddings, Pandas, Llama-Index, Matplotlib, PowerBI, AWS, SQL, JSON.",
            buttonText: "View Image (Coming soon)",
            buttonLink: "./ecoservity_logo.jpeg"
        },
        {
            title: "Artificial Intelligence based Teaching Assistant for ECE-120",
            highlights: `Developing an Artificial-Intelligence based Teaching Assistant for a course titled "ECE120," which is an introductory computer architecture design course.
               Utilized Retrieval Augmented Generation (RAG) using Langchain and ChromaDB to provide assistance towards students in C programming.
               Experimented with multiple open-source LLM (notable ones include Llama 3, LLama 2, Code-Llama, and Mistral) and closed-source LLMs (notable ones include GPT 3.5 and GPT-4) to find an optimal model balancing cost and performance.
               Read research papers on novel RAG techniques such as self-correcting RAGs and Direct Preference Optimization (DPO) and successfully implemented it to improve performance.`,
            skills: "Python, Llama 3, Code-Lllama, Llama 2, OpenAI, ChromaDB, Langchain, DPO, RLHF, NLTK, Git/GitHub.",
            buttonText: "View Image (Coming soon)",
            buttonLink: "./.png"
        },
        {
            title: "Estimating GFR Using Machine Learning",
            highlights: `Conducted a comprehensive analysis of 16 machine learning algorithms to identify the optimal algorithm for estimating Glomerular Filtration Rate (eGFR) in clinical settings.
               Utilized Scikit-Learn for Regression Models, XGBoost for Decision Tree Models, and Tensorflow for Neural Networks.
               Significantly improved model performance through rigorous significance testing and data visualizations, contributing to enhanced clinical accuracy.`,
            skills: "Python, Tensorflow, Keras, Scikit-Learn, XGBoost, SciPy, numpy, pandas, matplotlib, seaborn.",
            buttonText: "Download Model Training Results (Coming soon)",
            buttonLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
            buttonDownload: true
        }
    ];

    const nextProject = () => {
        setCurrentProjectIndex((currentProjectIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProjectIndex((currentProjectIndex - 1 + projects.length) % projects.length);
    };

    return (
        <div className='bg-gray-900 text-white flex flex-col items-center justify-center py-20'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                Experience Highlights
            </h1>
            <div className='w-full max-w-4xl px-4'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        src=""
                        title={project.title}
                        highlights={project.highlights}
                        skills={project.skills}
                        buttonText={project.buttonText}
                        buttonLink={project.buttonLink}
                        buttonDownload={project.buttonDownload}
                        style={{ display: index === currentProjectIndex ? 'block' : 'none' }}
                    />
                ))}
            </div>
            {projects.length > 1 && (
                <div className="mt-5 flex justify-center space-x-4">
                    <button onClick={prevProject} className="px-4 py-2 bg-purple-500 text-white rounded"></button>
                    <button onClick={nextProject} className="px-4 py-2 bg-cyan-500 text-white rounded"></button>
                </div>
            )}
        </div>
    );
}

export default Projects;
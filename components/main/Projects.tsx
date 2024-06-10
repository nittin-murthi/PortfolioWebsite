import React from 'react'
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                Research Experience
            </h1>
                <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
                    <ProjectCard
                        src="./PURE-Final-Presentation.pptx.jpg"
                        title="Deep Learning for Vascular Segmentation"
                        highlights="Developed and trained deep learning models on MRI brain scans, achieving notable results: 
                        ∗ U-Net: Achieved a Mean IoU of 0.813, a Precision of 0.935, and an Accuracy of 0.9878.
                         ∗ SegNet: Attained a Precision of 0.9001 and a Recall of 0.8748.
                        ∗ FCN: Produced a Precision of 0.916 and an Accuracy of 0.989.
                        To optimize the segmentation performance, a custom loss function was developed that combines several complementary loss components. The first component is the Dice loss.
                        The second component is the Intersection over Union (IoU) loss.
                        Additionally, a binary cross-entropy (BCE) loss term was included to penalize pixel-wise classification errors. Finally, a boundary loss was incorporated to encourage the model to accurately delineate object boundaries. The final combined loss function is a weighted sum of these four components, with the weights (α, β, γ, δ) empirically tuned to balance the contributions of each loss term. This multifaceted loss function helps the model optimize for both global and local segmentation accuracy, leading to improved overall performance."
                        skills="Python, Tensorflow, Keras, PyTorch, Scikit-Learn, Pandas, Numpy, Amazon Sagemaker, NVIDIA CUDA, Jupyter Notebook"
                    />
                    <ProjectCard
                        src="./ecoservity_logo.jpeg"
                        title="Data Insight Extraction using LLMs"
                        highlights="Led the development of a state-of-the-art conversational bot using OpenAI API, llama-index, and HuggingFace. Achieved a remarkable 40% increase in user engagement and a 90% satisfaction rating within 3 months.
                        Engineered seamless data integration pathways (.csv, SQL) with llama index and advanced techniques, boosting data accessibility by 60% and retrieval efficiency by 70%, streamlining decision-making processes.
                        Mastered intricate technologies (llama index, Hugging Face, PyTorch) through focused study, swiftly implementing solutions for direct data interaction. Resulted in a dynamic platform fostering innovation and informed decision-making at Ecoservity Inc.
                        Implemented Direct Preference Optimization (DPO) using libraries like Hugging Face Transformers (HLT) to fine-tune large language models, improving model alignment with user preferences and reducing reliance on complex Reinforcement Learning from Human Feedback (RLHF) techniques."
                        skills="Python, Llama 3, OpenAI, Mistral, Pandas AI, Retrieval Augmented Generation, ChromaDB, PandasAI, Numpy, DPO, RLHF, Fine-tuning, Streamlit, Hugginface, Transformers, Embeddings, Pandas, Llama-Index, Matplotlib, PowerBI, AWS, SQL, JSON."
                    />
                    <ProjectCard
                        src=""
                        title="Articial Intelligence based Teaching Assisstant for ECE-120"
                        highlights="Developing an Artificial-Intelligence based Teaching Assistant for a course titled “ECE120” which is an introductory computer architecture design course
                        Utilized Retrieval Augmented Generation (RAG) using Langchain and ChromaDB to provide assistance towards students in C programming
                        Experimented with multiple open-source LLM (notable ones include Llama 3, LLama 2, Code-Llama and Mistral) and closed-source LLMs (notable ones include GPT 3.5 and GPT-4) to find optimal model that balanced both cost and performance
                        Read research papers on novel RAG techniques such as self-correcting RAGs and Direct Preference Optimization (DPO) and successfully implemented it to improve performance."
                        skills="Python, Llama 3, Code-Lllama, Llama 2, OpenAI, ChromaDB, Langchain, DPO, RLHF, NLTK, Git/GitHub."
                    />
                    <ProjectCard
                        src="./gfr-sc.png"
                        title="Estimating GFR Using Machine Learning"
                        highlights="Conducted a comprehensive analysis of 16 machine learning algorithms to identify the optimal algorithm for estimating Glomerular Filtration Rate (eGFR) in clinical settings.
                        Utilized Scikit-Learn for Regression Models, XGBoost for Decision Tree Models, and Tensorflow for Neural Networks.
                        Significantly improved model performance through rigorous significance testing and data visualizations, contributing to enhanced clinical accuracy."
                        skills="Python, Tensorflow, Keras, Scikit-Learn, XGBoost, SciPy, numpy, pandas, matplotlib, seaborn."
                    />
                </div>
        </div>
    )
}

export default Projects

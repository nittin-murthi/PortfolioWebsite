"use client"

import React, { useState } from 'react';
import ProjectCard from "../sub/ProjectCard";

const Projects: React.FC = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const projects = [
        {
            title: "AI Developer Intern @ thewalnut.ai",
            highlights: `Detailed Update coming soon...`,
            skills: "Python, Llama 3, OpenAI, Mistral, Langchain",
            buttonText: "",
            buttonLink: ""
        },
        {
            title: "Data Insight Extraction using LLMs",
            highlights: `I Led the development of a state-of-the-art conversational bot using Llama 3, Ollama, PandasAI, llama-index, and langchain, achieving a 42% increase in user engagement with the company data as reported by the CEO and 94% satisfaction rating within 3 months of implementing and testing as reported by the employees.
            I engineered a custom data pipeline using Retrieval Augmented Generation (RAG) to integrate the the Company's private data with Large Language Models which is able to seamlessly accomodate unstructured data (PDF), and structured data (CSV, SJON and Parquet) using Pandas AI, the Llama-Index Library PandasQueryEngine and the Langchain PyPDF tool and ChromaDB to accomodate the different data formats. 
            The learning curve was steep due to my lack of knowledge of RAG at the beginning of the project and involved countless hours of research into RAG and evolving through numerous prototypes.
            My first prototype to the CEO used purely Llama-Index and the OpenAI API as a proof of concept which was only capable of answering basic questions on the data provided and nothing else.
            I was quickly told to modify the code to use an open-source model and imrpove the question answering capabilities and I conducted further research into the huggingface documentation and the PandasAI which is capable of answering questions of more difficulty and has more inherent built-in capabilities which I quickly implemented.
            Using the PandasAI library, I created a PandasAI Agent using Llama 2 and Llama 3 to interact with the csv files and levereged the PandasAI ability to provide context to the Agent dynamically for more specialized and accurate responses. I then used the abilities function of the PandasAI agent to visualize images which was a huge breakthrough using matplotlib.
            Finally, I transitioned the code to use the Ollama library in order for a fully localized and limitless experience with open-source LLMs to avoid the API limits imposed by Huggingface and gave it a basic UI for better interaction using Streamlit.
            Now I am working on have the model interact with multiple files at once for a more robust question answering experience and have created a custom pipeline using the llama-index library and langchain in order to leverage the LLMs vast knowledge to analyze the structured data and provided insights to aid the CEO in making data driven decisions. Here are some metrics that were collected by the CEO for feedback and testing purposes:
               Engineered seamless data integration pathways for (CSV, JSON, Parquet) files with PandasAI, and Langchain, boosting Data accessibility by 64% and Retrieval efficiency by 78% as the mean score reported by employees. 
            I have also fine-tuned the model using Direct Preference Optimization (DPO) using libraries like Hugging Face Transformers (HLT) to fine-tune large language models and reduce reliance on complex Reinforcement Learning from Human Feedback (RLHF) techniques.
            I have uploaded one of my prototyped on github which uses streamlit as its UI and performs basic question answering on the data using llama-index.
            I am currently working on integrating my most recent model with an emerging tool called Knowledge Graphs which is capable of interacting with Neo4J Knowledge Graph Databases using Natural Language and Cypherqueries and have achieved initial success with basic Question Answering and Information Retreival and am looking to enhance the model much further.`,
            skills: "Python, Llama 3, OpenAI, Mistral, Pandas AI, Retrieval Augmented Generation, NLTK, ChromaDB, PandasAI, Numpy, DPO, RLHF, Fine-tuning, Streamlit, Huggingface, Transformers, Embeddings, Pandas, Llama-Index, Matplotlib, PowerBI, AWS, Azure.",
            buttonText: "",
            buttonLink: "./ecoservity_logo.jpeg"
        },
        {
            title: "Deep Learning for Vascular Segmentation",
            highlights: `Initially developed various deep learning models on the MiniVess segmentation dataset in order to determine optimal model architecture and hyperparameters.
            I utilized Tensorflow, Tensorflow-Metal (For GPU Acceleration on Apple Devices), Keras and PyTorch in order to develop and train each of the machine learning models.                                
               U-Net: Achieved a Mean IoU of 0.813, a Precision of 0.935, and an Accuracy of 0.9878.
               SegNet: Attained a Precision of 0.9001 and a Recall of 0.8748.
               FCN: Produced a Precision of 0.916 and an Accuracy of 0.989.
               To optimize the segmentation performance, a custom loss function was developed that combines several complementary loss components: Dice loss, Intersection over Union (IoU) loss, Binary cross-entropy (BCE) loss term, Boundary loss.
               The final combined loss function is a weighted sum of these four components, with the weights (α, β, γ, δ) empirically tuned to balance the contributions of each loss term. This multifaceted loss function helps the model optimize for both global and local segmentation accuracy, leading to improved overall performance.
            Using the results obtained from the significance testing I discovered that the U-Net architecture was the most optimal for due to extremely strong performance within the Mean IOU metric and equally strong performances in the remaining evaluation metrics.
            For further research I am conducting further research on architectures that evolved from the U-Net including the Vanilla U-Net, U-Net++, and Attention U-net for further testing and training and testing the model on Breast Tumor Segmentation for more intensive analysis
            One of the biggest challenges I faced when experimenting with the U-Net variants was overfitting. Each of the model architectures excelled in their training metrics but were significantly weaker in their validation metrics and despite increasing the training epochs the models would plateau after a certain number of epochs in each of the metrics
            In order to combat this, I added data augmentation to my training data using Keras' built-in image data generator to increase the size of the dataset and was able to improve the validation splits significantly and additionally I conducting hyperparameter tuning using the Keras Tuner for further improvements in performance.
            Currently, I am researching into Generative Adversarial Training in order to artificially increase the size of my dataset for further training data and potentially improved performance.
            You can view the associated code and research poster on my GitHub!`,
            skills: "Python, Tensorflow, Keras, PyTorch, Scikit-Learn, Pandas, Numpy, Amazon Sagemaker, NVIDIA CUDA, Jupyter Notebook, SciPy, Matplotlib",
            buttonText: "Download Research Poster (Coming soon)",
            buttonLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
            buttonDownload: true
        },
        {
            title: "Artificial Intelligence based Teaching Assistant for ECE-120",
            highlights: `Developing an Artificial-Intelligence based Teaching Assistant for a course titled "ECE120," which is an introductory computer architecture design course with elementary C programming.
               Utilized Retrieval Augmented Generation (RAG) using Langchain and the ChromaDB vector databae to store an open-source C-programming textbook to prevent the model from hallucinating and improve efficiency.
               Read research papers in Hint-Generation, and Direct Preference Optimization (DPO) on publicly available programming tutoring datasets in order to enhance the model performance and maximize learning potential of students.
               Experimented with multiple open-source LLM (notable ones include Llama 3, LLama 2, Code-Llama, and Mistral) and closed-source LLMs (notable ones include GPT 3.5 and GPT-4) to find an optimal model balancing cost and performance.
               Read research papers on novel RAG techniques such as self-correcting RAGs and successfully implemented it to improve performance and am conducting further research into hint-generation to penalize the model from providing incorrect responses and/or giving the complete answer.
               Additionally, I am creating a custom dataset for fine-tuning on digital logic using ECE120 Course material and past midterms.
               The code for the model is on my GitHub and I expect to publish a paper soon and have more updates.`,
            skills: "Python, Llama 3, Code-Llama, Llama 2, OpenAI, ChromaDB, Langchain, DPO, RLHF, Git/GitHub, RLHF.",
            buttonText: "View Image (Coming soon)",
            buttonLink: "./.png"
        },
        {
            title: "Estimating GFR Using Machine Learning",
            highlights: `Conducted a comprehensive analysis of 16 machine learning algorithms to identify the optimal algorithm for estimating Glomerular Filtration Rate (eGFR) in clinical settings.
            Brief Summary of Models Used:
Linear Regression: Linear regression is a type of supervised learning algorithm that is used to predict a continuous output variable based on one or more input variables. It assumes a linear relationship between the input and output variables.
Polynomial Regression: Polynomial regression is another type of supervised learning algorithm that is used to predict a continuous output variable. It models the relationship between the input and output variables using a polynomial function.
Lasso Regression: Lasso regression is a type of linear regression that uses regularization to prevent overfitting. It penalizes the model for using too many features by adding a penalty term to the loss function
Bayesian Ridge Regression: Bayesian ridge regression is another type of linear regression that uses Bayesian methods to estimate the model parameters. It assumes a prior distribution for the model parameters and updates the distribution based on the observed data
Ridge Regression: Ridge regression is a type of linear regression that also uses regularization to prevent overfitting. It adds a penalty term to the loss function, similar to lasso regression.
Random Forests: Random forests is an ensemble learning method that uses multiple decision trees to make predictions. It combines the outputs of many individual trees to improve the overall accuracy of the model.
Gradient Boosted Trees: Gradient boosted trees are another ensemble learning method that uses multiple decision trees. It iteratively builds new trees to correct the errors of the previous trees, gradually improving the model's accuracy.
CART (Classification and Regression Tree): CART is a type of decision tree algorithm that is used for both classification and regression tasks. It splits the data based on the values of the input features to create a tree-like structure.
LambdaMART: LambdaMART is a variant of the gradient-boosted tree algorithm that is specifically designed for ranking tasks. It optimizes a cost function that is based on the ranking of the output variable.
DART (Dropout Additive Regression Trees): DART is another variant of the gradient-boosted tree algorithm that uses dropout regularization to prevent overfitting. It randomly drops out some of the trees during training to encourage diversity in the model.
Extra Trees: Extra trees are another ensemble learning method that is similar to random forests. It builds multiple decision trees using randomly selected features and splits.
Greedy Global Growth: Greedy global growth is a variant of the decision tree algorithm that uses a greedy approach to grow the tree. It selects the best split at each node based on a cost function.
Oblique Trees: Oblique trees are another variant of the decision tree algorithm that allows for non-axis-parallel splits. It can be used to model more complex relationships between the input and output variables.
LSTM (Long-Short Term Memory) Networks: LSTM networks are a type of recurrent neural network that are designed to handle sequential data. They use a memory cell to store information about previous inputs and selectively forget or remember certain pieces of information.
Bidirectional LSTM: Bidirectional LSTM is a variant of LSTM that processes the input data in both forward and backward directions. This allows it to capture information from both past and future inputs.
Vanilla ANN (Artificial Neural Network): Vanilla ANN is a basic type of neural network that is composed of multiple layers of interconnected neurons. It can be used for both classification and regression tasks.
Deep Neural Network: A deep neural network, on the other hand, is a type of neural network that has multiple hidden layers. It can be used to model complex relationships between the input and output variables.
               Utilized Scikit-Learn for Regression Models, XGBoost for Decision Tree Models, and Tensorflow for Neural Networks.
               Significantly improved model performance through rigorous significance testing, grid searches, and hyperparameter tuning.
               Discussion (From the paper):
               By considering the average performance metrics of each group, we were able to reflect on our hypothesis and draw conclusions about the relative strengths and weaknesses of each type of model. 
               Our analysis of three groups of machine learning models does support the hypothesis that neural network models demonstrate high accuracy in predicting eGFR since neural network models showed the highest prediction accuracy based on P10. 
               Furthermore, random forest models showed the highest precision based on IQR of bias ratio and the lowest error based on RMSE. 
               However, it is important to consider the variability between models in the groups, with specific models like LambdaMART and deep neural networks outperforming many other models in accuracy, precision, and error. 
               Our analysis revealed that the performance of machine learning models is highly dependent on the specific evaluation metric used, with some models showing better performance on certain metrics than others. 
               These findings suggest that machine learning models have the potential to improve eGFR estimation accuracy and precision, but careful model selection and evaluation are essential for achieving optimal performance. 
               Furthermore, our study highlights the need for further research to validate these findings in clinical settings and to explore the potential of machine learning models in other areas of clinical practice.
               A summary of the results for this research project is on my GitHub.
               Reach out to me if you want to read the rest of the research paper containing the analysis of the results and the code for each model.`,
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
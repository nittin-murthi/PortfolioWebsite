import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
            id="about-me"
        >
            <div className="h-full w-full flex flex-col gap-10 md:gap-20 justify-center text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-2 px-4 md:py-[10px] md:px-[20px] border border-[#7042f88b] opacity-[0.9] ml-4 md:ml-[40px]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-2 md:mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-sm md:text-[10px]"> Welcome to My Portfolio</h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-3 md:gap-6 mt-5 md:mt-10 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto hover:scale-110 transition-transform duration-3000 ml-4 md:ml-[40px]"
                >
                    <span>
                        <span className="letter">E</span>
                        <span className="letter">C</span>
                        <span className="letter">E</span>
                        <span className="letter"> @ </span>
                        <span className="letter"> I</span>
                        <span className="letter">l</span>
                        <span className="letter">l</span>
                        <span className="letter">i</span>
                        <span className="letter">n</span>
                        <span className="letter">o</span>
                        <span className="letter">i</span>
                        <span className="letter">s</span>
                    </span>

                    <span className="text-white">
                        <span className="letter">A</span>
                        <span className="letter">I</span>
                        <span className="letter">/</span>
                        <span className="letter">M</span>
                        <span className="letter">L</span>
                        <span className="letter space"> </span>
                        <span className="letter">E</span>
                        <span className="letter">n</span>
                        <span className="letter">t</span>
                        <span className="letter">h</span>
                        <span className="letter">u</span>
                        <span className="letter">s</span>
                        <span className="letter">i</span>
                        <span className="letter">a</span>
                        <span className="letter">s</span>
                        <span className="letter">t</span>
                    </span>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className="text-base md:text-lg animated-gradient-text my-6 md:my-12 w-auto text-left leading-7 md:leading-[1.8] tracking-wide hover:scale-110 transition-transform duration-300 mx-4 md:mx-auto"
                >
                    <p className="mb-4">
                        Hi there! I am a computer engineering student at the University of Illinois Urbana-Champaign with a passion for AI. I have been diving into the world of deep learning algorithms and large language models, and it has been an amazing journey so far.
                    </p>
                    <p className="mb-4">
                        One of my favorite projects was leading the development of a conversational assistant at Ecoservity Inc. This assistant helps with structured data analysis, and it was so rewarding to see it come to life. I also built Image Segmentation models and LLM assistants using Retrieval Augmented Generation (RAG), which was a fantastic learning experience.
                    </p>
                    <p className="mb-4">
                        I have had the chance to work with some incredible mentors, and together we achieved some exciting results training deep learning models on MRI brain scans using TensorFlow and Keras. Along the way, I have become skilled in Python, Java, and C/C++, and I have gotten pretty comfortable with frameworks like PyTorch and Scikit-Learn.
                    </p>
                    <p className="mb-4">
                        If you are interested in AI, machine learning, or just want to chat about cool tech projects, feel free to check out my portfolio. I am always open to new opportunities and collaborations. Lets create something amazing together!
                    </p>
                </motion.div>

            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-auto flex justify-center md:justify-end items-center md:items-end mt-10 md:mt-0"
            >
                <div className="image-container w-40 md:w-[300px] h-100 md:h-[300px]">
                    <Image
                        src="./headshot.png"
                        alt="Lock top"
                        width={100}
                        height={100}
                        className="w-full h-full transform transition-all duration-200 group-hover:translate-y-11"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default HeroContent;

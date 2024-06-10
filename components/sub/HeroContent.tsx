"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

const HeroContent = () => {
    return (
        <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
        <div className="h-full w-full flex flex-col gap-20 justify-center m-auto text-start">
            <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[10px] px-[20px] border border-[#7042f88b] opacity-[0.9] ml-[40px]"
            >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[10px]"> Welcome to My Portolio</h1>
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-10 text-6xl font-bold text-white max-w-[600px] w-auto h-auto hover:scale-110 transition-transform duration-3000 ml-[40px]"
            >
                <span>
                    <span className="letter">E</span>
                    <span className="letter">C</span>
                    <span className="letter">E</span>
                    <span className="letter"> </span>
                    <span className="letter">@</span>
                    <span className="letter"> </span>
                    <span className="letter">I</span>
                    <span className="letter">l</span>
                    <span className="letter">l</span>
                    <span className="letter">i</span>
                    <span className="letter">n</span>
                    <span className="letter">o</span>
                    <span className="letter">i</span>
                    <span className="letter">s</span>
            </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-gradient-x hover:scale-110 transition-transform duration-3000">
                    <span className="letter">A</span>
                    <span className="letter">I</span>
                    <span className="letter">/</span>
                    <span className="letter">M</span>
                    <span className="letter">L</span>
                    <span className="letter"> </span>
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

            <motion.p
                variants={slideInFromLeft(0.8)}
                className="text-lg animated-gradient-text my-12 w-auto text-center leading-[1.8] tracking-wide hover:scale-110 transition-transform duration-300 mx-auto">
                    As a passionate computer engineering student, my journey began at the University of Illinois Urbana-Champaign, where I delved into the realm of AI, exploring the potential of deep learning algorithms. Through impactful projects, such as spearheading the development of a cutting-edge conversational bot at Ecoservity Inc., I honed my skills in data analysis and integration. Collaborating closely with mentors, I achieved notable results in training deep learning models on MRI brain scans, leveraging tools like TensorFlow and Keras. With expertise in Python, Java, and C/C++, alongside proficiency in frameworks like PyTorch and Scikit-Learn, I am poised to tackle complex challenges and contribute to the advancement of AI and machine learning. Explore my portfolio to delve deeper into my research projects and experience—I am always open to discussing potential collaborations!
            </motion.p>

        </div>

        <motion.div
            variants={slideInFromRight(0.8)}
            className="w-120 h-100 flex justify-end items-end w-full h-auto"
        >

            <div className="image-container">
                <Image
                    src="/IMG_1314.jpg"
                    alt="Lock top"
                    width={100}
                    height={50}
                    className="w-[300px] transform translate-x-0 translate-y-50 transition-all duration-200 group-hover:translate-y-11"
                />
            </div>


        </motion.div>
        
        </motion.div>
    )
}

export default HeroContent;
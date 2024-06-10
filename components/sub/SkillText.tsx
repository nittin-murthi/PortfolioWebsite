"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillText = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "Turning bits into brilliance, One skill at a time.";
    const typingSpeed = 1000; // Typing speed in milliseconds
    const printed = Array(fullText.length).fill(false); // Array to track printed characters

    useEffect(() => {
        const type = async () => {
            for (let i = 0; i < fullText.length; i++) {
                if (!printed[i]) { // Check if the character has already been printed
                    setDisplayedText(prev => prev + fullText[i]);
                    printed[i] = true; // Mark the character as printed
                    await new Promise(resolve => setTimeout(resolve, typingSpeed));
                }
            }
        };

        type();

        return () => {
            // No need for cleanup with this logic
        };
    }, [fullText]); // Ensure fullText is stable

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div
                variants={slideInFromRight(0.5)}
                className="text-normal text-[40px] text-gray-200 mb-10 mt-[0px] text-center"
            >
                {/* Placeholder for any static content or SparklesIcon if needed */}
            </motion.div>

            <motion.div
                variants={slideInFromLeft(0.5)}
                className="text-normal text-[40px] text-white font-medium mt-[10px] text-center mb-[15px]"
                style={{ fontFamily: 'Lato' }}
            >
                <span>{displayedText}</span>
                <span className="cursor">|</span>
            </motion.div>
        </div>
    );
};

export default SkillText;
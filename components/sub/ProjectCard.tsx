"use client"

import React from 'react';
import Image from 'next/image';

interface Props {
    src: string;
    title: string;
    highlights: string;
    skills: string;
    buttonText?: string;
    buttonLink?: string;
    buttonDownload?: boolean;
}

const ProjectCard = ({ src, title, highlights, skills, buttonText = 'View Image', buttonLink, buttonDownload = false }: Props) => {
    return (
        <div className="project-card">
            {src && (
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className='w-full h-64 object-cover'
                />
            )}
            <div className='project-card-content'>
                <h1 className='project-card-title'>
                    {title}
                </h1>
                {highlights && (
                    <div className="project-card-highlights">
                        <h2>Highlights:</h2>
                        <ul className="highlights-list">
                            {highlights.split('\n').map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {skills && (
                    <div className="project-card-skills">
                        <h2>Skills Used:</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {skills.split(', ').map((skill, index) => (
                                <span key={index} className="skill">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                {buttonLink && (
                    <div className="project-card-link">
                        <a
                            href={buttonLink}
                            target={buttonDownload ? '_self' : '_blank'}
                            download={buttonDownload}
                        >
                            {buttonText}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;

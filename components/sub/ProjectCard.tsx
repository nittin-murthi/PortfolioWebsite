import React from 'react';
import Image from 'next/image';

interface Props {
    src: string;
    title: string;
    highlights: string;
    skills: string;
}

const ProjectCard = ({ src, title, highlights, skills }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className='w-full object-contain'
            />

            <div className='relative p-4'>
                <h1 className='text-2xl font-semibold text-white'>
                    {title}
                </h1>
                {highlights && (
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-white">Highlights:</h2>
                        <p className="text-gray-300">{highlights}</p>
                    </div>
                )}
                {skills && (
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-white">Skills Used:</h2>
                        <p className="text-gray-300">{skills}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
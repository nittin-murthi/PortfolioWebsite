import React from 'react';
import Image from 'next/image';
import { Socials } from '@/constants'; // Assuming Socials is imported correctly

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417 backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
                    <Image
                        src="./illustration-design-of-business-neon-logotype-abstract-art-letter-n-simple-sign-logo-abstract-n-letter-template-isolated-on-brick-wall-vector-removebg-preview.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className="cursor-pointer hover:animate-slowspin"
                    />

                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        Nittin Murthi Dhekshinamoorthy
                    </span>
                </a>

                <div className="w-[500px] rounded-lg h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#about-me" className="cursor-pointer">About Me</a>
                        <a href="#skills" className="cursor-pointer">Skills</a>
                        <a href="#research" className="cursor-pointer">Experience</a>
                    </div>
                </div>

                <div className="flex flex-row gap-5">
                    {Socials.map((social) => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={social.src}
                                alt={social.name}
                                width={24}
                                height={24}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;

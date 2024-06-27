"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Socials } from '@/constants'; // Assuming Socials is imported correctly

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWindowSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check on mount
        checkWindowSize();

        // Event listener for window resize
        window.addEventListener('resize', checkWindowSize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    return (
        <div className="navbar">
            <div className="navbar-container">
                <a href="#about-me" className="logo-container">
                    <Image
                        src="./illustration-design-of-business-neon-logotype-abstract-art-letter-n-simple-sign-logo-abstract-n-letter-template-isolated-on-brick-wall-vector-removebg-preview.png"
                        alt="logo"
                        width={isMobile ? 50 : 100} // Adjust logo width dynamically
                        height={isMobile ? 50 : 100} // Adjust logo height dynamically
                        className="logo"
                    />
                    {!isMobile && (
                        <span className="logo-text">Nittin Murthi Dhekshinamoorthy</span>
                    )}
                </a>

                <div className="links-container">
                    <div className="links">
                        <a href="#about-me" className="link">About Me</a>
                        <a href="#skills" className="link">Skills</a>
                        <a href="#research" className="link">Experience</a>
                    </div>
                </div>

                <div className="socials-container">
                    {Socials.map((social) => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">
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
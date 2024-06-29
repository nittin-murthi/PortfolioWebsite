import React from "react";
import Image from 'next/image';
import { Socials } from '@/constants'; // Ensure Socials is imported correctly

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-title">
                    Let's Talk
                </div>

                <div className="socials">
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

                <div className="footer-text">
                    &copy; Nittin Murthi Dhekshinamoorthy. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;

import React from "react";
import { FaYoutube } from "react-icons/fa";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Connect With Me</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="https://www.youtube.com/your-channel-url" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                                <span className="text-[15px] ml-[6px]">Youtube</span>
                            </a>
                        </p>

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="https://github.com/nittin-murthi" target="_blank" rel="noopener noreferrer">
                                <RxGithubLogo />
                                <span className="text-[15px] ml-[6px]">GitHub</span>
                            </a>
                        </p>

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="https://www.linkedin.com/your-profile-url" target="_blank" rel="noopener noreferrer">
                                <RxLinkedinLogo />
                                <span className="text-[15px] ml-[6px]">Linkedin</span>
                            </a>
                        </p>
                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="https://www.youtube.com/your-channel-url" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                                <span className="text-[15px] ml-[6px]">Youtube</span>
                            </a>
                        </p>

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="https://github.com/nittin-murthi" target="_blank" rel="noopener noreferrer">
                                <RxGithubLogo />
                                <span className="text-[15px] ml-[6px]">GitHub</span>
                            </a>
                        </p>

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="https://www.linkedin.com/your-profile-url" target="_blank" rel="noopener noreferrer">
                                <RxLinkedinLogo />
                                <span className="text-[15px] ml-[6px]">Linkedin</span>
                            </a>
                        </p>
                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Let's Talk</div>

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">nittin.murthi@gmail.com</span>
                        </p>

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">ndhek2@illinois.edu</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Nittin Murthi Dhekshinamoorthy. All rights reserved.
                </div>

            </div>
        </div>
    );
}

export default Footer;
import React from "react"
import HeroContent from "../sub/HeroContent"

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full">
            <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-position-y-[5%]"
            >
                <source src=".webm" type="video/webm" />
                <source src="istockphoto-1731668623-640x640-removebg-preview.png" type="image/png" />
            </video>
            <HeroContent />

        </div>
    )
}

export default Hero

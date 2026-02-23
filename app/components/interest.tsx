"use client"
import Typewriter from "typewriter-effect";

interface propertiTypewriter{
interests: string[];
}

export default function Interest({interests}:propertiTypewriter){
    return(
    
            <span className="font-martian text-[#ce9178] ">
            <Typewriter
              options={{
                strings: interests,
                autoStart: true,
                loop: true,
                delay: 60, // Speed of typing
                deleteSpeed: 30, // Speed of deleting
                wrapperClassName: "typewriter", // Your requested class!
                cursorClassName: "animate-pulse font-light", // Tailwind pulse effect!
              }}
            />
          </span>

      
    )
}
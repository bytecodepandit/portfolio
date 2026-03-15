import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Highlighter } from "@/components/ui/highlighter";

export default function About({ scrollContainerRef }) {
  return (
    <section id="about" className="w-full min-h-screen bg-white text-black p-8 sm:p-16 md:p-24 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <div className="mb-12 flex justify-center">
                    <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
                        <Highlighter action="underline" color="#FFD700">
                            About Me 😊
                        </Highlighter>
                    </h2>
        </div>  
        <ScrollReveal
          scrollContainerRef={scrollContainerRef}
          baseOpacity={0}
          enableBlur={true}
          baseRotation={1.2}
          blurStrength={10}
          containerClassName="my-12"
          textClassName="font-sans text-base sm:text-lg md:text-xl"
        >
         I thrive at the intersection of robust engineering and creative web aesthetics. With deep expertise in the MERN stack, I treat every project as an opportunity to refine the digital experience through smooth transitions and precise timing. By combining React’s component-based architecture with intentional motion logic, I transform standard interfaces into engaging, meaningful journeys. For me, a successful deployment isn't just about a functional MongoDB schema or a secure Express API—it’s about the tiny, polished moments that make a user feel like the application is responsive, intentional, and alive.
        </ScrollReveal>
      </div>
    </section>
  );
}
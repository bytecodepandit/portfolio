import React, { useState } from 'react';
import { Highlighter } from "@/components/ui/highlighter";
// --- 1. Import your project images ---

import project1Img from '../assets/projects/optum.png';
import project2Img from '../assets/projects/marriott.png';
import project3Img from '../assets/projects/thechildreplace.png';
import project4Img from '../assets/projects/langtons.png';
import project5Img from '../assets/projects/ourco.png';
import project6Img from '../assets/projects/apparrant.png';
import { Truck } from 'lucide-react';

// --- Data for the projects ---
const projectData = [
    {
        title: 'Optum',
        description: 'A modern health-care platform',
        // Use your Cloudinary video URL here:
        videoUrl: 'https://res.cloudinary.com/dvctxjmfc/video/upload/v1773551022/optum_ytsdbq.mov',
        imageUrl: project1Img, // optional fallback
        liveUrl: 'https://www.optum.com/en/',
        tags: ['React', 'NodeJs', 'MySQL', 'Docker', 'Kubernates'],
    },
    {
        title: 'Marriott Resort & Spa',
        description: 'Marriott International is the world’s largest hospitality company',
        videoUrl: 'https://res.cloudinary.com/dvctxjmfc/video/upload/v1773551006/marriott_ons1vp.mov',
        imageUrl: project2Img,
        liveUrl: 'https://www.marriott.com/default.mi',
        tags: ['React', 'NodeJs', 'PostgreSQL',],
    },
    {
        title: 'The Children\'s Place',
        description: 'A powerhouse in children’s fashion',
        videoUrl: 'https://res.cloudinary.com/dvctxjmfc/video/upload/v1773551012/thechildrenplace_wtu2sw.mov',
        imageUrl: project3Img,
        liveUrl: 'https://www.childrensplace.com/us/home',
        tags: ['React-Native', 'NodeJs', 'GraphQL'],
    },
    {
        title: 'Langtons',
        description: 'Langton\'s is Australia\'s premier fine wine marketplace and auction house',
        videoUrl: 'https://res.cloudinary.com/dvctxjmfc/video/upload/v1773551013/langtons_py9wys.mov',
        imageUrl: project4Img,
        liveUrl: 'https://www.langtons.com.au/',
        tags: ['Javascript', 'AEM'],
    },
    {
        title: 'OurCo',
        description: 'The community engagement platform that makes news, polls, and surveys more human.',
        videoUrl: 'https://res.cloudinary.com/dvctxjmfc/video/upload/v1773551016/ourco_g9nutz.mov',
        imageUrl: project5Img,
        liveUrl: 'https://ourco.com/',
        tags: ['React-Native', 'GraphQL'],
    },
    {
        title: 'Apparrant',
        description: 'Apparrant is a digital solutions and talent partner for startups and enterprises.',
        videoUrl: 'https://res.cloudinary.com/dvctxjmfc/video/upload/v1773551004/apparrant_fpi8lj.mov',
        imageUrl: project6Img,
        liveUrl: 'https://apparrant.com/',
        tags: ['React', 'Vue', 'Tailwind CSS'],
    }
];


export default function ProjectsMobile() {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

    return (
        <section id="projects-mobile" className="w-full bg-white text-black py-12 px-2">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-pixel underline-wavy-yellow inline-block">
                    <Highlighter action="underline" color="#FFD700">
                        Projects 🚀
                    </Highlighter>
                </h2>
            </div>
            <div className="flex flex-col gap-6 max-w-md mx-auto">
                {displayedProjects.map((project, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col">
                        <div className="w-full h-40 rounded-lg overflow-hidden mb-3 bg-gray-100">
                            {project.videoUrl ? (
                                <video
                                    src={project.videoUrl}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                    poster={project.imageUrl}
                                />
                            ) : (
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                        <p className="text-xs text-gray-600 mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                            {project.tags && project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-gray-200 text-gray-800 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-auto">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn !w-auto !h-auto !px-4 !py-2 !text-xs !rounded-lg"
                            >
                                Visit Site
                            </a>
                            {project.repoUrl && project.repoUrl !== '#' && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn !w-auto !h-auto !px-4 !py-2 !text-xs !rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300"
                                >
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* View More / View Less Button */}
            <div className="text-center mt-8">
                {!showAll && projectData.length > 3 && (
                    <button
                        onClick={() => setShowAll(true)}
                        className="btn"
                    >
                        View More
                    </button>
                )}
                {showAll && (
                    <button
                        onClick={() => setShowAll(false)}
                        className="btn"
                    >
                        View Less
                    </button>
                )}
            </div>
        </section>
    );
}
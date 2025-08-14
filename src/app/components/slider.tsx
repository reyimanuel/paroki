"use client"

import Image from "next/image"
import Link from "next/link"

export default function Slider() {
    const slides = [
        {
            id: 1,
            image: "/youtube.jpg",
            title: "Channel Youtube Kami",
            description: "Kunjungi Channel Youtube Kami!",
            platform: "youtube",
            link: "https://www.youtube.com/@komsosparokigpi",
            icon: "/youtube.svg",
            platformName: "YouTube",
        },
        {
            id: 2,
            image: "/facebook.jpg",
            title: "Profil Facebook Kami",
            description: "Kunjungi Profil Facebook Kami!",
            platform: "facebook",
            link: "https://www.facebook.com/share/19Qw3nuq7z/",
            icon: "/facebook.svg",
            platformName: "Facebook",
        },
        {
            id: 3,
            image: "/instagram.jpg",
            title: "Profil Instagram Kami",
            description: "Kunjungi Profil Instagram Kami!",
            platform: "instagram",
            link: "https://www.instagram.com/komsosparokigpi?igsh=MWFpY2xlMmYzcXoxYQ==",
            icon: "/instagram.svg",
            platformName: "Instagram",
        },
        {
            id: 4,
            image: "/tiktok.jpg",
            title: "Profil Tiktok kami",
            description: "Kunjungi Profil TikTok Kami!",
            platform: "tiktok",
            link: "https://www.tiktok.com/@komsos_btdc_gpi?_t=ZS-8yrh5GI3p6D&_r=1",
            icon: "/tiktok.svg",
            platformName: "TikTok",
        },
    ]

    // Duplicate slides for infinite scroll effect
    const infiniteSlides = [...slides, ...slides, ...slides]

    return (
        <section className="py-16" id="slider">
            <div className="container px-4">

                {/* Slider Container */}
                <div className="relative rounded-2xl p-8 overflow-hidden">

                    {/* Infinite Scrolling Container */}
                    <div className="relative h-30 overflow-hidden">
                        <div className="flex animate-scroll-left space-x-30 absolute top-0 left-0 h-full">
                            {infiniteSlides.map((slide, index) => (
                                <Link
                                    href={slide.link}
                                    key={`${slide.id}-${index}`}
                                    className="flex-shrink-0 w-56 h-full hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center"
                                >
                                    {/* Icon centered and fitted */}
                                    <div className="flex items-center justify-center w-full h-32">
                                        <Image
                                            src={slide.icon || "/placeholder.svg"}
                                            alt={slide.title}
                                            width={64}
                                            height={64}
                                            className="object-contain"
                                        />
                                    </div>
                                    {/* Overlay */}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Gradient Overlays for smooth appearance/disappearance */}
                    <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-200 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-200 to-transparent pointer-events-none z-10"></div>
                </div>

                {/* Social Media Links Row */}
                {/* <div className="flex justify-center gap-6 mt-8">
                    {slides.map((slide) => (
                        <Link
                            key={slide.platform}
                            href={slide.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md ${slide.platform === "youtube"
                                    ? "bg-red-600 hover:bg-red-700 text-white"
                                    : slide.platform === "facebook"
                                        ? "bg-blue-800 hover:bg-blue-900 text-white"
                                        : slide.platform === "instagram"
                                            ? "bg-pink-500 hover:bg-pink-600 text-white"
                                            : slide.platform === "tiktok"
                                                ? "bg-black hover:bg-gray-800 text-white"
                                                : "bg-gray-400 text-white"
                                }`}
                        >
                            <Image
                                src={slide.icon}
                                alt={slide.platformName}
                                width={24}
                                height={24}
                                className="filter invert brightness-0 saturate-0"
                            />
                            <span className="text-sm font-medium">{slide.platformName}</span>
                        </Link>
                    ))}
                </div> */}
            </div>

            {/* Custom CSS for infinite scroll animation */}
            <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    )
}

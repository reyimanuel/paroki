"use client"

import Image from "next/image"
import Link from "next/link"
import { Youtube, Facebook } from "lucide-react"

export default function Slider() {
    const slides = [
        {
            id: 1,
            image: "/youtube.jpg",
            title: "Channel Youtube Kami",
            description: "Kunjungi Channel Youtube Kami!",
            platform: "youtube",
            link: "https://www.youtube.com/@ParokiBTDCGPI",
            icon: <Youtube className="w-6 h-6" />,
            platformName: "YouTube",
        },
        {
            id: 2,
            image: "/facebook.jpg",
            title: "Kegiatan Komunitas",
            description: "Kunjungi Profil Facebook Kami!",
            platform: "facebook",
            link: "https://www.facebook.com/share/19Qw3nuq7z/",
            icon: <Facebook className="w-6 h-6" />,
            platformName: "Facebook",
        },
    ]

    // Duplicate slides for infinite scroll effect
    const infiniteSlides = [...slides, ...slides, ...slides]

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">Ikuti Kami di Media Sosial</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Tetap terhubung dengan kegiatan paroki melalui platform media sosial kami
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative bg-gray-200 rounded-2xl p-8 overflow-hidden">

                    {/* Infinite Scrolling Container */}
                    <div className="relative h-80 overflow-hidden">
                        <div className="flex animate-scroll-left space-x-40 absolute top-0 left-0 h-full">
                            {infiniteSlides.map((slide, index) => (
                                <div
                                    key={`${slide.id}-${index}`}
                                    className="flex-shrink-0 w-80 h-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 w-full">
                                        <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/30"></div>

                                        {/* Platform Badge */}
                                        <div
                                            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-medium ${slide.platform === "youtube" ? "bg-red-600" : "bg-blue-600"
                                                }`}
                                        >
                                            <div className="flex items-center gap-1">
                                                {slide.icon}
                                                <span>{slide.platformName}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold text-gray-800 mb-2">{slide.title}</h4>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{slide.description}</p>

                                        {/* CTA Button */}
                                        <Link
                                            href={slide.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 ${slide.platform === "youtube"
                                                    ? "bg-red-600 hover:bg-red-700 text-white"
                                                    : "bg-blue-600 hover:bg-blue-700 text-white"
                                                }`}
                                        >
                                            {slide.icon}
                                            <span>Kunjungi</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient Overlays for smooth appearance/disappearance */}
                    <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-200 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-200 to-transparent pointer-events-none z-10"></div>
                </div>

                {/* Social Media Links Row */}
                <div className="flex justify-center gap-6 mt-8">
                    <Link
                        href="https://www.youtube.com/@ParokiBTDCGPI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                        <Youtube className="w-5 h-5" />
                        <span className="font-medium">YouTube</span>
                    </Link>

                    <Link
                        href="https://www.facebook.com/ParokiBTDCGPI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                        <Facebook className="w-5 h-5" />
                        <span className="font-medium">Facebook</span>
                    </Link>
                </div>
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

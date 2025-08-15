import Image from "next/image"
import Navigation from "./navigation"

export default function Header() {
    return (
        <header className="bg-blue-400 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-50">
                {/* Main Header Content */}
                <div className="flex items-center justify-between py-4 lg:py-6">
                    {/* Left Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Logo Pastoral"
                            width={80}
                            height={80}
                            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 aspect-square"
                            sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, (max-width: 1280px) 96px, 128px"
                        />
                    </div>

                    {/* Center Text */}
                    <div className="text-center flex-1 mx-4 sm:mx-6 lg:mx-8">
                        <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-800 mb-1 sm:mb-2 drop-shadow-[0_2px_2px_rgba(255,255,255,10)] leading-tight">
                            <span className="block sm:inline">KEUSKUPAN MANADO</span>
                            <span className="hidden sm:inline"> </span>
                            <br/>
                            <span className="block sm:inline">PAROKI BUNDA TERESA DARI CALCUTTA</span>
                        </h1>
                        <p className="text-white italic text-xs sm:text-sm md:text-base lg:text-lg">Griya Paniki Indah</p>
                    </div>

                    {/* Right Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/logo2.jpg"
                            alt="Logo Pastoral"
                            width={60}
                            height={60}
                            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full aspect-square object-cover border border-yellow-500"
                            sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, (max-width: 1280px) 80px, 96px"
                        />
                    </div>
                </div>

                {/* Navigation */}
                <Navigation />
            </div>
        </header>
    )
}

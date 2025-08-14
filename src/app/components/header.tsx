import Image from 'next/image'
import Navigation from './navigation'

export default function Header() {
    return (
        <header className="bg-blue-400 shadow-sm">
            <div className="container mx-auto px-50 py-1">
                <div className="flex items-center justify-between mb-6">
                    <div className="rounded-full flex items-center justify-center">
                        <Image
                            src="/logo.png"
                            alt="Logo Pastoral"
                            width={150}
                            height={150}
                            className="aspect-square"
                            sizes="(max-width: 768px) 50vw, 150px"
                        />

                    </div>

                    <div className="text-center flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2 drop-shadow-[0_2px_2px_rgba(255,255,255,10)]">
                            KEUSKUPAN MANADO <br /> PAROKI BUNDA TERESA DARI CALCUTTA
                        </h1>
                        <p className="text-white italic text-sm md:text-base">
                            Griya Paniki Indah
                        </p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Image
                            src="/logo2.jpg"
                            alt="Logo Pastoral"
                            width={100}
                            height={100}
                            className="rounded-full aspect-square object-cover border border-yellow-500"
                            sizes="(max-width: 768px) 50vw, 150px"
                        />
                    </div>
                </div>

                <Navigation />
            </div>
        </header>
    )
}

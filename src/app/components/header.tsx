import Image from 'next/image'
import Navigation from './navigation'

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-30 py-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="rounded-full flex items-center justify-center">
                        <Image
                            src="/logo.png"
                            alt="Logo Keuskupan Surabaya"
                            width={150}
                            height={150}
                            className="rounded-3xl aspect-square object-cover"
                            sizes="(max-width: 768px) 50vw, 150px"
                        />
                    </div>

                    <div className="text-center flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
                            Gereja Paroki Bunda Teresa Dari Calcutta
                        </h1>
                        <p className="text-gray-600 italic text-sm md:text-base">
                            Griya Paniki Indah
                        </p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Image
                            src="/logo2.jpg"
                            alt="Logo Pastoral"
                            width={150}
                            height={150}
                            className="rounded-full aspect-square object-cover"
                            sizes="(max-width: 768px) 50vw, 150px"
                        />
                    </div>
                </div>

                <Navigation />
            </div>
        </header>
    )
}

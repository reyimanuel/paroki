import Image from 'next/image';

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Selamat Datang di Gereja Paroki Bunda Teresa Dari Calcutta
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Melayani umat Katolik dengan kasih dan dedikasi, membangun komunitas yang beriman,
                    berharap, dan berkarya dalam semangat Injil Kristus.
                </p>
                <div className="flex justify-center mb-8">
                    <div className="w-40 h-40 relative">
                        <Image
                            src="/hero.jpg"
                            alt="Gereja Paroki Bunda Teresa"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full shadow-lg"
                            sizes="(max-width: 768px) 50vw, 150px"
                            priority
                        />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors font-medium">
                        Jadwal Misa
                    </button>
                    <button className="border border-blue-800 text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                        Hubungi Kami
                    </button>
                </div>
            </div>
        </section>
    )
}

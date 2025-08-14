"use client"

export default function Hero() {
    return (
        <section className="relative bg-cover bg-center py-16" style={{ backgroundImage: "url(/background.jpg)" }}>
            {/* Dark overlay only on the background image */}
            <div className="absolute inset-0">
                <div className="w-full h-full bg-black opacity-50"></div>
            </div>
            <div className="relative z-10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-2xl font-bold text-white mb-6">
                        Selamat Datang di <br />Gereja Paroki Bunda Teresa Dari Calcutta
                    </h2>
                    <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
                        Melayani umat Katolik dengan kasih dan dedikasi, membangun komunitas yang beriman,
                        berharap, dan berkarya dalam semangat Injil Kristus.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors font-medium"
                            onClick={() => {
                                const slider = document.getElementById('slider');
                                if (slider) {
                                    slider.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Ikuti Sosial Media Kami
                        </button>
                        <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors font-medium">
                            Hubungi Kami
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

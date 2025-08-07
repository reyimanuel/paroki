export default function Map() {
    return (
        <section className="py-16 bg-white text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        Lokasi Paroki Bunda Teresa dari Calcutta
                        </h2>
                    <p className="text-gray-800">
                        Berlokasi di Griya Paniki Indah, Manado, Sulawesi Utara
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4900000000005!2d124.90800000000001!3d1.5000000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287a1aba4adabd3%3A0xc8232a3f0426340c!2sGereja%20Katolik%20Santa%20Teresa%20Dari%20Kalkuta!5e0!3m2!1sid!2sid!4v1754551316744!5m2!1sid!2sid"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Gereja Katolik Bunda Teresa dari Calcutta, Griya Paniki Indah"
                        ></iframe>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-gray-800 mb-2">
                            <strong>Alamat:</strong> Jl. Griya Paniki Indah, Paniki Bawah, Kec. Mapanget, Kota Manado, Sulawesi Utara
                        </p>
                        <a
                            href="https://www.google.com/maps/place/Gereja+Katolik+Santa+Teresa+Dari+Kalkuta/@1.5370034,124.8985201,17z/data=!3m1!4b1!4m6!3m5!1s0x3287a1aba4adabd3:0xc8232a3f0426340c!8m2!3d1.5370034!4d124.8985201!16s%2Fg%2F11c2111111?entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 border border-blue-200 rounded-md text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors"
                        >
                            Lihat di Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

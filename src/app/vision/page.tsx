import Header from "../components/header"
import Footer from "../components/footer"

export default function VisiMisiPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Visi Section */}
                    <section className="mb-12">
                        <div className="bg-gradient-to-r from-teal-500 via-sky-400 to-indigo-500 text-white p-12 rounded-2xl shadow-lg">
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                    <span className="text-4xl">✨</span>
                                </div>
                                <h2 className="text-4xl font-bold mb-2 drop-shadow">VISI</h2>
                            </div>

                            <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow">
                                <p className="text-2xl leading-relaxed text-center font-medium text-white/90">
                                    &quot;Dalam Terang Sabda Allah, Persekutuan Umat Katolik Keuskupan Manado mengembangkan Jati Diri dan
                                    Martabatnya untuk menyinari Kehidupan Bersama di Dunia – sebagai Pokok Refleksi&quot;
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Penjelasan Visi */}
                    {/* <section className="mb-12">
                        <div className="bg-blue-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Makna Visi</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl">📖</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">Dalam Terang Sabda Allah</h4>
                                    <p className="text-gray-600 text-sm">
                                        Berpedoman pada Firman Tuhan sebagai sumber cahaya dan kebijaksanaan dalam setiap langkah hidup
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl">👥</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">Persekutuan Umat</h4>
                                    <p className="text-gray-600 text-sm">
                                        Membangun komunitas yang solid dan saling mendukung dalam iman Katolik
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl">💎</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">Jati Diri & Martabat</h4>
                                    <p className="text-gray-600 text-sm">
                                        Mengembangkan identitas Kristiani yang kuat dan menjunjung tinggi martabat manusia
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* Refleksi */}
                    {/* <section className="mb-12">
                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Pokok Refleksi</h3>
                            <div className="prose max-w-none text-gray-700">
                                <p className="text-lg leading-relaxed mb-4">
                                    Visi ini mengajak seluruh umat Katolik Keuskupan Manado untuk senantiasa hidup dalam terang Sabda
                                    Allah. Sabda Allah menjadi kompas yang mengarahkan setiap langkah dalam membangun persekutuan yang
                                    sejati.
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    Sebagai persekutuan umat beriman, kita dipanggil untuk mengembangkan jati diri sebagai murid Kristus
                                    yang autentik, serta menjunjung tinggi martabat setiap pribadi sebagai citra Allah.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Dengan demikian, kehadiran umat Katolik Keuskupan Manado diharapkan dapat menjadi terang yang
                                    menyinari kehidupan bersama di tengah masyarakat, membawa damai, keadilan, dan kasih dalam setiap
                                    aspek kehidupan.
                                </p>
                            </div>
                        </div>
                    </section> */}

                    {/* Call to Action */}
                    {/* <section className="text-center">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4">Mari Bersama Mewujudkan Visi</h3>
                            <p className="text-lg mb-6">
                                Setiap umat dipanggil untuk berpartisipasi aktif dalam mewujudkan visi Keuskupan Manado
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                    Pelajari Lebih Lanjut
                                </button>
                                <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                                    Hubungi Kami
                                </button>
                            </div>
                        </div>
                    </section> */}
                </div>
            </main>

            <Footer />
        </div>
    )
}

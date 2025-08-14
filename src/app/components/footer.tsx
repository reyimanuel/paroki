import { MapPin, Mail, Clock } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Gereja Paroki Bunda Teresa Dari Calcutta</h3>
                        <p className="text-gray-300 mb-4">
                            Melayani umat Katolik dengan kasih dan dedikasi dalam semangat Injil Kristus.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Kontak</h4>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span className="text-sm text-gray-300">Jl. Dahlia Raya III No.9, Paniki Bawah, Kec. Mapanget, Kota Manado, Sulawesi Utara</span>
                            </div>
                            {/* <div className="flex items-center">
                                <Phone className="h-4 w-4 mr-2" />
                                <span className="text-sm text-gray-300">(031) 5343814</span>
                            </div> */}
                            <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-2" />
                                <span className="text-sm text-gray-300">paroki.bundateresagpi@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Jadwal Perayaan Ekaristi</h4>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                <span className="text-sm text-gray-300">Minggu: 07.00, 09.00, 11.00, 18.00</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                <span className="text-sm text-gray-300">Jumat Pertama: 18.00</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                <span className="text-sm text-gray-300">Harian: 05.30</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
                        <div className="space-y-2">
                            <a href="/profil" className="block text-sm text-gray-300 hover:text-blue-200">Profil</a>
                            <a href="/informasi/berita" className="block text-sm text-gray-300 hover:text-blue-200">Berita</a>
                            <a href="/karya-pastoral" className="block text-sm text-gray-300 hover:text-blue-200">Karya Pastoral</a>
                            <a href="/dokumen" className="block text-sm text-gray-300 hover:text-blue-200">Dokumen</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-300">
                        © 2025 Gereja Paroki Bunda Teresa Dari Calcutta
                    </p>
                </div>
            </div>
        </footer>
    )
}

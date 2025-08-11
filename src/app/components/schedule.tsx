import {CalendarDays, Clock } from 'lucide-react'

export default function Schedule() {
    return (
        <section>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">
                        Jadwal Perayaan Ekaristi
                    </h2>
                    {/* <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Gereja Katolik Bunda Teresa - Calcutta Griya Paniki Indah
                    </p>
                    <p className="text-md text-gray-600 mt-2 flex items-center justify-center">
                        <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                        Jl. Dahlia Raya 03 No. 9, Kelurahan Buha, Kecamatan Mapanget, Manado - Sulawesi Utara
                    </p> */}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Minggu Schedule */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
                        <div className="flex items-center mb-4">
                            <CalendarDays className="h-6 w-6 text-blue-600 mr-3" />
                            <h3 className="text-xl font-bold text-gray-800">Minggu</h3>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center">
                                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                Pagi : 07.00 WITA
                            </li>
                            <li className="flex items-center">
                                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                Pagi : 09.00 WITA
                            </li>
                            <li className="flex items-center">
                                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                Pagi : 11.00 WITA
                            </li>
                            <li className="flex items-center">
                                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                Sore : 18.00 WITA
                            </li>
                        </ul>
                    </div>

                    {/* Jumat Pertama Schedule */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
                        <div className="flex items-center mb-4">
                            <CalendarDays className="h-6 w-6 text-blue-600 mr-3" />
                            <h3 className="text-xl font-bold text-gray-800">Jumat Pertama</h3>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center">
                                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                Sore : 18.00 WITA
                            </li>
                        </ul>
                    </div>

                    {/* Harian Schedule */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
                        <div className="flex items-center mb-4">
                            <CalendarDays className="h-6 w-6 text-blue-600 mr-3" />
                            <h3 className="text-xl font-bold text-gray-800">Harian</h3>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center">
                                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                Pagi : 05.30 WITA
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

import { CalendarDays, Clock } from "lucide-react"

export default function Schedule() {
    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">Jadwal Perayaan Ekaristi</h2>
                </div>

                {/* Main Schedule Container */}
                <div className="bg-gray-200 rounded-3xl p-8 max-w-6xl mx-auto relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url(/misa.jpg)" }}></div>

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Jadwal Pusat */}
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">PUSAT PAROKI</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Minggu Schedule */}
                                <div className="bg-white/60 p-6 rounded-lg shadow-md">
                                    <div className="flex items-center justify-center mb-4">
                                        <CalendarDays className="h-6 w-6 text-blue-600 mr-3" />
                                        <h4 className="text-xl font-bold text-gray-800">Minggu</h4>
                                    </div>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center justify-center">
                                            <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                            07.00 WITA
                                        </li>
                                        <li className="flex items-center justify-center">
                                            <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                            09.00 WITA
                                        </li>
                                        <li className="flex items-center justify-center">
                                            <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                            11.00 WITA
                                        </li>
                                        <li className="flex items-center justify-center">
                                            <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                            18.00 WITA
                                        </li>
                                    </ul>
                                </div>

                                {/* Jumat Pertama Schedule */}
                                <div className="bg-white/60 p-6 rounded-lg shadow-md">
                                    <div className="flex items-center justify-center mb-4">
                                        <CalendarDays className="h-6 w-6 text-blue-600 mr-3" />
                                        <h4 className="text-xl font-bold text-gray-800">Jumat Pertama</h4>
                                    </div>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center justify-center">
                                            <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                            18.00 WITA
                                        </li>
                                    </ul>
                                </div>

                                {/* Harian Schedule */}
                                <div className="bg-white/60 p-6 rounded-lg shadow-md">
                                    <div className="flex items-center justify-center mb-4">
                                        <CalendarDays className="h-6 w-6 text-blue-600 mr-3" />
                                        <h4 className="text-xl font-bold text-gray-800">Harian</h4>
                                    </div>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center justify-center">
                                            <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                            05.30 WITA
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Jadwal Cabang */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Stasi Santo Petrus Mapanget Barat */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">STASI ST. PETRUS</h3>
                                
                                <div className="bg-white/60 p-6 rounded-lg shadow-md">
                                    <div className="flex items-center justify-center mb-4">
                                        <CalendarDays className="h-6 w-6 text-blue-600 mr-3" />
                                        <h4 className="text-lg font-bold text-gray-800">Minggu</h4>
                                    </div>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center justify-center">
                                            <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                            09.00 WITA
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-60 w-px bg-gray-400"></div>

                            {/* Stasi Santo Carolus Boromeus Kima Atas */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">STASI ST. CAROLUS BOROMEUS</h3>

                                <div className="bg-white/60 p-6 rounded-lg shadow-md">
                                    <div className="flex items-center justify-center mb-4">
                                        <CalendarDays className="h-6 w-6 text-blue-600 mr-3" />
                                        <h4 className="text-lg font-bold text-gray-800">Minggu</h4>
                                    </div>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center justify-center">
                                            <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                            07.00 WITA
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

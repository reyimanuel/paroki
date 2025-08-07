import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

export default function SejarahPage() {
    const pastorList = [
        {
            name: "Pastor Piet Petrus Tinangon Pr.",
            period: "21 Februari 2021 – 12 Mei 2024",
            status: "Pastor Paroki Pertama"
        },
        {
            name: "Pastor Johanes Josep Montolalu Pr.",
            period: "12 Mei 2024 – 25 Agustus 2024",
            status: "Pelaksana Tugas",
            sk: "SK Uskup Keuskupan Manado nomor 29/U/SK/V/2024 tanggal 12 Mei 2024"
        },
        {
            name: "Pastor Fransiscus Antonio Runtu Pr.",
            period: "25 Agustus 2024 – sekarang",
            status: "Pastor Paroki",
            sk: "SK Uskup Keuskupan Manado nomor 80/U/SK/8/2024 tanggal 12 Agustus 2024"
        }
    ]

    const wilayahRohaniPusat = [
        "WR Santo Ambrosius",
        "WR Santo Thomas Becket",
        "WR Santo Yohanes Rasul dan Penginjil",
        "WR Santa Maria Ratu Rosari",
        "WR Santa Elisabeth",
        "WR Santa Ursula",
        "WR Santo Fidelis Sigmaringen",
        "WR Santo Athanasius",
        "WR Santa Lidwina",
        "WR Santo Valentinus",
        "WR Santo Mikael",
        "WR Santa Maria Ratu Pencinta Damai",
        "WR Santa Verena",
        "WR Santa Helena",
        "WR Santo Padre Pio",
        "WR Santo Lorenzo Ruiz"
    ]

    const wilayahRohaniMapanget = [
        "WR Santa Perpetua",
        "WR Santa Angela Merici",
        "WR Santo Antonius dari Padua"
    ]

    const wilayahRohaniKima = [
        "WR Santo Yohanes Maria Vianney",
        "WR Santo Paskalis Baylon"
    ]

    const kelurahan = [
        "Kelurahan Paniki Bawah",
        "Kelurahan Buha",
        "Kelurahan Bengkol",
        "Kelurahan Kima Atas",
        "Kelurahan Mapanget Barat"
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Sejarah Paroki Bunda Teresa dari Calcutta
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Perjalanan pembentukan Paroki ke-73 di Keuskupan Manado, Griya Paniki Indah
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3">
                        {/* Sekilas Paroki */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-blue-800 mb-6">Sekilas Paroki</h2>
                            <div className="bg-blue-50 p-6 rounded-lg mb-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Gereja Katolik Paroki Bunda Teresa dari Calcutta (BTDC) di Griya Paniki Indah (GPI)
                                    merupakan paroki ke-73 di Keuskupan Manado. Berdirinya paroki ini berawal dari kerinduan
                                    umat Katolik di Perumahan Griya Paniki Indah untuk memiliki tempat ibadah sendiri.
                                </p>
                            </div>
                        </section>

                        {/* Timeline Pembentukan */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-blue-800 mb-6">Timeline Pembentukan Paroki</h2>
                            <div className="space-y-6">
                                <div className="border-l-4 border-blue-500 pl-6">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">29 Desember 2013</h3>
                                        <p className="text-gray-600">
                                            Panitia pembangunan dibentuk berdasarkan SK Pastor Paroki Yesus Gembala Baik Paniki
                                            nomor 01/YGB/XII/2013, yang ditandatangani Pastor Joutje Palit Pr., dengan ketua
                                            panitia Fabilia Merung.
                                        </p>
                                    </div>
                                </div>

                                <div className="border-l-4 border-blue-500 pl-6">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">13 Maret 2016</h3>
                                        <p className="text-gray-600">
                                            Mgr. Yosep Suwatan MSC, Uskup Manado, bersama Pastor Paulus Joutje Palit Pr.
                                            meletakkan batu pertama pembangunan gereja di tanah seluas ±5.000 m² yang
                                            merupakan hibah dari Keluarga Sumeisey-Nicolaas dan Keluarga Pesoth-Sumeisey.
                                        </p>
                                    </div>
                                </div>

                                <div className="border-l-4 border-blue-500 pl-6">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">26 November 2017</h3>
                                        <p className="text-gray-600">
                                            Gereja digunakan untuk pertama kalinya dalam Misa Pesta Kristus Raja se-Kevikepan
                                            Manado yang dipimpin oleh Mgr. Benedictus Estephanus Rolly Untu MSC dan dihadiri
                                            sekitar 1.500 umat dari berbagai paroki.
                                        </p>
                                    </div>
                                </div>

                                <div className="border-l-4 border-blue-500 pl-6">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">6 April 2018</h3>
                                        <p className="text-gray-600">
                                            Gereja yang masih berstatus Stasi Santa Teresa dari Kalkuta GPI diberkati oleh
                                            Mgr. Benedictus Estephanus Rolly Untu MSC dan diresmikan oleh Gubernur Sulawesi
                                            Utara, Olly Dondokambey SE, serta Ibu Rita Dondokambey Tamuntuan.
                                        </p>
                                    </div>
                                </div>

                                <div className="border-l-4 border-blue-500 pl-6">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">25 November 2020</h3>
                                        <p className="text-gray-600">
                                            Wolf Frederik C. Sumeisey menyerahkan tiga berkas sertifikat tanah tempat
                                            berdirinya gedung gereja kepada Mgr. Benedictus Estephanus Rolly Untu MSC
                                            sebagai bentuk legalitas kepemilikan lahan gereja.
                                        </p>
                                    </div>
                                </div>

                                <div className="border-l-4 border-blue-500 pl-6">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">21 Februari 2021</h3>
                                        <p className="text-gray-600">
                                            <strong>Hari bersejarah!</strong> Paroki Santa Teresa dari Kalkuta Griya Paniki Indah
                                            dimekarkan dari Paroki Yesus Gembala Baik Paniki dan diresmikan sebagai paroki mandiri
                                            dengan nama Paroki Bunda Teresa dari Calcutta sesuai SK nomor 17/U/SK/II/2021.
                                        </p>
                                    </div>
                                </div>

                                <div className="border-l-4 border-blue-500 pl-6">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">23 Mei 2021</h3>
                                        <p className="text-gray-600">
                                            Pada Hari Raya Pentakosta, Uskup Manado melaksanakan misa dan melantik serta
                                            mengutus DPP Paroki Bunda Teresa dari Calcutta GPI untuk pertama kalinya.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Donatur dan Pembangunan */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-blue-800 mb-6">Donatur dan Pembangunan</h2>
                            <div className="bg-indigo-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-indigo-800 mb-4">Keluarga Donatur Utama</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2">Keluarga Sumeisey-Nicolaas</h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• Hibah tanah seluas ±5.000 m²</li>
                                            <li>• Menanggung hampir seluruh biaya pembangunan</li>
                                            <li>• Total kontribusi ±Rp 6 miliar</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2">Keluarga Pesoth-Sumeisey</h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• Co-donatur hibah tanah</li>
                                            <li>• Tokoh umat dan developer GPI</li>
                                            <li>• Mendukung legalisasi sertifikat</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Daftar Pastor Paroki */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-blue-800 mb-6">Daftar Pastor Paroki</h2>
                            <div className="space-y-4">
                                {pastorList.map((pastor, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800">{pastor.name}</h3>
                                                <p className="text-blue-600 font-medium">{pastor.status}</p>
                                                <p className="text-gray-600">{pastor.period}</p>
                                            </div>
                                            {pastor.sk && (
                                                <div className="mt-2 md:mt-0">
                                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                        {pastor.sk}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Wilayah Rohani */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-blue-800 mb-6">Struktur Wilayah Rohani</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-bold text-blue-800 mb-4">
                                        Pusat Paroki (16 WR)
                                    </h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {wilayahRohaniPusat.map((wr, index) => (
                                            <li key={index}>• {wr}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-indigo-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-bold text-indigo-800 mb-4">
                                        Stasi Santo Petrus Mapanget Barat (3 WR)
                                    </h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {wilayahRohaniMapanget.map((wr, index) => (
                                            <li key={index}>• {wr}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-cyan-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-bold text-cyan-800 mb-4">
                                        Stasi Santo Carolus Boromeus Kima Atas (2 WR)
                                    </h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {wilayahRohaniKima.map((wr, index) => (
                                            <li key={index}>• {wr}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="text-lg font-semibold text-gray-800">
                                    Total: <span className="text-blue-800">21 Wilayah Rohani</span>
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                    *Pemekaran dari 17 WR menjadi 21 WR pada 25 November 2023
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Fakta Singkat</h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-gray-700">Status</h4>
                                    <p className="text-sm text-gray-600">Paroki ke-73 Keuskupan Manado</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Diresmikan</h4>
                                    <p className="text-sm text-gray-600">21 Februari 2021</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Luas Tanah</h4>
                                    <p className="text-sm text-gray-600">±5.000 m²</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Biaya Pembangunan</h4>
                                    <p className="text-sm text-gray-600">±Rp 6 miliar</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Jumlah Stasi</h4>
                                    <p className="text-sm text-gray-600">3 Stasi</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Wilayah Rohani</h4>
                                    <p className="text-sm text-gray-600">21 WR</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Wilayah Pelayanan</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Paroki mencakup 5 kelurahan di Kecamatan Mapanget:
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                {kelurahan.map((kel, index) => (
                                    <li key={index}>• {kel}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-800 mb-4">Pastor Saat Ini</h3>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3"></div>
                                <h4 className="font-semibold text-gray-700">Pastor Fransiscus Antonio Runtu Pr.</h4>
                                <p className="text-sm text-gray-600">Pastor Paroki</p>
                                <p className="text-xs text-gray-500 mt-2">25 Agustus 2024 - sekarang</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

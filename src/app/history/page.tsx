'use client'

import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import Image from 'next/image'
import { useState } from 'react'

export default function History() {
    const pastor = [
        {
            name: "Pastor Piet Petrus Tinangon Pr.",
            period: "21 Februari 2021 – 12 Mei 2024",
            status: "Pastor Paroki Pertama",
            sk: "SK Uskup Keuskupan Manado nomor 17/U/SK/II/2021 tanggal 21 Februari 2021",
            image: "/piet-tinangon.jpg"
        },
        {
            name: "Pastor Johanes Josep Montolalu Pr.",
            period: "12 Mei 2024 – 25 Agustus 2024",
            status: "Pelaksana Tugas",
            sk: "SK Uskup Keuskupan Manado nomor 29/U/SK/V/2024 tanggal 12 Mei 2024",
            image: "/johanes-montolalu.png" 
        },
        {
            name: "Pastor Fransiscus Antonio Runtu Pr.",
            period: "25 Agustus 2024 – sekarang",
            status: "Pastor Paroki",
            sk: "SK Uskup Keuskupan Manado nomor 80/U/SK/8/2024 tanggal 12 Agustus 2024",
            image: "/fransiscus-runtu.png"
        }
    ]

    const wilayahRohaniPusat = [
        {
            name: "WR St. Ambrosius",
            image: "/wr/st-ambrosius.png",
            kk: 25,
            jiwa: 77,
            lakiLaki: 38,
            perempuan: 39
        },
        {
            name: "WR St. Thomas Becket",
            image: "/wr/st-thomas-becket.png",
            kk: 24,
            jiwa: 90,
            lakiLaki: 37,
            perempuan: 53
        },
        {
            name: "WR Sta. Ursula",
            image: "/wr/santa-ursula.png",
            kk: 24,
            jiwa: 74,
            lakiLaki: 35,
            perempuan: 37
        },
        {
            name: "WR Sta. Elisabeth",
            image: "/wr/st-elizabeth-dari-hungaria.png",
            kk: 20,
            jiwa: 80,
            lakiLaki: 39,
            perempuan: 40
        },
        {
            name: "WR Sta. Maria Ratu Rosari",
            image: "/wr/santa-maria-ratu-rosario.png",
            kk: 16,
            jiwa: 55,
            lakiLaki: 24,
            perempuan: 31
        },
        {
            name: "WR St. Yohanes Rasul Pengarang Injil",
            image: "/wr/st-yohanes-rasul-&-penginjil.png",
            kk: 17,
            jiwa: 58,
            lakiLaki: 27,
            perempuan: 31
        },
        {
            name: "WR Sta. Maria Ratu Pencinta Damai",
            image: "/wr/santa-maria-ratu-pencinta-damai.png",
            kk: 23,
            jiwa: 76,
            lakiLaki: 32,
            perempuan: 43
        },
        {
            name: "WR St. Fidelis dari Sigmaringen",
            image: "/wr/santo-fidelis-dari-sigmaringen.png",
            kk: 31,
            jiwa: 98,
            lakiLaki: 45,
            perempuan: 53
        },
        {
            name: "WR Sta. Lidwina",
            image: "/wr/st-lidwina.png",
            kk: 34,
            jiwa: 97,
            lakiLaki: 42,
            perempuan: 55
        },
        {
            name: "WR St. Athanasius",
            image: "/wr/st-athanasius.png",
            kk: 23,
            jiwa: 82,
            lakiLaki: 43,
            perempuan: 39
        },
        {
            name: "WR St. Mikael",
            image: "/wr/santo-mikael.png",
            kk: 15,
            jiwa: 51,
            lakiLaki: 25,
            perempuan: 26
        },
        {
            name: "WR St. Valentinus",
            image: "/wr/santo-valentinus.png",
            kk: 24,
            jiwa: 73,
            lakiLaki: 34,
            perempuan: 39
        },
        {
            name: "WR Sta. Helena",
            image: "/wr/santa-helena.png",
            kk: 22,
            jiwa: 65,
            lakiLaki: 32,
            perempuan: 33
        },
        {
            name: "WR Sta. Verena",
            image: "/wr/santa-verena.png",
            kk: 18,
            jiwa: 50,
            lakiLaki: 25,
            perempuan: 25
        },
        {
            name: "WR St. Padre Pio",
            image: "/wr/santo-padre-pio.png",
            kk: 14,
            jiwa: 42,
            lakiLaki: 22,
            perempuan: 20
        },
        {
            name: "WR St. Lorenzo Ruiz",
            image: "/wr/santo-lorenzo-ruiz.png",
            kk: 20,
            jiwa: 79,
            lakiLaki: 33,
            perempuan: 46
        }
    ]

    const wilayahRohaniKima = [
        {
            name: "WR St. Paskalis Baylon",
            image: "/wr/paskalis-baylon.png",
            kk: 23,
            jiwa: 80,
            lakiLaki: 37,
            perempuan: 43
        },
        {
            name: "WR St. Yohanes Maria Vianey",
            image: "/wr/santo-yohanes-maria-vianey.png",
            kk: 19,
            jiwa: 74,
            lakiLaki: 41,
            perempuan: 33
        }
    ]

    const wilayahRohaniMapanget = [
        {
            name: "WR St. Antonius de Padua",
            image: "/wr/st-antonius-dari-padua.png",
            kk: 29,
            jiwa: 90,
            lakiLaki: 50,
            perempuan: 40
        },
        {
            name: "WR Sta. Angela Merici",
            image: "/wr/st-angela-merici.png",
            kk: 29,
            jiwa: 91,
            lakiLaki: 52,
            perempuan: 39
        },
        {
            name: "WR Sta. Perpetua",
            image: "/wr/st-perpetua.png",
            kk: 21,
            jiwa: 64,
            lakiLaki: 27,
            perempuan: 36
        }
    ]

    const kelurahan = [
        "Kelurahan Paniki Bawah",
        "Kelurahan Buha",
        "Kelurahan Bengkol",
        "Kelurahan Kima Atas",
        "Kelurahan Mapanget Barat"
    ]
    
    function WRItem({
        wr,
        stats,
        bgColor,
        iconSrc,
    }: {
        wr: string
        stats: { keluarga: number; jiwa: number; lakiLaki: number; perempuan: number; }
        bgColor: string
        iconSrc: string
    }) {
        const [showStats, setShowStats] = useState(false)

        return (
            <div
                className={`relative ${bgColor} p-4 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md`}
                onMouseEnter={() => setShowStats(true)}
                onMouseLeave={() => setShowStats(false)}
                onClick={() => setShowStats(!showStats)}
            >
                <div className="flex items-center gap-4">
                    <Image
                        src={iconSrc || "/placeholder.svg"}
                        alt={wr}
                        width={48}
                        height={48}
                        className="rounded-full object-cover flex-shrink-0"
                    />
                    <span className="text-gray-700 font-medium flex-grow">{wr}</span>
                    <div className="text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Statistics Popup - Desktop: hover, Mobile: click */}
                <div
                    className={`absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-10 transition-all duration-300 ${showStats ? "opacity-100 visible transform translate-y-0" : "opacity-0 invisible transform -translate-y-2"
                        } md:${showStats ? "block" : "hidden"}`}
                >
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{stats.keluarga}</div>
                            <div className="text-xs text-gray-500">Keluarga</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-600">{stats.jiwa}</div>
                            <div className="text-xs text-gray-500">Total Jiwa</div>
                        </div>
                    </div>

                    {/* Gender Statistics */}
                    <div className="grid grid-cols-2 gap-4 mb-4 pt-2 border-t border-gray-100">
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-1">
                                <span className="text-blue-500 mr-1">👨</span>
                                <div className="text-lg font-bold text-blue-500">{stats.lakiLaki}</div>
                            </div>
                            <div className="text-xs text-gray-500">Laki-laki</div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-1">
                                <span className="text-pink-500 mr-1">👩</span>
                                <div className="text-lg font-bold text-pink-500">{stats.perempuan}</div>
                            </div>
                            <div className="text-xs text-gray-500">Perempuan</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

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
                                {pastor.map((pastor, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <div className="flex items-center mb-4 md:mb-0">
                                                <Image
                                                    src={pastor.image || "/placeholder.svg"}
                                                    alt={pastor.name}
                                                    width={80}
                                                    height={80}
                                                    sizes="(max-width: 768px) 50vw, 150px"
                                                    className="rounded-full object-cover mr-4"
                                                />
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-800">{pastor.name}</h3>
                                                    <p className="text-blue-600 font-medium">{pastor.status}</p>
                                                    <p className="text-gray-600">{pastor.period}</p>
                                                </div>
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

                            {/* Pusat Paroki */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-blue-800 mb-4">Pusat Paroki</h3>
                                <div className="space-y-3">
                                    {wilayahRohaniPusat.map((wr, index) => {

                                        const stats = {
                                            keluarga: wr.kk,
                                            jiwa: wr.jiwa,
                                            lakiLaki: wr.lakiLaki,
                                            perempuan: wr.perempuan,
                                        }

                                        return (
                                            <WRItem
                                                key={index}
                                                wr={wr.name}
                                                stats={stats}
                                                bgColor="bg-blue-50"
                                                iconSrc={wr.image}
                                            />
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Stasi Santo Petrus Mapanget Barat */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-indigo-800 mb-4">Stasi Santo Petrus</h3>
                                <div className="space-y-3">
                                    {wilayahRohaniMapanget.map((wr, index) => {

                                        const stats = {
                                            keluarga: wr.kk,
                                            jiwa: wr.jiwa,
                                            lakiLaki: wr.lakiLaki,
                                            perempuan: wr.perempuan,
                                        }

                                        return (
                                            <WRItem
                                                key={index}
                                                wr={wr.name}
                                                stats={stats}
                                                bgColor="bg-blue-50"
                                                iconSrc={wr.image}
                                            />
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Stasi Santo Carolus Boromeus Kima Atas */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-cyan-800 mb-4">Stasi Santo Carolus Boromeus</h3>
                                <div className="space-y-3">
                                    {wilayahRohaniKima.map((wr, index) => {
                                        const stats = {
                                            keluarga: wr.kk,
                                            jiwa: wr.jiwa,
                                            lakiLaki: wr.lakiLaki,
                                            perempuan: wr.perempuan,
                                        }

                                        return (
                                            <WRItem
                                                key={index}
                                                wr={wr.name}
                                                stats={stats}
                                                bgColor="bg-blue-50"
                                                iconSrc={wr.image}
                                            />
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Statistik Total WR */}
                            <div className="mt-6 text-center">
                                {/* Hitung total KK, Jiwa, Laki-laki, Perempuan */}
                                {(() => {
                                    // Gabungkan semua WR
                                    const allWR = [
                                        ...wilayahRohaniPusat,
                                        ...wilayahRohaniMapanget,
                                        ...wilayahRohaniKima,
                                    ];
                                    // Hitung total
                                    const total = allWR.reduce(
                                        (acc, wr) => ({
                                            kk: acc.kk + wr.kk,
                                            jiwa: acc.jiwa + wr.jiwa,
                                            lakiLaki: acc.lakiLaki + wr.lakiLaki,
                                            perempuan: acc.perempuan + wr.perempuan,
                                        }),
                                        { kk: 0, jiwa: 0, lakiLaki: 0, perempuan: 0 }
                                    );
                                    return (
                                        <>
                                            <p className="text-lg font-semibold text-gray-800 mb-2">
                                                <span className="text-blue-800">Data Keseluruhan</span>
                                            </p>
                                            <div className="flex flex-wrap justify-center gap-6 mb-2">
                                                <div className="bg-blue-50 px-4 py-2 rounded">
                                                    <span className="font-bold text-blue-700">{total.kk}</span>
                                                    <span className="ml-2 text-gray-600">KK</span>
                                                </div>
                                                <div className="bg-blue-50 px-4 py-2 rounded">
                                                    <span className="font-bold text-indigo-700">{total.jiwa}</span>
                                                    <span className="ml-2 text-gray-600">Jiwa</span>
                                                </div>
                                                <div className="bg-blue-50 px-4 py-2 rounded">
                                                    <span className="font-bold text-blue-500">{total.lakiLaki}</span>
                                                    <span className="ml-2 text-gray-600">Laki-laki</span>
                                                </div>
                                                <div className="bg-blue-50 px-4 py-2 rounded">
                                                    <span className="font-bold text-pink-500">{total.perempuan}</span>
                                                    <span className="ml-2 text-gray-600">Perempuan</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-2">
                                                *Pemekaran dari 17 WR menjadi 21 WR pada 25 November 2023
                                            </p>
                                        </>
                                    );
                                })()}
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
                                    <p className="text-sm text-gray-600">2 Stasi</p>
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
                                <Image
                                    src="/fransiscus-runtu.png"
                                    alt="Pastor Fransiscus Antonio Runtu Pr."
                                    width={80}
                                    height={80}
                                    sizes="(max-width: 768px) 50vw, 80px"
                                    className="rounded-full object-cover mx-auto mb-3"
                                />
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

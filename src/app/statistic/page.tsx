"use client"

import Header from "../components/header"
import Footer from "../components/footer"
import Image from "next/image"
import { useState } from "react"

export default function StatistikPage() {
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

    function WRItem({
        wr,
        stats,
        bgColor,
        iconSrc,
    }: {
        wr: string
        stats: { keluarga: number; jiwa: number; lakiLaki: number; perempuan: number }
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
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Data Statistik</h1>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3">
                        {/* Overview Statistics */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-blue-800 mb-6">Ringkasan Statistik</h2>
                            <div className="grid md:grid-cols-4 gap-6 mb-8">
                                {(() => {
                                    const allWR = [...wilayahRohaniPusat, ...wilayahRohaniMapanget, ...wilayahRohaniKima]
                                    const total = allWR.reduce(
                                        (acc, wr) => ({
                                            kk: acc.kk + wr.kk,
                                            jiwa: acc.jiwa + wr.jiwa,
                                            lakiLaki: acc.lakiLaki + wr.lakiLaki,
                                            perempuan: acc.perempuan + wr.perempuan,
                                        }),
                                        { kk: 0, jiwa: 0, lakiLaki: 0, perempuan: 0 },
                                    )
                                    return (
                                        <>
                                            <div className="bg-blue-50 p-6 rounded-lg text-center">
                                                <div className="text-3xl font-bold text-blue-600 mb-2">{total.kk}</div>
                                                <div className="text-gray-600">Total Keluarga</div>
                                            </div>
                                            <div className="bg-indigo-50 p-6 rounded-lg text-center">
                                                <div className="text-3xl font-bold text-indigo-600 mb-2">{total.jiwa}</div>
                                                <div className="text-gray-600">Total Jiwa</div>
                                            </div>
                                            <div className="bg-cyan-50 p-6 rounded-lg text-center">
                                                <div className="text-3xl font-bold text-blue-500 mb-2">{total.lakiLaki}</div>
                                                <div className="text-gray-600">Laki-laki</div>
                                            </div>
                                            <div className="bg-pink-50 p-6 rounded-lg text-center">
                                                <div className="text-3xl font-bold text-pink-500 mb-2">{total.perempuan}</div>
                                                <div className="text-gray-600">Perempuan</div>
                                            </div>
                                        </>
                                    )
                                })()}
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

                                        return <WRItem key={index} wr={wr.name} stats={stats} bgColor="bg-blue-50" iconSrc={wr.image} />
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

                                        return <WRItem key={index} wr={wr.name} stats={stats} bgColor="bg-indigo-50" iconSrc={wr.image} />
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

                                        return <WRItem key={index} wr={wr.name} stats={stats} bgColor="bg-cyan-50" iconSrc={wr.image} />
                                    })}
                                </div>
                            </div>

                            {/* Additional Notes */}
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600 mt-2">Pemekaran dari 17 WR menjadi 21 WR pada 25 November 2023</p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Informasi Statistik</h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-gray-700">Total WR</h4>
                                    <p className="text-sm text-gray-600">21 Wilayah Rohani</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Pusat Paroki</h4>
                                    <p className="text-sm text-gray-600">16 WR</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Stasi Santo Petrus</h4>
                                    <p className="text-sm text-gray-600">3 WR</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Stasi Santo Carolus</h4>
                                    <p className="text-sm text-gray-600">2 WR</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-800 mb-4">Catatan</h3>
                            <div className="text-sm text-gray-700 space-y-2">
                                <p>• Data berdasarkan sensus paroki terbaru</p>
                                <p>• Statistik mencakup seluruh wilayah pelayanan</p>
                                <p>• Pemekaran WR dilakukan untuk pelayanan yang lebih optimal</p>
                                <p>• Data dapat berubah sesuai dinamika umat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

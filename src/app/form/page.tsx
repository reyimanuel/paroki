"use client"

import Header from "../components/header"
import Footer from "../components/footer"
import { Download, FileText,} from "lucide-react"

export default function DokumenPage() {
    const documentCategories = [
        {
            title: "Formulir - formulir",
            icon: <FileText className="w-6 h-6" />,
            color: "bg-blue-50 border-blue-200",
            iconColor: "text-blue-600",
            documents: [
                {
                    title: "Formulir Calon Baptis",
                    description: "Formulir pendaftaran untuk calon baptis.",
                    fileType: "DOCX",
                    fileSize: "925 KB",
                    downloadUrl: "/documents/formulir-calon-baptis.docx",
                },
                {
                    title: "Formulir Calon Penerimaan ke Dalam Gereja Katolik",
                    description: "Formulir pendaftaran untuk calon penerimaan ke dalam Gereja Katolik.",
                    fileType: "DOCX",
                    fileSize: "920 KB",
                    downloadUrl: "/documents/formulir-calon-penerimaan-ke-dalam-gereja-katolik.docx",
                },
                {
                    title: "Formulir Komuni Pertama",
                    description: "Formulir pendaftaran untuk Komuni Pertama.",
                    fileType: "DOCX",
                    fileSize: "927 KB",
                    downloadUrl: "/documents/formulir-komuni-pertama-2025.docx",
                },
                {
                    title: "Formulir Nikah",
                    description: "Formulir pendaftaran untuk Nikah.",
                    fileType: "DOCX",
                    fileSize: "797 KB",
                    downloadUrl: "/documents/formulir-nikah-2025.docx",
                },
                {
                    title: "Formulir Pendaftaran Krisma",
                    description: "Formulir pendaftaran untuk Krisma.",
                    fileType: "DOCX",
                    fileSize: "680 KB",
                    downloadUrl: "/documents/formulir-pendaftaran-krisma-2025-ok.docx",
                },
                {
                    title: "Formulir Penerimaan Sakramen Kematian",
                    description: "Formulir pendaftaran untuk Penerimaan Sakramen Kematian.",
                    fileType: "DOCX",
                    fileSize: "922 KB",
                    downloadUrl: "/documents/formulir-penerimaan-sakramen-kematian.docx",
                },
 
                {
                    title: "Formulir Sakramen Pengurapan Orang Sakit (SPOS)",
                    description: "Formulir pendaftaran untuk Sakramen Pengurapan Orang Sakit.",
                    fileType: "DOCX",
                    fileSize: "926 KB",
                    downloadUrl: "/documents/formulir-sakramen-pengurapan-orang-sakit-spos.docx",
                },
            ],
        },
    ]

    const handleDownload = async (url: string, filename?: string) => {
        const inferExtension = (u: string) => {
            const match = u.split('/').pop()?.split('?')[0]?.split('#')[0];
            return match && match.includes('.') ? match.split('.').pop() : undefined;
        }

        let finalName = filename?.trim() || '';
        const hasExt = finalName.includes('.');
        const ext = inferExtension(url);

        if (!hasExt && ext) {
            finalName = finalName ? `${finalName}.${ext}` : `download.${ext}`;
        }
        if (!finalName) {
            finalName = url.split('/').pop() || 'file';
        }

        try {
            const res = await fetch(url, { method: 'GET' });
            if (!res.ok) throw new Error(`Failed to fetch file: ${res.statusText}`);

            const blob = await res.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = finalName;
            document.body.appendChild(link);
            link.click();
            link.remove();

            window.URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.error('Download failed, falling back to direct navigation.', err);
            window.location.href = url;
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Pusat Dokumen</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Akses dan unduh formulir serta dokumen penting.
                    </p>
                </div>

                <div className="space-y-12">
                    {documentCategories.map((category, categoryIndex) => (
                        <section key={categoryIndex} className="mb-12">
                            <div className="flex items-center mb-6">
                                <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                                    <div className={category.iconColor}>{category.icon}</div>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.documents.map((doc, docIndex) => (
                                    <div
                                        key={docIndex}
                                        className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{doc.title}</h3>
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{doc.description}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                            <div className="flex items-center space-x-4">
                                                <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">{doc.fileType}</span>
                                                <span>{doc.fileSize}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handleDownload(doc.downloadUrl, doc.title)}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                                        >
                                            <Download className="w-4 h-4" />
                                            <span>Unduh Dokumen</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* <div className="mt-16 bg-blue-50 rounded-lg p-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">Butuh Bantuan?</h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Jika Anda mengalami kesulitan mengunduh dokumen atau membutuhkan dokumen yang tidak tersedia di halaman
                            ini, silakan hubungi sekretariat paroki.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-semibold text-gray-800 mb-1">Telepon</h4>
                                <p className="text-gray-600">(0431) 123-4567</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                                <p className="text-gray-600">sekretariat@parokibtdc.org</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-semibold text-gray-800 mb-1">Jam Operasional</h4>
                                <p className="text-gray-600">Senin-Jumat: 08:00-16:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-gray-50 rounded-lg p-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Permintaan Dokumen Khusus</h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Untuk dokumen yang memerlukan persetujuan khusus atau dokumen pribadi seperti surat keterangan baptis,
                            silakan ajukan permohonan melalui formulir atau datang langsung ke sekretariat paroki.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                            Ajukan Permohonan Dokumen
                        </button>
                    </div>
                </div> */}
            </main>

            <Footer />
        </div>
    )
}

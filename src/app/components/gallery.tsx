import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
    const gallery = [
        {
            id: 1,
            name: "acara sample",
            image: "/sample.jpg",
            description: "Gambar kegiatan"
        },
        {
            id: 2,
            name: "acara sample",
            image: "/sample.jpg",
            description: "Gambar kegiatan"
        },
        {
            id: 3,
            name: "acara sample",
            image: "/sample.jpg",
            description: "Gambar kegiatan"
        }
    ]

    return (
        <section>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Gallery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((items: { id: number, name: string; image: string; description: string }) => (
                    <div key={items.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 flex flex-col">
                        <div className="p-0">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={items.image || "/sample.jpg"}
                                    alt={items.name}
                                    fill
                                    sizes="100vw"
                                    style={{ objectFit: 'cover' }}
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{items.name}</h3>
                            <p className="text-gray-600 mb-4">{items.description}</p>
                            <Link
                                href={`/paroki/${items.name.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '')}`}
                                className="text-blue-800 hover:text-blue-900 font-medium transition-colors mt-auto"
                            >
                                Selengkapnya →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

import Header from "../components/header"
import Footer from "../components/footer"
import Image from "next/image" // Re-import Image component

type Post = {
    title: string
    link: string
    published: string
    summary: string
    thumbnail: string // Re-add thumbnail
    intrinsicWidth?: number // Re-add intrinsic dimensions
    intrinsicHeight?: number
}

export default async function News() {
    const feedUrl = "https://teresacalcuttastagpi.blogspot.com/feeds/posts/default?alt=json"

    let posts: Post[] = []

    try {
        const res = await fetch(feedUrl, { cache: "no-store" })
        const data = await res.json()

        type FeedEntry = {
            title: { $t: string }
            link: { rel: string; href: string }[]
            published: { $t: string }
            summary?: { $t: string }
            content?: { $t: string }
            media$thumbnail?: { url: string }
            gd$image?: {
                rel: string
                width: string
                height: string
                src: string
            }
        }

        posts =
            data.feed?.entry?.map((entry: FeedEntry) => {
                let thumbnail = ""
                let intrinsicWidth: number | undefined
                let intrinsicHeight: number | undefined

                // Prioritize gd$image if it exists and has a src
                if (entry["gd$image"] && entry["gd$image"].src) {
                    thumbnail = entry["gd$image"].src.startsWith("//") ? `https:${entry["gd$image"].src}` : entry["gd$image"].src
                    intrinsicWidth = Number.parseInt(entry["gd$image"].width) || undefined
                    intrinsicHeight = Number.parseInt(entry["gd$image"].height) || undefined
                } else if (entry.media$thumbnail?.url) {
                    thumbnail = entry.media$thumbnail.url
                } else if (entry.content?.$t) {
                    const imgMatch = entry.content.$t.match(/<img[^>]+src="([^">]+)"/i)
                    if (imgMatch && imgMatch[1]) {
                        thumbnail = imgMatch[1]
                    }
                }

                return {
                    title: entry.title.$t,
                    link: entry.link.find((l) => l.rel === "alternate")?.href || "#",
                    published: entry.published.$t,
                    summary: entry.summary?.$t || "",
                    thumbnail,
                    intrinsicWidth,
                    intrinsicHeight,
                }
            }) || []
    } catch (error) {
        console.error("Failed to fetch or parse RSS feed:", error)
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Berita - Berita Paroki</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Ikuti perkembangan terkini kegiatan dan program-program paroki langsung dari blog kami.
                    </p>
                </div>

                <div className="space-y-6 max-w-3xl mx-auto">
                    {posts.length > 0 ? (
                        posts.map((post, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 p-6 flex items-start gap-4" // Added flex and gap
                            >
                                <div className="flex-grow">
                                    {" "}
                                    {/* Content on the left */}
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                        <a
                                            href={post.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline text-blue-800"
                                        >
                                            {post.title}
                                        </a>
                                    </h2>
                                    <p className="text-sm text-gray-500 mb-4">
                                        {new Date(post.published).toLocaleDateString("id-ID", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                    <p className="text-gray-700 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.summary }} />
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-800 hover:text-blue-900 font-medium mt-3 inline-block transition-colors"
                                    >
                                        Baca selengkapnya →
                                    </a>
                                </div>
                                {post.thumbnail && (
                                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                                        {" "}
                                        {/* Thumbnail on the right */}
                                        <Image
                                            src={post.thumbnail || "/placeholder.svg"}
                                            alt={post.title}
                                            width={96} // Fixed small width
                                            height={96} // Fixed small height
                                            className="rounded-md object-cover" // Ensure it covers the container
                                            priority={idx < 3}
                                        />
                                    </a>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">
                            Tidak ada berita terbaru yang dapat dimuat. Silakan kunjungi blog langsung:{" "}
                            <a
                                href="https://teresacalcuttastagpi.blogspot.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                teresacalcuttastagpi.blogspot.com
                            </a>
                        </p>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    )
}

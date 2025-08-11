import Link from "next/link"

type Post = {
  title: string
  link: string
  published: string
  summary: string
  thumbnail: string
  intrinsicWidth?: number
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
    }

    posts =
      data.feed?.entry?.map((entry: FeedEntry) => {
        return {
          title: entry.title.$t,
          link: entry.link.find((l) => l.rel === "alternate")?.href || "#",
          published: entry.published.$t,
          summary: entry.summary?.$t || "",
        }
      }) || []
  } catch (error) {
    console.error("Failed to fetch or parse RSS feed for NewsSection:", error)
  }

  // Take only the first 3 posts
  const newestPosts = posts.slice(0, 3)

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Berita Terkini</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newestPosts.length > 0 ? (
          newestPosts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-800"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {new Date(item.published).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: item.summary }} />
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:text-blue-900 font-medium mt-3 inline-block transition-colors"
                >
                  Baca selengkapnya →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">Tidak ada berita terbaru yang dapat dimuat.</p>
        )}
      </div>
      {newestPosts.length > 0 && (
        <div className="text-center mt-8">
          <Link
            href="/news"
            className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors font-medium"
          >
            Lihat Semua Berita
          </Link>
        </div>
      )}
    </section>
  )
}

export default function News() {
  const news = [
    {
      title: "Perayaan Paskah 2024",
      date: "15 April 2024",
      excerpt: "Keuskupan Surabaya mengadakan perayaan Paskah dengan berbagai kegiatan spiritual dan sosial."
    },
    {
      title: "Program Bantuan Sosial",
      date: "10 April 2024",
      excerpt: "Peluncuran program bantuan sosial untuk masyarakat kurang mampu di wilayah keuskupan."
    },
    {
      title: "Retret Imam-Imam",
      date: "5 April 2024",
      excerpt: "Kegiatan retret tahunan untuk para imam di lingkungan Keuskupan Surabaya."
    }
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Berita Terkini
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
            <div className="px-6 pb-6">
              <p className="text-gray-600">{item.excerpt}</p>
              <button className="text-red-800 hover:text-red-900 font-medium mt-3 transition-colors">
                Baca selengkapnya →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

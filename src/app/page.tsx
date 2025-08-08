import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white p-4">
      {/* Background Image */}
      <Image
        src="/background.jpg"
        alt="Gereja Katolik Bunda Teresa dari Calcutta Interior"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className="z-0"
        priority // Load this image with high priority as it's the main background
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-2xl">
        <div className="mb-8">
          <Image
            src="/hero.jpg"
            alt="Logo Keuskupan"
            width={120}
            height={120}
            className="mx-auto mb-4 rounded-full shadow-lg"
          />
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            Selamat Datang di <br /> Keuskupan Manado
          </h1>
          <p className="text-xl text-gray-200 drop-shadow-md">
            Melayani umat dengan kasih dan dedikasi, membangun komunitas yang beriman dan berkarya.
          </p>
        </div>
        <Link href="/main">
          <button className="bg-blue-800 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-105">
            Masuk ke Situs Utama
          </button>
        </Link>
      </div>
    </div>
  )
}

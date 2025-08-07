import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import Gallery from './components/gallery'
import Event from './components/event'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      <main className="container mx-auto px-4 py-12">
        <Gallery />

        <Event />
      </main>

      <Footer />
    </div>
  );
}

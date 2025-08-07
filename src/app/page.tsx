import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import Gallery from './components/gallery'
import News from './components/news'

export default function Home() {


  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      <main className="container mx-auto px-4 py-12">
        <Gallery />

        <News />
      </main>

      <Footer />
    </div>
  );
}

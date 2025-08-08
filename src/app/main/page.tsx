import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Gallery from '../components/gallery'
import Event from '../components/event'
import Map from '../components/map'
import Schedule from '../components/schedule'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />

            <main className="container mx-auto px-4 py-12">
                <Schedule />
                
                <Gallery />

                <Event />

                <Map />
            </main>

            <Footer />
        </div>
    );
}

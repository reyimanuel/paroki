import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
// import Gallery from '../components/gallery'
import News from '../components/news'
import Map from '../components/map'
import Schedule from '../components/schedule'
import Slider from '../components/slider'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />

            <main className="container mx-auto px-4 py-12">
                <div className='py-16 bg-blue-50 mb-16'>
                    <Schedule />
                </div>
                

                {/* <div className='py-16 mb-16'>
                    <Gallery />
                </div> */}

                <div className='py-16 mb-16'>
                    <News />
                </div>
               
                <div className='py-16 bg-blue-50 mb-16'>
                    <Map />
                </div>

                <div className='py-16 mb-16'>
                    <Slider />
                </div>
            </main>

            <Footer />
        </div>
    );
}

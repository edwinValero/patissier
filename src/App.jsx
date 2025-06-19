import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import MapEmbed from './components/MapEmbed';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-color5 font-body'>
      <Header />
      <main>
        <HeroBanner />
        <GallerySection />
        <MenuSection />
        <AboutSection />
        <MapEmbed />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

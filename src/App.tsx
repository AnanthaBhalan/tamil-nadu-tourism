import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DestinationsPage from './pages/DestinationsPage';
import ContactPage from './pages/ContactPage';
import TravelTipsPage from './pages/TravelTipsPage';
import SeasonalTipsPage from './pages/SeasonalTipsPage';
// Chennai Attractions
import MarinaBeachPage from './pages/attractions/MarinaBeachPage';
import KapaleeshwararTemplePage from './pages/attractions/KapaleeshwararTemplePage';
import FortStGeorgePage from './pages/attractions/FortStGeorgePage';
import SanThomeBasilicaPage from './pages/attractions/SanThomeBasilicaPage';
// Madurai Attractions
import MeenakshiTemplePage from './pages/attractions/MeenakshiTemplePage';
import ThirumalaiNayakarPalacePage from './pages/attractions/ThirumalaiNayakarPalacePage';
import GandhiMemorialMuseumPage from './pages/attractions/GandhiMemorialMuseumPage';
import KoodalAzhagarTemplePage from './pages/attractions/KoodalAzhagarTemplePage';
// Ooty Attractions
import OotyBotanicalGardensPage from './pages/attractions/OotyBotanicalGardensPage';
import DoddabettaPeakPage from './pages/attractions/DoddabettaPeakPage';
import OotyLakePage from './pages/attractions/OotyLakePage';
import NilgiriMountainRailwayPage from './pages/attractions/NilgiriMountainRailwayPage';
// Coimbatore Attractions
import MarudhamalaiTemplePage from './pages/attractions/MarudhamalaiTemplePage';
import SiruvaniWaterfallsPage from './pages/attractions/SiruvaniWaterfallsPage';
import VOCParkPage from './pages/attractions/VOCParkPage';
import GDNaiduMuseumPage from './pages/attractions/GDNaiduMuseumPage';
// Kanchipuram Attractions
import KamakshiAmmanTemplePage from './pages/attractions/KamakshiAmmanTemplePage';
import KanchipuramSilkPage from './pages/attractions/KanchipuramSilkPage';
import EkambareswararTemplePage from './pages/attractions/EkambareswararTemplePage';
import VaradharajaPerumalTemplePage from './pages/attractions/VaradharajaPerumalTemplePage';
import LocationDetailPage from './pages/LocationDetailPage';
import MapViewPage from './pages/MapViewPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import ChennaiPage from './pages/ChennaiPage';
import MaduraiPage from './pages/MaduraiPage';
import OotyPage from './pages/OotyPage';
import CoimbatorePage from './pages/CoimbatorePage';
import KanchipuramPage from './pages/KanchipuramPage';
import RestaurantsPage from './pages/restaurants/index';
import RestaurantDetailPage from './pages/restaurants/[id]';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/travel-tips" element={<TravelTipsPage />} />
            <Route path="/seasonal-tips" element={<SeasonalTipsPage />} />
            <Route path="/chennai" element={<ChennaiPage />} />
            <Route path="/madurai" element={<MaduraiPage />} />
            <Route path="/ooty" element={<OotyPage />} />
            <Route path="/coimbatore" element={<CoimbatorePage />} />
            <Route path="/kanchipuram" element={<KanchipuramPage />} />
{/* Chennai Attractions */}
            <Route path="/chennai/marina-beach" element={<MarinaBeachPage />} />
            <Route path="/chennai/kapaleeshwarar-temple" element={<KapaleeshwararTemplePage />} />
            <Route path="/chennai/fort-st-george" element={<FortStGeorgePage />} />
            <Route path="/chennai/san-thome-basilica" element={<SanThomeBasilicaPage />} />
            {/* Madurai Attractions */}
            <Route path="/madurai/meenakshi-temple" element={<MeenakshiTemplePage />} />
            <Route path="/madurai/thirumalai-nayakar-palace" element={<ThirumalaiNayakarPalacePage />} />
            <Route path="/madurai/gandhi-memorial-museum" element={<GandhiMemorialMuseumPage />} />
            <Route path="/madurai/koodal-azhagar-temple" element={<KoodalAzhagarTemplePage />} />
            {/* Ooty Attractions */}
            <Route path="/ooty/botanical-gardens" element={<OotyBotanicalGardensPage />} />
            <Route path="/ooty/doddabetta-peak" element={<DoddabettaPeakPage />} />
            <Route path="/ooty/lake-boat-house" element={<OotyLakePage />} />
            <Route path="/ooty/nilgiri-mountain-railway" element={<NilgiriMountainRailwayPage />} />
            {/* Coimbatore Attractions */}
            <Route path="/coimbatore/marudhamalai-temple" element={<MarudhamalaiTemplePage />} />
            <Route path="/coimbatore/siruvani-waterfalls" element={<SiruvaniWaterfallsPage />} />
            <Route path="/coimbatore/voc-park" element={<VOCParkPage />} />
            <Route path="/coimbatore/gd-naidu-museum" element={<GDNaiduMuseumPage />} />
            {/* Kanchipuram Attractions */}
            <Route path="/kanchipuram/kamakshi-amman-temple" element={<KamakshiAmmanTemplePage />} />
            <Route path="/kanchipuram/silk-sarees" element={<KanchipuramSilkPage />} />
            <Route path="/kanchipuram/ekambareswarar-temple" element={<EkambareswararTemplePage />} />
            <Route path="/kanchipuram/varadharaja-perumal-temple" element={<VaradharajaPerumalTemplePage />} />
            {/* Restaurant Routes */}
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
            <Route path="/location/:id" element={<LocationDetailPage />} />
            <Route path="/map" element={<MapViewPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DestinationsPage from './pages/DestinationsPage';
import ContactPage from './pages/ContactPage';
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
            <Route path="/chennai" element={<ChennaiPage />} />
            <Route path="/madurai" element={<MaduraiPage />} />
            <Route path="/ooty" element={<OotyPage />} />
            <Route path="/coimbatore" element={<CoimbatorePage />} />
            <Route path="/kanchipuram" element={<KanchipuramPage />} />
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

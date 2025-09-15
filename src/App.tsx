import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GetConnectedModal from './components/GetConnectedModal';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import OurTeam from './pages/OurTeam';
import Software from './pages/Software';
import Hardware from './pages/Hardware';
import Marketing from './pages/Marketing';
import Products from './pages/Products';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleGetConnected = () => {
    setIsModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onGetConnected={handleGetConnected} />;
      case 'about-us':
        return <AboutUs />;
      case 'career':
        return <Career />;
      case 'our-team':
        return <OurTeam />;
      case 'software':
        return <Software />;
      case 'hardware':
        return <Hardware />;
      case 'marketing':
        return <Marketing />;
      case 'portfolio':
        return <Portfolio />;
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onGetConnected={handleGetConnected} />;
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16 md:pt-20">
      <Header
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onGetConnected={handleGetConnected}
      />
      {renderPage()}
  <Footer onPageChange={handlePageChange} />
      <GetConnectedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}

export default App;

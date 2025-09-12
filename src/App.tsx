import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GetConnectedModal from './components/GetConnectedModal';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import OurTeam from './pages/OurTeam';

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
        return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Software Development - Coming Soon</h1></div>;
      case 'hardware':
        return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Hardware Solutions - Coming Soon</h1></div>;
      case 'marketing':
        return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Digital Marketing - Coming Soon</h1></div>;
      case 'portfolio':
        return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Portfolio - Coming Soon</h1></div>;
      case 'products':
        return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Products - Coming Soon</h1></div>;
      case 'contact':
        return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Contact - Coming Soon</h1></div>;
      default:
        return <Home onGetConnected={handleGetConnected} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage={currentPage} 
        onPageChange={handlePageChange}
        onGetConnected={handleGetConnected}
      />
      {renderPage()}
      <Footer />
      <GetConnectedModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;

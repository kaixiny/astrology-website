import React, { useState } from 'react';
import { 
  Moon, 
  Sun, 
  Heart, 
  Stars, 
  Users, 
  Sparkles,
  Cloud,
  Star,
  Menu,
  X
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [showTeamDetails, setShowTeamDetails] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleDownloadMenu = () => {
    setShowDownloadMenu(!showDownloadMenu);
  };

  const toggleTeamDetails = () => {
    setShowTeamDetails(!showTeamDetails);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-pink-50 to-orange-50 text-orange-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img 
                src={`${process.env.PUBLIC_URL}/app-icon.png`} 
                alt="App Icon" 
                className="w-8 h-8 rounded-full" 
              />
              <span className="text-orange-600 text-xl font-semibold">St⭐rry</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-orange-600 hover:text-orange-500 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-orange-600 hover:text-orange-500 transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('video')}
                className="text-orange-600 hover:text-orange-500 transition-colors"
              >
                Video
              </button>
              <button 
                onClick={() => scrollToSection('diagrams')}
                className="text-orange-600 hover:text-orange-500 transition-colors"
              >
                Diagrams
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-orange-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-orange-600 hover:bg-orange-50 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 text-orange-600 hover:bg-orange-50 transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('video')}
                className="block w-full text-left px-4 py-2 text-orange-600 hover:bg-orange-50 transition-colors"
              >
                Video
              </button>
              <button 
                onClick={() => scrollToSection('diagrams')}
                className="block w-full text-left px-4 py-2 text-orange-600 hover:bg-orange-50 transition-colors"
              >
                Diagrams
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="container mx-auto px-4 pt-28 pb-16 text-center relative overflow-hidden">
        {/* App Icon */}
        <div className="w-32 h-32 mx-auto mb-6 relative">
          <img 
            src={`${process.env.PUBLIC_URL}/app-icon.png`}
            alt="App Icon" 
            className="w-full h-full object-contain rounded-full shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full animate-pulse"></div>
        </div>

        {/* Title with decorations */}
        <div className="flex justify-center items-center gap-8 mb-6">
          <div className="flex items-center">
            <Stars className="w-12 h-12 text-orange-300 animate-twinkle" />
            <Sparkles className="w-10 h-10 text-pink-400 animate-twinkle ml-2" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bubblegum text-orange-600 animate-fadeIn whitespace-nowrap">
            St⭐rry
          </h1>
          
          <div className="flex items-center">
            <Sparkles className="w-10 h-10 text-pink-400 animate-twinkle mr-2" />
            <Stars className="w-12 h-12 text-orange-300 animate-twinkle" />
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-8 text-orange-500 animate-slideUp">
          ✨ Your Daily Astrology & Tarot Companion ✨
        </p>
        <div className="flex gap-8 justify-center animate-fadeIn">
        <div
            className="relative group overflow-visible z-50"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            {/* Download Now Button */}
            <button className="bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Download Now
          </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-9 left-0 bg-white border border-orange-300 rounded-lg shadow-lg w-64 ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
              style={{ paddingBottom: '16px', zIndex: '100' }}
            >
              <a
                href={`${process.env.PUBLIC_URL}/Group_3_Starry.zip`}
                download
                className="block px-4 py-2 text-orange-600 hover:bg-orange-50 transition-colors border-b border-orange-300"
              >
                Download the Source Code
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/Starryapk.zip`}
                download
                className="block px-4 py-2 text-orange-600 hover:bg-orange-50 transition-colors border-b border-orange-300"
              >
                Download the App APK
              </a>
            </div>
          </div>
          <button 
            onClick={toggleTeamDetails}
            className="bg-white/50 hover:bg-white/70 border-2 border-orange-300 text-orange-600 px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            About Us
          </button>
        </div>
      </header>

      {/* Team Section */}
      {showTeamDetails && (
        <section
        id="team"
        className="container mx-auto px-4 py-16 bg-orange-50 text-orange-800 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
          Meet the Starry Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/80 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-orange-700">
              Zhengying Sun
            </h3>
            <p className="text-orange-600">
              Designed Sign Up/Sign In/Sign Out functionality, maintained Firebase
              database.
            </p>
          </div>
          <div className="bg-white/80 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-orange-700">Alice</h3>
            <p className="text-orange-600">
              Built Tarot functionality, designed home page, integrated AI chatbot,
              and handled final code cleanup.
            </p>
          </div>
          <div className="bg-white/80 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-orange-700">Linda</h3>
            <p className="text-orange-600">
              Designed Compatibility feature, assisted in API testing, and
              collaborated on home page design.
            </p>
          </div>
          <div className="bg-white/80 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-orange-700">Kay</h3>
            <p className="text-orange-600">
              Developed Profile functionality, implemented user chart displays, and
              extracted user data from Firebase.
            </p>
          </div>
          <div className="bg-white/80 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-orange-700">Lucia</h3>
            <p className="text-orange-600">
              Some UI elements
            </p>
          </div>
        </div>
      </section>
      )}

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600 animate-fadeIn">Main Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Synastry Feature */}
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/90 transition-all transform hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-xl animate-slideUp">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-semibold ml-3 text-orange-600">Synastry</h3>
            </div>
            <p className="text-orange-700">Explore relationship compatibility and discover your perfect match! 💫</p>
          </div>

          {/* Daily Fortune */}
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/90 transition-all transform hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-xl animate-slideUp delay-100">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-semibold ml-3 text-orange-600">Daily Fortune</h3>
            </div>
            <p className="text-orange-700">Get your daily horoscope for love, career, and health! ❤️</p>
          </div>

          {/* Tarot Reading */}
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/90 transition-all transform hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-xl animate-slideUp delay-200">
            <div className="flex items-center mb-4">
              <Moon className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-semibold ml-3 text-orange-600">Tarot Cards</h3>
            </div>
            <p className="text-orange-700">Draw your daily tarot card and explore life's mysteries! 🔮</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600 animate-fadeIn">
          Watch Our Introduction
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl animate-slideUp">
            <iframe
              src="https://www.youtube.com/embed/fNXOMVGdnSc"
              title="App Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            ></iframe>
          </div>
        </div>

        {/* Padding between the two videos */}
        <div className="py-8"></div>

        {/* Title for the second video */}
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600 animate-fadeIn">
          Final Presentation and Demo
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl animate-slideUp">
            <iframe
              src="https://youtu.be/UJ5Lteqcg70" // Replace with your video URL
              title="Final Presentation and Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* New Diagrams Section */}
      <section id="diagrams" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">How to Work</h2>
        <div className="space-y-12">
          {/* MVVM Diagram */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-orange-500 mb-6">MVVM Diagram</h3>
            <img
              src={`${process.env.PUBLIC_URL}/mvvm.png`}
              alt="MVVM Diagram"
              className="mx-auto rounded-xl shadow-lg"
            />
          </div>
          {/* Threaded Diagram */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-orange-500 mb-6">Threaded Diagram</h3>
            <img
              src={`${process.env.PUBLIC_URL}/thread_design.jpg`}
              alt="Threaded Diagram"
              className="mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Floating Decorative Elements */}
      <div className="fixed top-10 left-10 animate-float">
        <Star className="w-8 h-8 text-orange-300" />
      </div>
      <div className="fixed bottom-10 right-10 animate-bounce">
        <Heart className="w-8 h-8 text-pink-300" />
      </div>
      <div className="fixed top-1/4 right-20 animate-float delay-100">
        <Cloud className="w-8 h-8 text-orange-200" />
      </div>
    </div>
  );

};

export default LandingPage;
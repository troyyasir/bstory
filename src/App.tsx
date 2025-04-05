import React from 'react';
import { Phone } from 'lucide-react';
import baklavaBg from './images/baklava-hero.jpg';
import baklavaPrincessCut from './images/2023-09-13.jpg';

interface BaklavaItem {
  name: string;
  price: number;
  description: string;
  image: string;
}

const baklavaItems: BaklavaItem[] = [
  {
    name: "Princess Cut - Small - 12Pcs",
    price: 25.00,
    description: "The most traditional Baklava in Pistachio Flavor, 12 fresh pieces",
    image: baklavaPrincessCut
  },
  {
    name: "Princess Cut - Medium - 35Pcs",
    price: 65.00,
    description: "Smaller Baklava Pieces in our same size Medium Trays",
    image: baklavaPrincessCut
  },
  {
    name: "Daisy Pie",
    price: 65.00,
    description: "12 larger pieces of Pistachio Baklava in our Round Tray",
    image: baklavaBg
  },
  {
    name: "Princess Cut - Large - 70Pcs",
    price: 95.00,
    description: "Our Largest Tray with 70 pieces Baklava in it",
    image: baklavaPrincessCut
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-baklava-cream to-baklava-cream/90 text-baklava-walnut">
      {/* Hero Section */}
      <div 
        className="h-[60vh] sm:h-[80vh] bg-center relative bg-no-repeat shadow-2xl"
        style={{
          backgroundImage: `url(${baklavaBg})`,
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-baklava-walnut/20 to-baklava-walnut/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center bg-baklava-walnut/40 backdrop-blur-md px-10 py-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20">
            <h1 className="text-5xl sm:text-7xl font-serif font-bold text-baklava-cream text-center drop-shadow-xl">
              Baklava Story
            </h1>
            <span className="block text-xl sm:text-3xl mt-6 font-serif font-normal text-baklava-cream drop-shadow-lg">
              A Sweet Mediterranean Tradition
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-baklava-brown text-center mb-12 sm:mb-16 drop-shadow-sm">
          Our Selections
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {baklavaItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] transform transition-all duration-500 hover:scale-105 border border-baklava-gold/10 hover:border-baklava-gold/30"
            >
              <div className="w-full h-48 sm:h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110 filter brightness-105"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-baklava-brown mb-2">
                  {item.name}
                </h3>
                <p className="text-baklava-walnut/70 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="flex justify-end">
                  <span className="text-xl sm:text-2xl font-bold text-baklava-brown drop-shadow-sm">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex flex-col items-center bg-white/50 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg">
            <a 
              href="tel:415-608-4448"
              className="inline-flex items-center gap-2 text-2xl sm:text-3xl font-serif text-baklava-brown hover:text-baklava-green transition-colors duration-300"
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
              415-608-4448
            </a>
            <p className="mt-3 sm:mt-4 text-baklava-walnut/70 text-sm sm:text-base">
              Call us to learn more about our selections
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-baklava-brown to-baklava-brown/95 text-baklava-cream py-8 sm:py-10 mt-12 sm:mt-16 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2 text-sm sm:text-base">© 2024 Sweet Traditions. All rights reserved.</p>
          <p className="text-baklava-cream/80 text-sm sm:text-base">
            Handcrafted with love in San Francisco
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
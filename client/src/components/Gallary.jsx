import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Gallary = () => {
  const navigate = useNavigate();
  
  const handleClick = (location) => {
    const placeSlug = location.nameEn
      .replace(/ & /g, '-')
      .replace(/\s+/g, '-');
    navigate(`/trips?place=${placeSlug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const locations = [
    {
      id: 1,
      name: "عمان",
      nameEn: "Amman",
      image: "/client/src/assets/Amman_2.png", 
      description: "The capital city with ancient Roman ruins and vibrant urban life"
    },
    {
      id: 2,
      name: "البحر الميت",
      nameEn: "Dead Sea",
      image: "/api/placeholder/800/600",
      description: "The lowest point on Earth with remarkably salty waters"
    },
    {
      id: 3,
      name: "العقبة",
      nameEn: "Aqaba",
      image: "/api/placeholder/1200/600",
      description: "Jordan's coastal resort with beautiful beaches and coral reefs"
    },
    {
      id: 4,
      name: "عجلون",
      nameEn: "Ajloun",
      image: "/api/placeholder/600/600",
      description: "Historic hillside town with Ottoman architecture"
    }
  ];

  return (
    <div className="flex flex-col w-full mx-auto p-4 gap-4 max-w-screen-xl">
      <h1 className="text-center text-4xl md:text-4xl font-serif mb-6 font-playfair">Discover Jordan</h1>
      
      {/* Top row - two equal columns */}
      <div className="flex flex-col md:flex-row gap-4">
        {locations.slice(0, 2).map((location) => (
          <div 
            key={location.id}
            onClick={() => handleClick(location)} 
            className="w-full md:w-1/2 relative rounded-lg overflow-hidden group cursor-pointer"
          >
            <img 
              src={assets[`Img${location.id + 20}`]} // Assuming assets.Img21, Img22, etc.
              alt={location.nameEn} 
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 w-full text-right">
                <h2 className="text-3xl text-white">{location.nameEn}</h2>
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {location.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom row - 60/40 split */}
      <div className="flex flex-col md:flex-row gap-4">
        {locations.slice(2).map((location) => (
          <div 
            key={location.id}
            onClick={() => handleClick(location)} 
            className={`w-full ${location.id === 3 ? 'md:w-3/5' : 'md:w-2/5'} relative rounded-lg overflow-hidden group cursor-pointer`}
          >
            <img 
              src={assets[`Img${location.id + 20}`]} // Assuming assets.Img21, Img22, etc.
              alt={location.nameEn} 
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 w-full text-right">
                <h2 className="text-3xl text-white">{location.nameEn}</h2>
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {location.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;

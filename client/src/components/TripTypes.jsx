import React from 'react'
import { FaHiking, FaUmbrellaBeach, FaCity, FaSpa } from "react-icons/fa";
import { GiChurch, GiForestCamp } from "react-icons/gi";
import { MdBeachAccess } from "react-icons/md";
import Title from './Title';
import { useNavigate } from 'react-router-dom';

const tripTypes = [
  { title: "Resorts", icon: <MdBeachAccess />, description: "Beach resorts and fun" },
  { title: "Adventure", icon: <FaHiking />, description: "Hiking, rafting, and more" },
  { title: "Healing Places", icon: <FaSpa />, description: "Relaxation and wellness centers" },
  { title: "Cultural", icon: <FaCity />, description: "Explore history & heritage" },
  { title: "Religious Places", icon: <GiChurch />, description: "Sacred and spiritual sites" },
  { title: "Natural Places", icon: <GiForestCamp />, description: "Forests, lakes, and more" },
];

const TripTypes = () => {
const navigate = useNavigate();

  const handleClick = (type) => {
    const categorySlug = type.title
      .replace(/ & /g, '-')
      .replace(/\s+/g, '-');

    // ننتقل إلى صفحة النتائج مع التصنيف كـ Query Param
   navigate(`/trips?category=${categorySlug}`);
   window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-10 bg-gray-50 pt-30">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <Title title='Category' />
        <p className="text-gray-600 mt-2">Choose your style of travel</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {tripTypes.map((type) => (
          <div
            key={type.title}
            className="hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => handleClick(type)}
          >
            <div className="flex flex-col items-center p-6">
              <div className="text-4xl text-orange-300 mb-4">{type.icon}</div>
              <h3 className="text-xl font-semibold font-playfair">{type.title}</h3>
              <p className="text-gray-500 text-sm mt-2 text-center">{type.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TripTypes;

import React from 'react';
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f9", paddingTop: "5rem" }}>
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-4xl sm:text-5xl font-extrabold text-center text-orange-500 mb-8" style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}>
          About JoStay
        </h1>

        <p className="text-base sm:text-lg text-center mb-8" style={{ lineHeight: "1.8", fontWeight: "500", color: "#444" }}>
          JoStay is a tourism platform dedicated to showcasing the best of Jordan. From the historical city of Petra to the serene beaches of Aqaba, we offer easy and seamless booking experiences to help you explore the rich culture and beauty of Jordan.
        </p>

        {/* Team Section */}
        <div className="text-center mb-12 bg-white p-6 sm:p-10 rounded-xl shadow-lg">
          <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-orange-400 mb-6 uppercase tracking-widest">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {[
              { name: "Amin Al-Jousi", role: "Project Leader & Back-end Developer", img: assets.Amin_2 },
              { name: "Sami Jaber", role: "Front-end Developer", img: assets.Sami },
              { name: "Hamzeh Abu Jeish", role: "Front-end Developer", img: assets.Hamza },
              { name: "Hassan Al-Shawaqfa", role: "Back-end Developer", img: assets.Hassan },
              { name: "Mona Al-Bahloul", role: "Documentation Specialist", img: assets.Mona },
              { name: "Mohannad Abu Najm", role: "Documentation Specialist", img: assets.Mohannad },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img src={member.img} alt={member.name} className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full mb-4 border-4 border-orange-500 shadow-md" />
                <p className="text-lg font-semibold text-gray-800">{member.name}</p>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center bg-white p-6 sm:p-10 rounded-xl shadow-lg">
          <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-orange-400 mb-6 uppercase tracking-widest">Our Mission</h2>
          <p className="text-base sm:text-lg mb-8" style={{ lineHeight: "1.8", fontWeight: "500", color: "#444" }}>
            JoStay's mission is to make traveling in Jordan easier, more enjoyable, and more accessible. We provide a user-friendly platform where you can browse and book trips to explore Jordan's incredible tourist destinations, including:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg mb-8 text-left max-w-3xl mx-auto">
            <li>Historical sites like Petra, Jerash, and the Dead Sea.</li>
            <li>Adventurous tours in Wadi Rum and Wadi Mujib.</li>
            <li>Relaxing beach vacations in Aqaba.</li>
            <li>Cultural experiences and much more.</li>
          </ul>
          <p className="text-base sm:text-lg mb-8">
            Whether you're looking for a quick getaway or a long-term exploration, JoStay ensures a seamless and enjoyable booking process. Let us help you experience Jordan like never before!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src={assets.Img21} alt="Amman" className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
            <img src={assets.Img22} alt="Aqaba" className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
            <img src={assets.Img23} alt="Dead Sea" className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

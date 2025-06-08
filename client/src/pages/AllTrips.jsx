import React, { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, MapPin, Search } from 'lucide-react'
import { tripsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const facilityIcons = {
  "Wi-Fi": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>,
  "Pool": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20"/><path d="M2 20h20"/><path d="M2 4h20"/><path d="M12 2v20"/></svg>,
  "Breakfast": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  "Parking": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M9 8h1"/><path d="M14 8h1"/></svg>,
  "Spa": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>,
  "Gym": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12"/><path d="M2 20h20"/><path d="M8 10v6"/><path d="M16 10v6"/><path d="M12 8v8"/></svg>
};

const { Handle } = Slider;

const StarRating = ({ value = 4.5, size = 16 }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i}
          size={size}
          fill={i < Math.floor(value) ? "gold" : "none"}
          color={i < Math.floor(value) ? "gold" : "#D1D5DB"}
          className={i < Math.floor(value) ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

const AllTrips = (trip) => {
  const [trips] = useState(tripsDummyData);
  const [filteredTrips, setFilteredTrips] = useState(tripsDummyData);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    amenities: [],
    rating: 0,
    sortBy: 'recommended',
    categories: [],
    places: [],
    adults: 0
  });

  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const allAmenities = [...new Set(tripsDummyData.flatMap(trip => trip.amenities))];
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const tripsPerPage = 6;
  const [showFilters, setShowFilters] = useState(false);
  const totalPages = Math.ceil(filteredTrips.length / tripsPerPage);
  const currentTrips = filteredTrips.slice((currentPage - 1) * tripsPerPage, currentPage * tripsPerPage);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const place = params.get('place');

    if (category) {
      const parsedCategory = category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()); 
      setFilters(prev => ({
        ...prev,
        categories: [parsedCategory]
      }));
    }

    if (place) {
      const parsedPlace = place.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()); 
      setFilters(prev => ({
        ...prev,
        places: [parsedPlace]
      }));
    }
  }, [location.search]);

  const handleCategoryToggle = (category) => {
    setFilters(prev => {
      const currentCategories = [...prev.categories];
      if (currentCategories.includes(category)) {
        return {
          ...prev,
          categories: currentCategories.filter(item => item !== category)
        };
      } else {
        return {
          ...prev,
          categories: [...currentCategories, category]
        };
      }
    });
  };

  const handleAdultsToggle = (range) => {
    let newAdults = 0;
    switch (range) {
      case "1-3 People": newAdults = 3; break;
      case "4-6 People": newAdults = 6; break;
      case "7-9 People": newAdults = 9; break;
      case "10+ People": newAdults = 10; break;
      default: break;
    }
    setFilters(prev => (prev.adults === newAdults ? 
      { ...prev, adults: 0 } : { ...prev, adults: newAdults }
    ));
  };

  const handlePlaceToggle = (place) => {
    setFilters(prev => {
      const currentPlaces = [...prev.places];
      if (currentPlaces.includes(place)) {
        return {
          ...prev,
          places: currentPlaces.filter(item => item !== place)
        };
      } else {
        return {
          ...prev,
          places: [...currentPlaces, place]
        };
      }
    });
  };

  const handleAmenityToggle = (amenity) => {
    setFilters(prev => {
      const currentAmenities = [...prev.amenities];
      if (currentAmenities.includes(amenity)) {
        return {
          ...prev,
          amenities: currentAmenities.filter(item => item !== amenity)
        };
      } else {
        return {
          ...prev,
          amenities: [...currentAmenities, amenity]
        };
      }
    });
  };

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  useEffect(() => {
    let results = [...trips];
    
    // Apply all filters
    if (filters.categories.length > 0) {
      results = results.filter(trip => 
        filters.categories.some(category => trip.catogery === category)
      );
    }

    if (filters.places.length > 0) {
      results = results.filter(trip => 
        filters.places.some(place => trip.city === place)
      );
    }

    if (filters.adults > 0) {
      results = results.filter(trip => {
        if (filters.adults === 3) return trip.adults >= 1 && trip.adults <= 3;
        else if (filters.adults === 6) return trip.adults >= 4 && trip.adults <= 6;
        else if (filters.adults === 9) return trip.adults >= 7 && trip.adults <= 9;
        else if (filters.adults === 10) return trip.adults >= 10;
        return true;
      });
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(trip => 
        trip.name.toLowerCase().includes(query) ||
        trip.city.toLowerCase().includes(query) ||
        (trip.description && trip.description.toLowerCase().includes(query))
      );
    }

    if (filters.priceRange) {
      results = results.filter(trip => 
        trip.TripPrice >= filters.priceRange[0] && trip.TripPrice <= filters.priceRange[1]
      );
    }

    if (filters.amenities.length > 0) {
      results = results.filter(trip => 
        filters.amenities.every(amenity => trip.amenities.includes(amenity))
      );
    }

    if (filters.rating > 0) {
      results = results.filter(trip => trip.rating >= filters.rating);
    }

    switch(filters.sortBy) {
      case 'price-low': results.sort((a, b) => a.TripPrice - b.TripPrice); break;
      case 'price-high': results.sort((a, b) => b.TripPrice - a.TripPrice); break;
      case 'rating': results.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }

    setFilteredTrips(results);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters, trips, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="mt-20 top-0 z-10 bg-white p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full md:w-1/3">
              <input 
                type="text" 
                placeholder="Search destinations..." 
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex flex-wrap gap-2 w-full md:w-2/3 justify-end">
              <div className="relative inline-block w-64">
                <select
                  className="cursor-pointer block w-full px-4 py-2 pr-10 rounded-full border border-gray-300 bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 appearance-none"
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">▼</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4 px-4">
            <button
              className="w-full flex justify-between items-center px-4 py-2 bg-orange-500 text-white rounded-xl shadow transition-all"
              onClick={() => setShowFilters(!showFilters)}
            >
              <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
              {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>

          {/* Filters Section */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden md:block ${showFilters ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} md:max-h-full md:opacity-100 w-full md:w-1/4`}>
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="font-semibold text-xl mb-6">Filters</h2>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
                <div className="flex items-center justify-between">
                  <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm">${filters.priceRange[0]}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm">${filters.priceRange[1]}</span>
                </div>
                <Slider
                  range
                  min={0}
                  max={1000}
                  step={50}
                  value={filters.priceRange}
                  onChange={(value) => handleFilterChange('priceRange', value)}
                  handleStyle={{
                    borderColor: '#f97316',
                    backgroundColor: '#f97316',
                    opacity: 1,
                  }}
                  trackStyle={{
                    backgroundColor: '#f97316',
                  }}
                />
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">Star Rating</h3>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className={`cursor-pointer w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
                        filters.rating >= star ? 'bg-orange-400 text-white' : 'bg-gray-100'
                      }`}
                      onClick={() => handleFilterChange('rating', star)}
                    >
                      {star}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Amenities</h3>
                <div className="space-y-2">
                  {allAmenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`amenity-${index}`}
                        checked={filters.amenities.includes(amenity)}
                        onChange={() => handleAmenityToggle(amenity)}
                        className="w-4 h-4 accent-orange-400 rounded cursor-pointer"
                      />
                      <label htmlFor={`amenity-${index}`} className="ml-2 text-sm text-gray-700 flex items-center gap-1 hover:text-orange-500 cursor-pointer">
                        {facilityIcons[amenity]} {amenity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="mt-5 font-medium text-gray-700 mb-3">Category</h3>
                <div className="space-y-2">
                  {["Resorts", "Adventure", "Healing Places", "Cultural", "Religious Places", "Natural Places"].map((category, index) => (
                    <div key={index} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`category-${index}`}
                        checked={filters.categories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="w-4 h-4 accent-orange-400 rounded cursor-pointer"
                      />
                      <label htmlFor={`category-${index}`} className="ml-2 text-sm text-gray-700 hover:text-orange-500 cursor-pointer">{category}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Places */}
              <div>
                <h3 className="mt-5 font-semibold text-gray-800 mb-3 text-lg">Places</h3>
                <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-2">
                  {[
                    "Amman", "Aqaba", "Karak", "Dead Sea", "Ajloun", "Ajloun Castel",
                    "Aqaba Castel", "Petra", "Qaser Azraq", "Qaser Amra",
                    "Wadi Mujib", "Wadi Rum"
                  ].map((place, index) => (
                    <label key={index} htmlFor={`place-${index}`} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-orange-500 transition">
                      <input 
                        type="checkbox" 
                        id={`place-${index}`}
                        checked={filters.places.includes(place)} 
                        onChange={() => handlePlaceToggle(place)}
                        className="accent-orange-400 w-4 h-4 cursor-pointer"
                      />
                      {place}
                    </label>
                  ))}
                </div>
              </div>



              {/* Adults */}
              <div>
                <h3 className="mt-5 font-medium text-gray-700 mb-3">Adults</h3>
                <div className="space-y-2">
                  {["1-3 People", "4-6 People", "7-9 People", "10+ People"].map((range, index) => (
                    <div key={index} className="flex items-center">
                      <input 
                        type="radio"
                        id={`adults-${index}`}
                        checked={filters.adults === (index === 0 ? 3 : index === 1 ? 6 : index === 2 ? 9 : 10)}
                        onChange={() => handleAdultsToggle(range)}
                        className="w-4 h-4 accent-orange-400 rounded cursor-pointer"
                      />
                      <label htmlFor={`adults-${index}`} className="ml-2 text-sm text-gray-700 hover:text-orange-500 cursor-pointer">{range}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                className=" cursor-pointer w-full mt-8 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition duration-200"
                onClick={() => {
                  setFilters({
                    priceRange: [0, 1000],
                    amenities: [],
                    rating: 0,
                    sortBy: 'recommended',
                    categories: [],
                    places: [],
                    adults: 0
                  });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}

              >
                Clear All Filters
              </button>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="w-full md:w-3/4">
            <div className="mb-6">
              <h1 className="font-playfair text-3xl">Trip Search Results</h1>
              <p className="text-gray-500 mt-2">
                Found {filteredTrips.length} trips matching your criteria
              </p>
            </div>
            
            {currentTrips.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
                <h3 className="text-xl font-medium mb-2">No trips found</h3>
                <p className="text-gray-500">Try adjusting your filters to see more results</p>
              </div>
            ) : (
              <div className="space-y-6">
                {currentTrips.map((trip, index) => (
                  <div 
                    key={trip._id || index} 
                    className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="md:w-2/5 relative">
                        <img 
                          src={trip.images[0]} 
                          alt={trip.name} 
                          className="w-full h-64 md:h-full object-cover cursor-pointer"
                          onClick={() => {navigate(`/trips/${trip._id}`); window.scrollTo({ top: 0, behavior: 'smooth' })}}
                        />
                        <div className="absolute top-4 left-4 bg-orange-400 text-white px-3 py-1 rounded-full text-sm">
                          ${trip.TripPrice || '99'}/night
                        </div>
                        <div className="bg-[#49B9FF]/50 absolute top-4 left-4 md:left-auto md:right-4 text-white px-3 py-1 rounded-full text-sm max-w-[90%] truncate">
                          {trip.catogery}
                        </div>
                      </div>
                      
                      {/* Details */}
                      <div className="p-6 md:w-3/5">
                        <div className="flex justify-between items-start">
                          <div>
                            <h2 
                              className="text-xl font-semibold mb-1 hover:text-orange-400 cursor-pointer"
                              onClick={() => {navigate(`/trips/${trip._id}`); window.scrollTo({ top: 0, behavior: 'smooth' })}}
                            >
                              {trip.name}
                            </h2>
                            <p className="text-gray-500">{trip.city}</p>
                          </div>
                          <div className="flex items-center bg-indigo-50 px-3 py-1 rounded-lg">
                            {trip.rating || 4.5} <StarRating value={trip.rating || 4.5} />
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-1 text-gray-500 mt-3 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{trip.Compani.address}</span>
                        </div>
                        
                        {/* Amenities */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {trip.amenities.slice(0, 4).map((item, idx) => (
                            <div key={idx} className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50">
                              {facilityIcons[item]}
                              <p className="text-xs">{item}</p>
                            </div>
                          ))}
                          {trip.amenities.length > 4 && (
                            <div className="px-2 py-1 rounded-md bg-gray-50">
                              <p className="text-xs">+{trip.amenities.length - 4} more</p>
                            </div>
                          )}
                        </div>
                        
                        {/* Trip highlights */}
                        <p className="text-gray-600 mt-4 line-clamp-2">
                          {trip.description || "Enjoy this amazing trip with beautiful scenery and luxurious accommodations."}
                        </p>
                        
                        {/* CTA */}
                        <div className="mt-4 flex flex-wrap gap-3">
                          <button 
                            className="cursor-pointer px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors"
                            onClick={() => {navigate(`/trips/${trip._id}`); window.scrollTo({ top: 0, behavior: 'smooth' })}}
                          >
                            View Details
                          </button>
                          <button className="cursor-pointer px-6 py-2 border border-orange-400 text-orange-400 rounded-lg hover:bg-indigo-50 transition-colors">
                            Quick Book
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {filteredTrips.length > 0 && (
              <div className="flex justify-center mt-10">
                <div className="flex items-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => {
                      setCurrentPage(prev => Math.max(prev - 1, 1));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}

                    className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                      currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100"
                    }`}
                  >
                    <ChevronLeft size={16} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                    <button
                      key={num}
                      onClick={() => setCurrentPage(num)}
                      className={` cursor-pointer w-10 h-10 flex items-center justify-center rounded-full ${
                        currentPage === num
                          ? "bg-indigo-600 text-white"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {num}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className={` cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border ${
                      currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100"
                    }`}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTrips;
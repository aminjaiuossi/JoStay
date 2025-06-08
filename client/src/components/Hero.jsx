import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets, cities } from '../assets/assets'

const Hero = () => {
  const navigate = useNavigate()
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    adults: 1
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create URL parameters based on search data
    const params = new URLSearchParams()
    
    // If destination is provided, add it as place parameter
    if (searchData.destination.trim()) {
      params.append('place', searchData.destination.toLowerCase().replace(/\s+/g, '-'))
    }
    
    // If check-in date is provided
    if (searchData.checkIn) {
      params.append('checkIn', searchData.checkIn)
    }
    
    // If check-out date is provided
    if (searchData.checkOut) {
      params.append('checkOut', searchData.checkOut)
    }
    
    // If adults count is provided and different from default
    if (searchData.adults && searchData.adults > 0) {
      params.append('adults', searchData.adults)
    }
    
    // Navigate to AllTrips page with parameters
    const queryString = params.toString()
    navigate(`/trips${queryString ? `?${queryString}` : ''}`)
  }

  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/cover.png")] bg-no-repeat bg-cover bg-center h-screen'>
         <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>The Ultimate Trips Experience</p>
         <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>discover your perfect gateway destination</h1>
         <p className='max-w-130 mt-2 text-sm md:text-base'>Discover unforgettable trips and travel experiences with us—explore new destinations, cultures, and adventures tailored to your dreams.</p>

         <form onSubmit={handleSubmit} className='bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start mt-8 gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className='h-4' />
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input 
                    list='destinations' 
                    id="destinationInput" 
                    name="destination"
                    type="text" 
                    className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" 
                    placeholder="Type here"
                    value={searchData.destination}
                    onChange={handleInputChange}
                />
                <datalist id='destinations'>
                  {cities.map((city, index)=>(
                    <option value={city} key={index} />
                  ))}
                </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input 
                    id="checkIn" 
                    name="checkIn"
                    type="date" 
                    className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                    value={searchData.checkIn}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input 
                    id="checkOut" 
                    name="checkOut"
                    type="date" 
                    className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                    value={searchData.checkOut}
                    onChange={handleInputChange}
                />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Adults</label>
                <input 
                    min={1} 
                    max={10} 
                    id="guests" 
                    name="adults"
                    type="number" 
                    className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16" 
                    placeholder="1"
                    value={searchData.adults}
                    onChange={handleInputChange}
                />
            </div>

            <button 
                type="submit"
                className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1 hover:bg-gray-800 transition-colors' 
            >
                <img src={assets.searchIcon} alt="searchIcon" className='h-7'/>
                <span>Search</span>
            </button>
        </form>
    </div>
  )
}

export default Hero
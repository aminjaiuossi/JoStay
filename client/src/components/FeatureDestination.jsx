import React from 'react'
import { tripsDummyData } from '../assets/assets'
import TripCard from './TripCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeatureDestination = () => {

  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

      <Title title='Featured Destination' subtitle='Discover our handpicked selection 
      of exceptional properties around the world, offfering unparalleled 
      luxury and unforgettable experiences'/> 

      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {tripsDummyData.slice(0,4).map((trip,index)=>(
            <TripCard key={trip._id} trip={trip} index={index} />
        ))}
      </div>

      <button onClick={()=>{navigate('/trips'); ({ top: 0, behavior: 'smooth' })}} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 
      rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
        View All Destinations
      </button>
    </div>
  )
}

export default FeatureDestination
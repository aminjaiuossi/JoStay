import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, tripCommonData, tripsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'
import { useUser, useClerk, UserButton } from "@clerk/clerk-react"

// Simulated API service for comments (replace with actual API calls)
const commentsService = {
  // Get comments for a trip
  getComments: (tripId) => {
    const storedComments = localStorage.getItem(`tripComments_${tripId}`)
    return storedComments ? JSON.parse(storedComments) : []
  },
  
  // Add a new comment
  addComment: (tripId, comment) => {
    const comments = commentsService.getComments(tripId)
    const updatedComments = [comment, ...comments]
    localStorage.setItem(`tripComments_${tripId}`, JSON.stringify(updatedComments))
    return updatedComments
  }
}

// Trip Flow Data
const tripFlowSteps = [
  
  {
    id: 3,
    phase: "Day 1",
    title: "Arrival & Welcome",
    description: "Warm welcome with airport pickup and orientation session",
    icon: "✈️",
    details: [
      "Airport pickup service",
      "Welcome drink & orientation",
      "Meet your guide & group",
      "Hotel check-in assistance"
    ],
    timeline: "Day 1 - Morning"
  },
  {
    id: 4,
    phase: "Day 1-2",
    title: "City Exploration",
    description: "Discover the city's highlights with guided tours and local insights",
    icon: "🏛️",
    details: [
      "Historical landmarks tour",
      "Local cuisine tasting",
      "Cultural immersion activities",
      "Free time for personal exploration"
    ],
    timeline: "Day 1-2"
  },
  {
    id: 5,
    phase: "Day 3-5",
    title: "Adventure Activities",
    description: "Engage in thrilling activities and unique experiences",
    icon: "🏔️",
    details: [
      "Outdoor adventures & sports",
      "Nature excursions",
      "Photography workshops",
      "Local community visits"
    ],
    timeline: "Day 3-5"
  },
  {
    id: 6,
    phase: "Day 6-7",
    title: "Relaxation & Leisure",
    description: "Unwind with spa treatments and leisure activities",
    icon: "🧘",
    details: [
      "Spa & wellness sessions",
      "Beach or pool relaxation",
      "Shopping & souvenir hunting",
      "Farewell group dinner"
    ],
    timeline: "Day 6-7"
  },
  {
    id: 7,
    phase: "Final Day",
    title: "Departure & Memories",
    description: "Smooth departure with lasting memories and connections",
    icon: "🎁",
    details: [
      "Hotel check-out assistance",
      "Airport transfer service",
      "Digital photo album sharing",
      "Trip feedback & reviews"
    ],
    timeline: "Final Day"
  }
]

// New Trip Flow Component
const TripFlowSection = () => {
  const [activeStep, setActiveStep] = useState(null)

  return (
    <div className="mt-20 bg-gradient-to-br via-orange-50 rounded-3xl p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
          Your Journey Awaits
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From the moment you book to your safe return home, every detail is carefully planned 
          to create an unforgettable experience
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Central Timeline Line - Hidden on mobile */}
        <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b  via-orange-400  hidden md:block"></div>

        {/* Flow Steps */}
        <div className="space-y-8 md:space-y-12">
          {tripFlowSteps.map((step, index) => (
            <div
              key={step.id}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Step Card */}
              <div 
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}
              >
                <div 
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 cursor-pointer transform hover:-translate-y-1 ${
                    activeStep === step.id ? 'ring-2 ring-orange-400 shadow-xl' : ''
                  }`}
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{step.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                          {step.phase}
                        </span>
                        <span className="text-sm text-gray-500">{step.timeline}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      {/* Expandable Details */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        activeStep === step.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="border-t border-gray-100 pt-4">
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <button className="text-orange-500 hover:text-orange-600 text-sm font-medium mt-2">
                        {activeStep === step.id ? 'Show Less' : 'Learn More'} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Dot - Hidden on mobile */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-orange-400 rounded-full shadow-md z-10 hidden md:flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>

              {/* Empty Space for Alternating Layout */}
              <div className="w-full md:w-5/12 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to Begin Your Adventure?
        </h3>
        <p className="text-gray-600 mb-6">
          Join thousands of satisfied travelers who have experienced our carefully crafted journeys
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            Book This Trip
          </button>
          <button className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-medium transition-all duration-300">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  )
}

// New Components for Ratings and Comments
const CommentForm = ({ onAddComment }) => {
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const { isSignedIn, user } = useUser()
  const { openSignIn } = useClerk()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment.trim() && isSignedIn && user) {
      onAddComment({
        rating,
        comment,
        userId: user.id,
        username: user.fullName || user.username || user.primaryEmailAddress?.emailAddress?.split('@')[0] || 'User',
        date: new Date().toISOString(),
        avatar: user.imageUrl || assets.userAvatar || 'https://via.placeholder.com/40'
      })
      setComment('')
      setRating(5)
    }
  }

  if (!isSignedIn) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg text-center">
        <p className="text-lg font-medium mb-2">Want to share your experience?</p>
        <p className="text-gray-500 mb-4">Sign in to leave a rating and comment.</p>
        <button 
          onClick={() => {
                    openSignIn();
                  }} 
          className="bg-orange-400 hover:bg-primary-dull text-white py-2 px-6 rounded-md transition-all cursor-pointer">
          Sign In
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <h3 className="text-lg font-medium mb-3">Leave Your Review</h3>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Your Rating</label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="text-2xl focus:outline-none"
            >
              <span className={star <= rating ? "text-yellow-400 cursor-pointer" : "text-gray-300"}>★</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-700 mb-2">
          Your Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          rows="4"
          placeholder="Share your experience about this trip..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-orange-400 hover:bg-primary-dull text-white py-2 px-6 rounded-md transition-all cursor-pointer"
      >
        Submit Review
      </button>
    </form>
  )
}

const CommentItem = ({ comment }) => {
  return (
    <div className="border-b border-gray-200 py-6 last:border-0">
      <div className="flex items-start">
        <img
          src={comment.avatar}
          alt={comment.username}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-medium">{comment.username}</h4>
            <span className="text-gray-500 text-sm">
              {new Date(comment.date).toLocaleDateString()}
            </span>
          </div>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-sm">
                <span className={i < comment.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
              </span>
            ))}
          </div>
          <p className="text-gray-700">{comment.comment}</p>
        </div>
      </div>
    </div>
  )
}

const TripDetails = () => {
    const {id} = useParams()
    const [trip, setTrip] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    // New state for comments
    const [comments, setComments] = useState([])
    const { isSignedIn, user } = useUser()

    useEffect(() => {
       const trip = tripsDummyData.find(trip => trip._id === id)
       if (trip) {
         setTrip(trip)
         setMainImage(trip.images[0])
         
         // Check for stored comments
         const storedComments = commentsService.getComments(id)
         setComments(storedComments)
         
         // No initial dummy comments - start with an empty array if nothing stored
         if (storedComments.length === 0) {
           localStorage.setItem(`tripComments_${id}`, JSON.stringify([]))
         }
       }
    }, [id])

    const handleAddComment = (newComment) => {
      // Update comments in localStorage and state
      const updatedComments = commentsService.addComment(id, newComment)
      setComments(updatedComments)
      
      // In a real app, you would also send this to your backend API
      // api.addComment(id, newComment).then(response => {
      //   // Handle response if needed
      // })
    }

    // Calculate average rating
    const averageRating = comments.length 
      ? (comments.reduce((sum, comment) => sum + comment.rating, 0) / comments.length).toFixed(1)
      : 0

  return trip && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-23'>
       {/* Trip Details */}
       <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>{tripsDummyData[0].name} <span className='font-inter text-sm'>({trip.catogery})</span></h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
       </div>
       {/* Trip Rating */}
       <div className='flex items-center gap-1 mt-2'>
        
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">
                          <span className={i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"}>★</span>
                        </span>
                      ))}
                    
        <p className='ml-2'>{comments.length}+ reviews</p>
       </div>
       {/* Trip Address */}
       <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt="location-Icon" />
        <span>{trip.Compani.address}</span>
       </div>
       {/* Trip Images */}
       <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
            <img src={mainImage} alt="trip image" 
            className='w-full rounded-xl shadow-lg object-cover'/>
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
           {trip?.images.length > 1 && trip.images.map((image, index)=>(
            <img onClick={()=> setMainImage(image)}
            key={index} src={image} alt="trip image" 
            className={`w-full rounded-xl shadow-md object-cover
            cursor-pointer ${mainImage === image && `outline-3 
          outline-orange-500`}`}/>
           ))}
        </div>
       </div>
       {/* Trip Highlights */}
       <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
            <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
            <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                {trip.amenities.map((item, index)=>(
                    <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                        <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                        <p className='text-xs'>{item}</p>
                    </div>
                ))}
            </div>
        </div>
        {/* Trip Price */}
        <p className='text-2xl font-medium'>${trip.TripPrice}</p>
       </div>
       {/* CheckIn CheckOut Form */}
       <div className='bg-white shadow-2xl p-8 rounded-2xl mx-auto mb-16 max-w-6xl border border-gray-100'>
        <div className='flex flex-col md:flex-row items-start md:items-end justify-between gap-6'>
          <div className='flex flex-col flex-wrap md:flex-row items-start md:items-end gap-6 flex-1'>
            <div className='flex flex-col'>
              <label className='font-semibold text-gray-700 mb-2'>Check-In</label>
              <input type="date" 
              className='w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none focus:border-orange-400 transition-all duration-300'/>
            </div>

            <div className='flex flex-col'>
              <label className='font-semibold text-gray-700 mb-2'>Check-Out</label>
              <input type="date"
              className='w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none focus:border-orange-400 transition-all duration-300'/>
            </div>

            <div className='flex flex-col'>
              <label className='font-semibold text-gray-700 mb-2'>Capacity</label>
              <p
              className='w-20 rounded-lg border-2 border-gray-200 px-4 py-3 outline-none focus:border-orange-400 transition-all duration-300'>{trip.adults}</p>
            </div>
          </div>

          <button className='bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 text-white rounded-xl px-8 py-4 text-base font-semibold cursor-pointer shadow-lg'>
            Check Availability
          </button>
        </div>
       </div>

       {/* Common Specifications */}
       <div className='mt-25 space-y-4'>
          {tripCommonData.map((spec, index)=>(
            <div key={spec.icon} className='flex items-start gap-2'>
              <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
              <div>
                <p className='text-base'>{spec.title}</p>
                <p className='text-gray-500'>{spec.description}</p>
              </div>
            </div>
          ))}
       </div>

        {/* Hosted by */}
        <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16 mt-15'>
            <div className='flex gap-6 items-center'>
              <img src={trip.Compani.owner.image} alt="Host" className='h-20 w-20 
              md:h-24 md:w-24 rounded-full border-4 border-orange-100'/>
            <div>
              <p className='text-xl md:text-2xl font-semibold'>Hosted By {trip.Compani.name}</p>
              <div className='flex items-center mt-2'>
                <StarRating />
                <p className='ml-2 text-gray-600'>200+ reviews</p>
              </div>
            </div>
        </div>
      </div>  

      {/* NEW SECTION: Ratings and Comments */}
      <div className="mt-20">
        
          {/* Trip Flow Section */}
          <TripFlowSection/>
          
          {/* Comment Form */}
          <CommentForm onAddComment={handleAddComment} />
          
          {/* Comments List */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">
              {comments.length > 0 ? 
                `${comments.length} ${comments.length === 1 ? "Review" : "Reviews"}` : 
                "No reviews yet"}
            </h3>
            {comments.length > 0 ? (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                {comments.map((comment, index) => (
                  <CommentItem key={index} comment={comment} />
                ))}
              </div>
            ) : (
              <div className="text-gray-500 text-center py-16 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50">
                <div className="text-6xl mb-4">💭</div>
                <p className="text-xl">No reviews have been submitted yet.</p>
                <p className="mt-2 text-gray-600">Sign in to be the first to leave a review!</p>
              </div>
            )}
          </div>

      </div>
  </div>
  )
}
export default TripDetails
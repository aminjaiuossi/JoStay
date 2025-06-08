import React, { useState } from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import { cities, assets, tripsDummyData } from '../../assets/assets'

// Your actual trip data structure


const Title = ({ align, font, title, subtitle }) => (
  <div className={`text-${align}`}>
    <h1 className={`text-2xl font-bold ${font === 'outfit' ? 'font-sans' : ''}`}>{title}</h1>
    <p className="text-gray-600 mt-2">{subtitle}</p>
  </div>
)

const ListTrips = () => {
  const [trips, setTrips] = useState(tripsDummyData)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [tripToDelete, setTripToDelete] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingTrip, setEditingTrip] = useState(null)
  const [editFormData, setEditFormData] = useState({
    name: '',
    catogery: '',
    TripPrice: '',
    amenities: [],
    description: '',
    city: '',
    address: '',
    adults: '',
    isAvailable: false
  })

  const handleEdit = (trip) => {
    setEditingTrip(trip)
    setEditFormData({
      name: trip.name,
      catogery: trip.catogery,
      TripPrice: trip.TripPrice,
      amenities: trip.amenities,
      description: trip.description,
      city: trip.city,
      address: trip.address,
      adults: trip.adults,
      isAvailable: trip.isAvailable
    })
    setShowEditModal(true)
  }

  const handleDeleteClick = (trip) => {
    setTripToDelete(trip)
    setShowDeleteModal(true)
  }

  const confirmDelete = () => {
    if (tripToDelete) {
      // Fixed: Use _id instead of id for filtering
      setTrips(trips.filter(trip => trip._id !== tripToDelete._id))
      setShowDeleteModal(false)
      setTripToDelete(null)
    }
  }

  const cancelDelete = () => {
    setShowDeleteModal(false)
    setTripToDelete(null)
  }

  const toggleAvailability = (tripId) => {
    setTrips(trips.map(trip => 
      trip._id === tripId 
        ? { ...trip, isAvailable: !trip.isAvailable }
        : trip
    ))
    
    // Optional: Show feedback to user
    const tripName = trips.find(trip => trip._id === tripId)?.name
    const newStatus = !trips.find(trip => trip._id === tripId)?.isAvailable
    console.log(`Trip "${tripName}" ${newStatus ? 'activated' : 'deactivated'}`)
  }

  const handleEditSubmit = () => {
    // Validate form
    if (!editFormData.name.trim() || !editFormData.TripPrice || !editFormData.catogery || editFormData.amenities.length === 0) {
      alert('Please fill in all required fields')
      return
    }

    // Update the trip in state
    setTrips(trips.map(trip => 
      trip._id === editingTrip._id 
        ? { 
            ...trip, 
            name: editFormData.name.trim(),
            catogery: editFormData.catogery,
            TripPrice: Number(editFormData.TripPrice),
            amenities: editFormData.amenities,
            description: editFormData.description.trim(),
            city: editFormData.city,
            address: editFormData.address.trim(),
            adults: Number(editFormData.adults),
            isAvailable: editFormData.isAvailable
          }
        : trip
    ))

    // Close modal and reset form
    setShowEditModal(false)
    setEditingTrip(null)
    setEditFormData({
      name: '',
      catogery: '',
      TripPrice: '',
      amenities: [],
      description: '',
      city: '',
      address: '',
      adults: '',
      isAvailable: false
    })
  }

  const handleEditCancel = () => {
    setShowEditModal(false)
    setEditingTrip(null)
    setEditFormData({
      name: '',
      catogery: '',
      TripPrice: '',
      amenities: [],
      description: '',
      city: '',
      address: '',
      adults: '',
      isAvailable: false
    })
  }

  const handleAmenityChange = (amenity) => {
    setEditFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }))
  }

  const availableAmenities = ['Wi-Fi', 'Breakfast', 'Pool', 'Mountain View']
  
  const categories = [
    "Resorts & Recreation",
    "Adventure", 
    "Healing Places",
    "Cultural",
    "Religious Places",
    "Natural Places"
  ]



  return (
    <div className="p-6">
      <Title 
        align='left' 
        font='outfit' 
        title='Trip Listings' 
        subtitle='View, edit, or manage all listed trips. Keep the information up-to-date to provide the best experience for users.'
      />

      <p className='text-gray-500 mt-8'>All Trips</p>
      <div className='w-full max-w-4xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Category</th>
              <th className='py-3 px-4 text-gray-800 font-medium max-md:hidden'>City</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Price $</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Available</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Actions</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {trips.map((item) => (
              <tr key={item._id}>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                  {item.name}
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                  {item.catogery}
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-md:hidden'>
                  {item.city}
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                  $ {item.TripPrice}
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input 
                      type="checkbox" 
                      className='sr-only peer' 
                      checked={item.isAvailable}
                      onChange={() => toggleAvailability(item._id)}
                    />
                    <div className='w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-amber-500 transition-colors duration-200 relative'>
                      <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                    </div>
                  </label>
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                  <div className='flex justify-center gap-2'>
                    <button
                      onClick={() => handleEdit(item)}
                      className='p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200'
                      title="Edit Trip"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(item)}
                      className='p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200'
                      title="Delete Trip"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Delete Trip
            </h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete "{tripToDelete?.name}"? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Trip Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Edit Trip: {editingTrip?.name}
            </h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Trip Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Trip Name *
                  </label>
                  <input
                    type="text"
                    value={editFormData.name}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    value={editFormData.catogery}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, catogery: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <select
                    value={editFormData.city}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, city: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select city</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* Trip Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price ($) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={editFormData.TripPrice}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, TripPrice: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {/* Adults */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Capacity
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={editFormData.adults}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, adults: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  value={editFormData.address}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, address: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={editFormData.description}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows="3"
                />
              </div>

              {/* Amenities */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amenities *
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                  {availableAmenities.map(amenity => (
                    <label key={amenity} className="flex items-center space-x-2 text-sm">
                      <input
                        type="checkbox"
                        checked={editFormData.amenities.includes(amenity)}
                        onChange={() => handleAmenityChange(amenity)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span>{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className='border-b border-gray-300'/>

              {/* Availability */}
              <div>
                <label className="flex items-center space-x-2 mt-10">
                  <input
                    type="checkbox"
                    checked={editFormData.isAvailable}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, isAvailable: e.target.checked }))}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Available for booking</span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end pt-4">
                <button
                  type="button"
                  onClick={handleEditCancel}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleEditSubmit}
                  className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ListTrips
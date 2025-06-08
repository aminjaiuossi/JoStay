import React, { useEffect, useRef, useState } from 'react'
import Title from '../../components/Title'
import Quill from 'quill';
import { cities, assets, tripsDummyData } from '../../assets/assets'


const AddTrips = () => {

    const quillRef = useRef(null);
    const editorRef = useRef(null);

    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
    })


    const [inputs, setIputes] = useState({
        catogery:'',   
        name:'',
        description:'',
        tripType:'',
        tripPrice:null,
        discount:null,
        adults:null,
        aminities: {
            'Wi-Fi': false, 
            'Breakfast': false,
            'Pool': false,
            'Spa': false,
        }
    })

    useEffect(()=>{
    if(!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme:'snow',
      });
    }
  }, [])

  return (
    <div>
        <form>
            <Title align='left' font='outfit' title='Add Trip' subtitle='Fill in the details carefully and accurate trip details, pricing, and amenities, to 
            enchance the user booking experience.'/>
                <div>
                <p className='mt-10 text-gray-800'>Trip Name</p>
                <input
                    type="text"
                    placeholder='Enter trip name'
                    className='border border-gray-800 mt-1 rounded p-2 w-full max-w-md'
                    value={inputs.name}
                    onChange={e => setIputes({ ...inputs, name: e.target.value })}
                    required
                />
                </div>

                <div className='flex flex-col gap-1 mt-5  w-full max-w-md'>
                    <p>Description</p>
                    <div ref={editorRef}
                    value={inputs.description}
                    onChange={e => setIputes({ ...inputs, description: e.target.value })}
                    ></div>
                </div>


            {/* Upload Images */}
            <p className='text-gray-800 mt-4'>Images</p>
            <div className='grid grid-cols-2 sm:flex gap-2 my-2 flex-wrap'>
                {Object.keys(images).map((key)=>(
                    <label htmlFor={`tripImage${key}`} key={key}>
                    <img className='max-h-13 cursor-pointer opacity-80'
                    src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="" />
                    <input type="file" accept='image/*' id={`tripImage${key}`} hidden
                    onChange={e=> setImages({...images, [key]: e.target.files[0]})}
                    required/>
                </label>
            ))}
            </div>
            <p className='text-gray-800 mt-4'>Category</p>
                <label className="block text-gray-800">
                <select
                    className="border border-gray-800 mt-1 rounded p-2 w-full max-w-md cursor-pointer"
                    value={inputs.catogery}
                    onChange={e=> setIputes({...inputs, catogery: e.target.value})}
                    required
                >
                    <option value="" disabled>Select category…</option>
                    <option value="Resorts & Recreation">Resorts & Recreation</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Healing Places">Healing Places</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Religious Places">Religious Places</option>
                    <option value="Natural Places">Natural Places</option>
                </select>
                </label>


                <p className='text-gray-800 mt-4'>City</p>
                <label className="block text-gray-800">
                <select
                        className="border border-gray-800 mt-1 rounded p-2 max-w-md cursor-pointer"
                        required>
                    <option value="">Select city</option>
                        {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                        ))}
                </select>
                </label>

                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-end gap-6 flex-1 mt-5'>
                    <div>
                        <p className='mt-4 text-gray-800'>
                            Price <span className='text-sm'>$</span>
                        </p>
                        <input type="number"  placeholder='0' className='border border-gray-800 mt-1 rounded p-2 w-24' 
                        value={inputs.tripPrice}
                        onChange={e=> setIputes({...inputs, tripPrice: e.target.value})}
                        required/>
                        
                    </div>

                    <div>
                        <p>Discount %</p>
                        <input type="number"  placeholder='0' min={0} max={100} className='border border-gray-800 mt-1 rounded p-2 w-24' 
                        value={inputs.discount}
                        onChange={e=> setIputes({...inputs, discount: e.target.value})}/>
                    </div>

                    
                </div>
                <div className='mt-7'>
                        <p className='mt-4 text-gray-800'>Capacity</p>
                        <input type="number"  placeholder='0' min={0} max={100} className='border border-gray-800 mt-1 rounded p-2 w-24' 
                        value={inputs.adults}
                        onChange={e=> setIputes({...inputs, adults: e.target.value})} required/>
                </div>

            <div className='flex flex-col flex-wrap md:flex-row items-start md:items-end gap-6 flex-1 mt-5'>
                <div className='flex flex-col'>
                <label className=' text-gray-700 mb-2'>Check-In</label>
                <input type="date"  required
                className='w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none focus:border-orange-400 transition-all duration-300'/>
                </div>

                <div className='flex flex-col'>
                <label className=' text-gray-700 mb-2'>Check-Out</label>
                <input type="date" required
                className='w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none focus:border-orange-400 transition-all duration-300'/>
                </div>
            </div>

            <p className='text-gray-800 mt-4'>Aminities</p>
            <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
                {Object.keys(inputs.aminities).map((amenity, index)=>(
                    <div key={index}>
                        <input className='cursor-pointer accent-orange-500' type="checkbox" id={`aminities${index+1}`} checked={inputs.aminities[amenity]} onChange={()=> setIputes({...inputs,aminities :{...inputs.aminities, [amenity] : !inputs.aminities[amenity]}})}/>
                        <label htmlFor={`aminities${index+1}`}> {amenity}</label>
                    </div>
                ))}
            </div>
            <button className='bg-orange-400 text-white px-8 py-2 rounded mt-8 cursor-pointer'>Add Trip</button>
        </form>
    </div>
  )

}

export default AddTrips
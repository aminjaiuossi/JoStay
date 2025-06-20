import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const sidebarLinks = [
        {name: "Dashboard", path: "/owner", icon: assets.dashboardIcon},
        {name: "Add Trip", path: "/owner/add-trip", icon: assets.addIcon},
        {name: "List Trip", path: "/owner/list-trip", icon: assets.listIcon}
    ]

  return (
    <div className='md:w-64 w-16 border-r h-200 text-base border-gray-300 pt-4 
    flex flex-col transition-all duration-300'>
        {sidebarLinks.map((item, index)=>(
            <NavLink to={item.path} key={index} end='/owner' className={({isActive}) =>`flex items-center py-2 px-4 md:px-8 gap-3 ${isActive ? "border-r-4 md:border-r-[6px] bg-orange-400/10 border-orange-500 text-orange-500" : "hover:bg-gray-100/90 border-white text-gray-700"}`}>
                <img src={item.icon} alt={item.icon} className='fill-orange-400 min-h-6 min-w-6' />
                <p className='md:block hidden text-center'>{item.name}</p>
            </NavLink>
        ))}
    </div>
  )
}

export default Sidebar
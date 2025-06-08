import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllTrips from './pages/AllTrips';
import TripDetails from './pages/TripDetails';
import MyBookings from './pages/MyBookings';
import CompaniReg from './components/CompaniReg';
import Layout from './pages/Compani/Layout';
import Dashboard from './pages/Compani/Dashboard';
import AddTrips from './pages/Compani/AddTrips';
import ListTrips from './pages/Compani/ListTrips';
import About from './pages/About';
import AdminLayout from './pages/Admin/AdminLayout';
import "quill/dist/quill.snow.css";




const App=() => {

  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");
  const isAdminPath = location.pathname.includes("admin");
  
  // Hide both Navbar and Footer for owner and admin paths
  const shouldShowNavbarFooter = !isOwnerPath && !isAdminPath;

  return (
    <div>
      {shouldShowNavbarFooter && <Navbar />}

      
      {false &&<CompaniReg />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/trips' element={<AllTrips/>} />
          <Route path='/trips/:id' element={<TripDetails/>} />
          <Route path='/my-bookings' element={<MyBookings/>} />
          <Route path='/about' element={<About/>} />


          <Route path='/admin' element={<AdminLayout/>} />


          <Route path='/owner' element={<Layout/>}>
            <Route index element={<Dashboard/>} />
            <Route path="add-trip" element={<AddTrips/>} />
            <Route path="list-trip" element={<ListTrips/>} />
          </Route>
        </Routes>
      </div>
      {shouldShowNavbarFooter && <Footer />}
    </div>
  )
}

export default App
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const CaptainHome = () => {
  const [ridePopupPanel, setridePopupPanel] = useState(false)

  const ridePopupPanelRef = React.useRef(null)

  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopupPanel])


  return (
    <div className='h-screen w-screen overflow-hidden'>
      {/* Header */}
      <div className='fixed w-full z-10 flex justify-between items-center p-5'>
        <img
          className='w-20 drop-shadow-lg'
          src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
          alt='Uber'
        />
        <div className='flex items-center gap-3'>
          <button
            onClick={() => setridePopupPanel(true)}
            className='px-4 py-2 bg-black text-white rounded-full shadow hover:shadow-md'
          >
            Rides
          </button>
          <Link
            to='/home'
            className='h-12 w-12 bg-white flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-shadow'
          >
            <i className='text-3xl font-medium ri-logout-box-r-line'></i>
          </Link>
        </div>
      </div>

      {/* Map Section */}
      <div className='h-[70%]'>
        <img
          className='h-full w-full object-cover'
          src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
          alt='Map'
        />
      </div>

      {/* Stats Section */}
      <div className='h-3/5 p-2 bg-gradient-to-b from-white to-gray-50'>
        {/* Driver Profile */}
        <div className='flex items-center gap-5 mb-5 bg-white p-1'>
          <div className='relative'>
            <img
              className='h-10 w-10 rounded-full object-cover border-4 border-gray-100'
              src='https://i.pravatar.cc/150?img=5'
              alt='Driver'
            />
            <div className='absolute bottom-0 right-0 h-5 w-5 bg-green-500 rounded-full border-2 border-white'></div>
          </div>
          <div className='flex-1'>
            <h4 className='text-2xl font-bold text-gray-900'>Test User</h4>
            <p className='text-gray-500 text-sm flex items-center gap-1'>
              <i className='ri-shield-star-line'></i>
              Captain • Active
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className='flex height-1/2 bg-gray-100 justify-between gap-5'>
          <div className='flex-1 text-center'>
            <i className='text-3xl mb-2 ri-time-line'></i>
            <h5 className='text-l font-bold text-gray-900'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>

          <div className='flex-1 text-center'>
            <i className='text-3xl mb-2 ri-coins-line'></i>
            <h5 className='text-l font-bold text-gray-900'>₹293.56</h5>
            <p className='text-sm text-gray-600'>Earned</p>
          </div>

          <div className='flex-1 text-center'>
            <i className='text-3xl mb-2 ri-route-line'></i>
            <h5 className='text-l font-bold text-gray-900'>12</h5>
            <p className='text-sm text-gray-600'>Trips</p>
          </div>
        </div>

        
      </div>
      
      {/* Rides Panel - Only shows when ridePopupPanel is true */}
      <div ref={ridePopupPanelRef} className='h-[50%] w-full bg-white fixed bottom-0 left-0 transform translate-y-full transition-transform duration-300 ease-in-out shadow-lg rounded-t-xl p-6'>
        <RidePopUp setridePopupPanel={setridePopupPanel} />
      </div>

    </div>
    
  )
}

export default CaptainHome;
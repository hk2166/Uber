import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [active, setActive] = useState('')
  const [vehiclePanel, setvehiclePanel] = useState(false)
  const [confirmRidePanel, setconfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const submitHandler = (e) => e.preventDefault()

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 1,
        padding: 24,
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 0,
        padding: 0,
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
    }
  }, [panelOpen])

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])




  return (
    <div className='h-screen relative overflow-hidden'>
      <img
        className='w-16 absolute left-5 top-5'
        src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
        alt=''
      />

      <div className='h-screen w-screen'>
        <img
          className='h-full w-full object-cover'
          src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
          alt=''
        />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5
            ref={panelCloseRef}
            className='absolute opacity-0 top-6 right-6 text-2xl cursor-pointer'
            onClick={() => {
              setPanelOpen(false)
            }}
          >
            <i className='ri-arrow-down-wide-line'></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className='line absolute h-16 w-1 top-[47%] left-10 bg-gray-900 rounded-full'></div>
            <input
              value={pickup}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setPickup(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-5 w-full'
              type='text'
              placeholder='Add a pick-up location'
            />
            <input
              value={destination}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full'
              type='text'
              placeholder='Enter your destination'
            />
          </form>
        </div>

        <div ref={panelRef} className='bg-white h-[0]'>
            <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setvehiclePanel} />
        </div>
      </div>

      {/* Vehicle Selection */}
      <div ref={vehiclePanelRef} className='fixed bottom-0 left-0 w-full translate-y-full z-10 bg-white p-4 shadow-lg pb-0'>
        <VehiclePanel setVehicleFound={setVehicleFound} setVehiclePanel={setvehiclePanel} active={active} setActive={setActive} />
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full translate-y-full z-10 bottom-0 left-0 bg-white px-3 py-6 pt-12'>
        <ConfirmedRide setConfirmRidePanel={setconfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full translate-y-full z-10 bottom-0 left-0 bg-white px-3 py-6 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound} setConfirmRidePanel={setconfirmRidePanel} />
      </div>

      <div ref={waitingForDriverRef} className='fixed w-full translate-y-full z-10 bottom-0 left-0 bg-white px-3 py-6 pt-12'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  )
}

export default Home
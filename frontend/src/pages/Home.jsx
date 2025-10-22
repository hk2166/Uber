import React from 'react'
import { useState, useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';


const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
      height:'70%',
      opacity:1,
      padding:24
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })


    }else{
      gsap.to(panelRef.current,{
      height:'0%',
      opacity:0,
      padding:0
    })
    gsap.to(panelCloseRef.current,{
      opacity:0
    })
    }
  },[panelOpen])


  return(
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

          <div className='h-screen w-screen'>
            {/* image for temporary use */}
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=""></img>
          </div>

          
          <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
            <div className='h-[30%] p-6 bg-white relative'>
              <h5 ref={panelCloseRef} className='absolute opacity-0 top-6 right-6 text-2xl' onClick={()=>{setPanelOpen(false)}}>
                <i className="ri-arrow-down-wide-line"></i>
              </h5>
                <h4 className='text-3xl font-semibold'>Find a trip</h4>
              <form onSubmit={(e)=>{submitHandler(e)}}>
                
                <div className="line absolute h-16 w-1 top-[47%] left-10 bg-gray-900 rounded-full"></div>
                <input
                value={pickup}
                onClick={()=>{
                  setPanelOpen(true)
                }}
                onChange={(e)=>{setPickup(e.target.value)}}
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-5 w-full' 
                type='text' placeholder='Add a pick-up location'></input>


                <input
                value={destination}
                onClick={()=>{
                  setPanelOpen(true)
                }}
                onChange={(e)=>{setDestination(e.target.value)}} 
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full' 
                type='text' placeholder='Enter your destination'></input>

                
              </form>
            </div>
            <div ref={panelRef} className='bg-white h-[0] '>
                <LocationSearchPanel/>
            </div>
          </div>
          <div className='fixed bottom-0 left-0 w-full z-10 bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-md p-4 shadow-lg'>
          <div className='flex items-center justify-between w-full border border-gray-200 rounded-2xl p-3 hover:shadow-md transition-all duration-300'>
            
            {/* Car Image */}
            <div className='flex items-center space-x-3'>
              <img
                className='h-14 w-20 object-cover rounded-lg'
                src='https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg'
                alt='Car type'
              />
            <div>
                <h4 className='font-semibold text-base text-gray-800 flex items-center gap-1'>
                  UberGo <span className='text-gray-600 text-sm flex items-center gap-0.5'><i className="ri-user-3-fill"></i> 4</span>
                </h4>
                <h5 className='font-medium text-sm text-green-700'>2 mins away</h5>
                <p className='text-xs text-gray-500 leading-tight'>Affordable, compact rides</p>
              </div>
            </div>

            {/* Price Section */}
            <div className='text-right'>
              <h2 className='text-2xl font-bold text-gray-900'>₹198.50</h2>
            </div>
        </div>
    </div>
  </div>
    
  )
}

export default Home;
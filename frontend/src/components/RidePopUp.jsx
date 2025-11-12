import React from 'react'
import { useNavigate } from 'react-router-dom'

const RidePopUp = ({ setridePopupPanel }) => {
  const navigate = useNavigate()
  const requests = [
    {
      id: 'r1',
      customerName: 'Hemant Yadav',
      distanceKm: 2.2,
      pickup: 'Kankar, Ahemdabad',
      dropoff: 'Kankariya Talab, Ahemdabad',
      fare: 193.56,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqAobTUqWeFe43rSdDyOWnyPS_zH5C-iHDQ&s'
    }
  ]

  return (
    <div>
      <h5
        onClick={() => setridePopupPanel(false)}
        className='text-center absolute top-0 w-full left-1/2 -translate-x-1/2 cursor-pointer'
      >
        <i className='text-3xl text-gray-400 ri-arrow-down-wide-line'></i>
      </h5>

      <h3 className='text-2xl font-semibold mb-4'>Ride Requests</h3>

      <div className='flex flex-col gap-4'>
        {requests.map((req) => (
          <div key={req.id} className='border rounded-xl p-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <img className='h-12 w-12 rounded-full object-cover border-4 border-gray-100' src={req.avatar} alt='Customer' />
                <div>
                  <h4 className='text-base font-medium'>{req.customerName}</h4>
                  <p className='text-xs text-gray-600'>{req.distanceKm} Km away</p>
                </div>
              </div>
              <div className='text-right'>
                <h5 className='text-sm font-semibold'>₹{req.fare.toFixed(2)}</h5>
              </div>
            </div>

            <div className='mt-3 grid grid-cols-2 gap-3 text-sm'>
              <div className='flex items-start gap-2'>
                <i className='ri-map-pin-user-fill mt-0.5'></i>
                <div>
                  <div className='font-medium'>Pickup</div>
                  <div className='text-gray-600'>{req.pickup}</div>
                </div>
              </div>
              <div className='flex items-start gap-2'>
                <i className='ri-map-pin-2-fill mt-0.5'></i>
                <div>
                  <div className='font-medium'>Dropoff</div>
                  <div className='text-gray-600'>{req.dropoff}</div>
                </div>
              </div>
            </div>

            <div className='flex gap-3 mt-4'>
              <button
                onClick={() => setridePopupPanel(false)}
                className='flex-1 bg-red-400 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-300 transition-colors'
              >
                Dismiss
              </button>
              <button
                onClick={() => {
                  setridePopupPanel(false)
                  navigate('/CaptainRideDetails', { state: { ride: req } })
                }}
                className='flex-1 bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-900 transition-colors'
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RidePopUp;
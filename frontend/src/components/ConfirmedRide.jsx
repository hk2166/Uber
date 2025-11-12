import React from 'react'

function ConfirmedRide({ setConfirmRidePanel, setVehicleFound }) {
  return (
    <div>
      <h5
        onClick={() => setConfirmRidePanel(false)}
        className='text-center absolute top-0 w-full left-1/2 -translate-x-1/2 cursor-pointer'
      >
        <i className='text-3xl text-gray-400 ri-arrow-down-wide-line'></i>
      </h5>

      <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

      <div className='flex flex-col items-center'>
        <img
          className='h-20 mb-4'
          src='https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg'
          alt='Vehicle'
        />
        <div className='w-full'>
          <div className='flex items-center gap-3 p-2 border-b-2'>
            <i className='text-lg ri-map-pin-user-fill'></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankar, Ahemdabad</p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-2 border-b-2'>
            <i className='text-lg ri-map-pin-2-fill'></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-2'>
            <i className='text-lg ri-currency-line'></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.56</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          setConfirmRidePanel(false)
          setVehicleFound(true)
        }}
        className='w-full mt-5 bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors'
      >
        Confirm Ride
      </button>
    </div>
  )
}

export default ConfirmedRide
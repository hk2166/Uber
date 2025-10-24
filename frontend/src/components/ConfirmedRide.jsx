import React from 'react'

function ConfirmedRide({ setConfirmRidePanel }) {
  return (
    <div>
      <h5
        onClick={() => setConfirmRidePanel(false)}
        className='text-center absolute top-0 w-full left-1/2 -translate-x-1/2 cursor-pointer'
      >
        <i className='text-3xl text-gray-400 ri-arrow-down-wide-line'></i>
      </h5>

      <div className='flex items-center justify-between mb-4'>
        <img
          className='h-12 rounded-lg'
          src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg'
          alt='Driver'
        />
        <div className='text-right'>
          <h2 className='text-lg font-bold'>Sarthak</h2>
          <p className='text-xl font-semibold -mt-1 -mb-1'>MH12 AB124</p>
          <p className='text-sm text-gray-600'>Maruti Swift Desire</p>
        </div>
      </div>

      <div className='flex items-center justify-between p-2 text-lg mb-4'>
        <p>
          Arriving in <span className='font-semibold'>2 mins</span>
        </p>
      </div>

      <div className='flex flex-col items-center'>
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
    </div>
  )
}

export default ConfirmedRide
import React from 'react'

function WaitingForDriver({ setWaitingForDriver }) {
  return (
    <div>
      <h5
        onClick={() => setWaitingForDriver(false)}
        className='p-1 text-center absolute top-0 w-full left-1/2 -translate-x-1/2 cursor-pointer'
      >
        <i className='text-3xl text-gray-400 ri-arrow-down-wide-line'></i>
      </h5>

      <div className='flex flex-col items-center'>
        <div className='w-full'>
          <div className='flex items-center gap-3 p-2 border-b-2'>
            <i className='text-lg ri-map-pin-user-fill'></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
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

      <div className='flex items-center justify-between mt-4'>
        <div className='flex items-center gap-3'>
          <img
            className='h-12 w-12 rounded-full object-cover'
            src='https://i.pravatar.cc/150?img=3'
            alt='Driver'
          />
          <div>
            <h4 className='text-lg font-medium'>Driver Name</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
            <p className='text-xs text-gray-500'>MP04 AB 1234</p>
          </div>
        </div>
        <div className='text-right'>
          <h4 className='text-lg font-semibold'>2 mins</h4>
          <p className='text-xs text-gray-500'>away</p>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver
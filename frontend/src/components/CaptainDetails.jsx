import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
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
        <div className='flex bg-gray-100 justify-between gap-5'>
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
    </div>
  )
}

export default CaptainDetails
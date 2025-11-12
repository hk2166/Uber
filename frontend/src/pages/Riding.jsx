import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen w-screen'>
      <Link
        to='/home'
        className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'
      >
        <i className='text-lg font-medium ri-home-5-line'></i>
      </Link>

      <div className='h-1/2'>
        <img
          className='h-full w-full object-cover'
          src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
          alt='Map'
        />
      </div>

      <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between mb-4'>
          <img
            className='h-12'
            src='https://i.pravatar.cc/150?img=3'
            alt='Driver'
          />
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Sarthak</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH12 AB 1234</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          
          <div className='w-full mt-2'>
            

            <div className='flex items-center gap-3 p-3 border-b-2'>
              <i className='text-lg ri-map-pin-2-fill'></i>
              <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
              </div>
            </div>

            <div className='flex items-center gap-3 p-3'>
              <i className='text-lg ri-currency-line'></i>
              <div>
                <h3 className='text-lg font-medium'>₹190.56</h3>
                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
              </div>
            </div>
          </div>
        </div>

        <button className='w-full mt-5 bg-green-600 text-white font-semibold py-3 rounded-lg'>
          Make Payment
        </button>
      </div>
    </div>
  )
}

export default Riding
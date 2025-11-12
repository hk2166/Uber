import React, { useEffect } from 'react'

function LookingForDriver(props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.setVehicleFound(false)
      props.setWaitingForDriver(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [props])

  return (
    <div>
      <h5
        onClick={() => props.setVehicleFound(false)}
        className='p-1 text-center absolute top-0 w-full left-1/2 -translate-x-1/2 cursor-pointer'
      >
        <i className='text-3xl text-gray-400 ri-arrow-down-wide-line'></i>
      </h5>

      <h3 className='text-2xl font-semibold mb-5'>Looking for a driver</h3>

      <div className='flex justify-center items-center py-10'>
        <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900'></div>
      </div>

      <div className='flex flex-col items-center'>
        <img
          className='h-20'
          src='https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg'
          alt='Vehicle'
        />
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
              <p className='text-sm -mt-1 text-gray-600'>Your Space Boys Hostel</p>
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

export default LookingForDriver
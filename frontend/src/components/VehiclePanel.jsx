import React from 'react'

const VehiclePanel = ({ setVehiclePanel, setVehicleFound, active, setActive }) => {
  return (
    <div>
        <h5 
          onClick={() => setVehiclePanel(false)}
          className='p-1 pd-3 text-3xl text-center absolute top-0 w-[93%] left-1/2 -translate-x-1/2 cursor-pointer'
        >
          <i className="ri-arrow-down-wide-fill text-2xl text-gray-600 hover:text-gray-900 transition-colors"></i>
        </h5>
        <h3 className='text-xl font-semibold mb-2 mt-0 pt-0'>Choose a Vehicle</h3>

        {/* UberBike Section */}
        <div
          onClick={() => {
            setActive('UberBike')
            setVehiclePanel(false)
            setVehicleFound(true)
          }}
          className={`flex items-center justify-between w-full border rounded-xl p-2 mb-2 cursor-pointer ${
            active === 'UberBike' ? 'border-black bg-gray-200' : 'border-gray-500'
          }`}
        >
          <div className='flex items-center space-x-3'>
            <img
              className='h-13 w-18 object-cover rounded-lg'
              src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n'
              alt='UberBike'
            />
            <div>
              <h4 className='font-semibold text-base text-gray-800 flex items-center gap-1'>
                UberBike{' '}
                <span className='text-gray-600 text-sm flex items-center gap-0.5'>
                  <i className='ri-user-3-fill'></i> 4
                </span>
              </h4>
              <h5 className='font-medium text-sm text-green-700'>2 mins away</h5>
              <p className='text-xs text-gray-500 leading-tight'>Quick rides</p>
            </div>
          </div>
          <div className='text-right'>
            <h2 className='text-xl font-bold text-gray-900'>₹60.00</h2>
          </div>
        </div>

        {/* Auto Section */}
        <div
          onClick={() => {
            setActive('Auto')
            setVehiclePanel(false)
            setVehicleFound(true)
          }}
          className={`flex items-center justify-between w-full border rounded-xl p-2 mb-2 cursor-pointer ${
            active === 'Auto' ? 'border-black bg-gray-200' : 'border-gray-500'
          }`}
        >
          <div className='flex items-center space-x-3'>
            <img
              className='h-14 w-20 object-cover rounded-lg'
              src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n'
              alt='Auto'
            />
            <div>
              <h4 className='font-semibold text-base text-gray-800 flex items-center gap-1'>
                Auto{' '}
                <span className='text-gray-600 text-sm flex items-center gap-0.5'>
                  <i className='ri-user-3-fill'></i> 3
                </span>
              </h4>
              <h5 className='font-medium text-sm text-green-700'>6 mins away</h5>
              <p className='text-xs text-gray-500 leading-tight'>
                Quick, budget-friendly rides
              </p>
            </div>
          </div>
          <div className='text-right'>
            <h2 className='text-xl font-bold text-gray-900'>₹109.00</h2>
          </div>
        </div>

        {/* UberGo Section */}
        <div
          onClick={() => {
            setActive('UberGo')
            setVehiclePanel(false)
            setVehicleFound(true)
          }}
          className={`flex items-center justify-between w-full border rounded-xl p-2 mb-2 cursor-pointer ${
            active === 'UberGo' ? 'border-black bg-gray-200' : 'border-gray-500'
          }`}
        >
          <div className='flex items-center space-x-3'>
            <img
              className='h-14 w-20 object-cover rounded-lg'
              src='https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg'
              alt='UberGo'
            />
            <div>
              <h4 className='font-semibold text-base text-gray-800 flex items-center gap-1'>
                UberGo{' '}
                <span className='text-gray-600 text-sm flex items-center gap-0.5'>
                  <i className='ri-user-3-fill'></i> 4
                </span>
              </h4>
              <h5 className='font-medium text-sm text-green-700'>8-10 mins away</h5>
              <p className='text-xs text-gray-500 leading-tight'>
                Affordable, compact rides
              </p>
            </div>
          </div>
          <div className='text-right'>
            <h2 className='text-xl font-bold text-gray-900'>₹278.50</h2>
          </div>
        </div>

        {/* UberXL Section */}
        <div
          onClick={() => {
            setActive('UberXL')
            setVehiclePanel(false)
            setVehicleFound(true)
          }}
          className={`flex items-center justify-between w-full border rounded-xl p-2 mb-2 cursor-pointer ${
            active === 'UberXL' ? 'border-black bg-gray-200' : 'border-gray-500'
          }`}
        >
          <div className='flex items-center space-x-3'>
            <img
              className='h-14 w-20 object-cover rounded-lg'
              src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=311/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy82ZDM1NDkxOS0xOGIwLTQ1ZDAtYTE1MS01MDFhYjRjNGIxMTQucG5n'
              alt='UberXL'
            />
            <div>
              <h4 className='font-semibold text-base text-gray-800 flex items-center gap-1'>
                UberXL{' '}
                <span className='text-gray-600 text-sm flex items-center gap-0.5'>
                  <i className='ri-user-3-fill'></i> 6
                </span>
              </h4>
              <h5 className='font-medium text-sm text-green-700'>8-10 mins away</h5>
              <p className='text-xs text-gray-500 leading-tight'>
                Spacious rides for groups
              </p>
            </div>
          </div>
          <div className='text-right'>
            <h2 className='text-xl font-bold text-gray-900'>₹430.00</h2>
          </div>
        </div>
    </div>
  )
}

export default VehiclePanel
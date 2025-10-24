import React from 'react'

const LocationSearchPanel = (props) => {

    // sample array for loaction

    const locations = [
        "Your Space Boys Hostel, park plaza, Lohegoan, Pune",
        "Ajeenkya Dy Patil University, lOhegoan, Pune",
        "Phoenix Mall, Viman Nagar,Pune",
        "24B Near kapoor's Cafe, FC road, pune"
    ]

  return (
    <div>
        {/* this is just a sample data */}

        {
            locations.map(function(e){
                return <div onClick={()=>{
                    props.setVehiclePanel(true)
                }} className='flex items-center justify-start my-2 border-gray-50 active:border-black border-2 px-2 p-3 rounded-xl  '>
            <h2 className='bg-[#eee] w-12 h-8 flex items-center rounded-full justify-center'><i className="ri-map-pin-fill text-xl"></i></h2>
            <h4 className='font-medium'>{e}</h4>
        </div>
            })
        }        
        
    </div>
  )
}

export default LocationSearchPanel
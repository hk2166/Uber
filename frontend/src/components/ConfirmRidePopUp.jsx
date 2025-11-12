import React from "react";

function ConfirmRidePopUp({ setConfirmRidePopUpPanel }) {
  return (
    <div className="h-screen">
      <h5
        onClick={() => setConfirmRidePopUpPanel(false)}
        className="text-center absolute top-0 w-full left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">New Ride Available</h3>
      <div className="flex items-center justify-between bg-yellow-300 ">
        <div className="flex items-center gap-3 ">
          <img
            className="h-15 w-15 rounded-full object-cover border-4 border-gray-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqAobTUqWeFe43rSdDyOWnyPS_zH5C-iHDQ&s"
            alt="Customer"
          />
          <h2 className="text-xl font-medium">Hemant Yadav</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2Km</h5>
      </div>

      <div className="flex flex-col items-center mt-3">
        <div className="w-full">
          <div className="flex items-center gap-3 p-2 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Pickup Location</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankar, Ahemdabad</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Destination</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahemdabad
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.56</h3>
              <p className="text-sm -mt-1 text-gray-600">Estimated Fare</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-5">
        <button
          onClick={() => setConfirmRidePopUpPanel(false)}
          className="flex-1 bg-red-500 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Decline
        </button>

        <button
          onClick={() => setConfirmRidePopUpPanel(false)}
          className="flex-1 bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Accept Ride
        </button>
      </div>
    </div>
  );
}

export default ConfirmRidePopUp;

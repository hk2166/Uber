import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CaptainRideDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const ride = location.state?.ride || {
    customerName: "Hemant Yadav",
    distanceKm: 2.2,
    pickup: "Kankar, Ahemdabad",
    dropoff: "Kankariya Talab, Ahemdabad",
    fare: 193.56,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqAobTUqWeFe43rSdDyOWnyPS_zH5C-iHDQ&s",
  };

  const handleReject = () => {
    // Navigate back to captain home
    navigate('/captain-home');
  };

  const handleAccept = () => {
    // Navigate to riding page with ride details
    navigate('/captain-riding', { state: { ride } });
  };

  return (
    <div className="h-screen w-screen bg-white p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)}
          className="h-12 w-12 bg-gray-100 flex items-center justify-center rounded-full shadow"
        >
          
          <i className="ri-arrow-left-line text-2xl"></i>
        </button>
        
        <h2 className="text-xl font-semibold">Ride Details</h2>
        
        <div className="w-12" />
      </div>

      <div className="flex items-center justify-between bg-yellow-300 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <img
            className="h-14 w-14 rounded-full object-cover border-4 border-green-500"
            src={ride.avatar}
            alt="Customer"
          />
          <div>
            <h3 className="text-lg font-medium">{ride.customerName}</h3>
            <p className="text-sm text-gray-600">{ride.distanceKm} Km away</p>
          </div>
        </div>
        <h5 className="text-lg font-semibold">{ride.distanceKm}Km</h5>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3 p-3 border rounded-lg">
          <i className="text-lg ri-map-pin-user-fill"></i>
          <div>
            <h4 className="text-base font-medium">Pickup Location</h4>
            <p className="text-sm -mt-1 text-gray-600">{ride.pickup}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 border rounded-lg">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h4 className="text-base font-medium">Destination</h4>
            <p className="text-sm -mt-1 text-gray-600">{ride.dropoff}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 border rounded-lg">
          <i className="text-lg ri-currency-line"></i>
          <div>
            <h4 className="text-base font-medium">₹{ride.fare.toFixed(2)}</h4>
            <p className="text-sm -mt-1 text-gray-600">Estimated Fare</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={handleReject}
          className="flex-1 bg-red-500 text-white font-semibold py-4 rounded-lg hover:bg-red-600 transition-colors shadow-md"
        >
          Reject
        </button>
        
        <button
          onClick={handleAccept}
          className="flex-1 bg-green-600 text-white font-semibold py-4 rounded-lg hover:bg-green-700 transition-colors shadow-md"
        >
          Accept Ride
        </button>
      </div>
    </div>
  );
};

export default CaptainRideDetails;

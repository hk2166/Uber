const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
  firstName, // Fixed typo in parameter name
  lastName,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
  phoneNumber, 
  status,
}) => {
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicleType ||
    !phoneNumber
  ) {
    throw new Error("All fields are required");
  }

  const captain = await captainModel.create({

    fullname: {
      firstName, 
      lastName,
    },
    email,
    password,
    phoneNumber,
    status: status || "inactive",
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });

  return captain;
};

const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports.hashPassword = async function(password) {
    if (!password) throw new Error("Password is required");
    return await bcrypt.hash(password, 10);
};

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !email || !password) {
        throw new Error("All fields are required");
    }

    const user = await userModel.create({
        fullname: {
            firstName: firstname,  
            lastName: lastname    
        },
        email,
        password
    });

    return user;
};
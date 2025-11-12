const mongoose = require("mongoose");

async function connectToDB() {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB");
        return true;
    } catch (err) {
        console.error("DB connection error:", err);
        throw err;
    }
}

module.exports = connectToDB;
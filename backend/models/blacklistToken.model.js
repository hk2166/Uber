const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 24 * 60 * 60, // Tokens expire after 24 hours
  },
});

// Add index for token field
blacklistTokenSchema.index({ token: 1 }, { unique: true });

const BlacklistToken = mongoose.model("BlacklistToken", blacklistTokenSchema);
module.exports = BlacklistToken;

const mongoose = require('mongoose');

var storeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    base_url: { type: String, required: true, index: true },
    scope: { type: String, required: true },
    access_token: { type: String, required: true },
    default_location_id: { type: Number, required: true },
    locations: [
      {
        location_id: { type: Number, required: true },
        name: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
    strict: true,
  }
);

module.exports = mongoose.model('Store', storeSchema);

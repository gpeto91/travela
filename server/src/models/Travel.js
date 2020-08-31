const mongoose = require("mongoose");

const TravelSchema = new mongoose.Schema({
   name: {
        type: String,
        required: [true, "Field 'name' cannot be empty"],
        trim: true,
        maxlength: [40, "Field 'name' is too long"]
    },
    phone: {
        type: String,
        required: [true, "Field 'phone' cannot be empty"]
    },
    dateFrom: {
        type: Number,
        required: [true, "Field 'Date From' cannot be empty"]
    },
    dateTo: {
        type: Number,
        required: [true, "Field 'Date To' cannot be empty"]
    },
    origin: {
        type: String,
        required: [true, "Field 'origin' cannot be empty"],
        trim: true,
        maxlength: [80, "Field 'origin' is too long"]
    },
    destination: {
        type: String,
        required: [true, "Field 'destination' cannot be empty"],
        trim: true,
        maxlength: [80, "Field 'destination' is too long"]
    },
    numberPeople: {
        type: Number,
        required: [true, "Field 'Number of People' cannot be empty"]
    }
});

module.exports = mongoose.model("Travel", TravelSchema);

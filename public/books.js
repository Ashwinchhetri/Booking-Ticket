const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true
    },
    firstSeat: {
        type:Number,
        required: true
    }
})

const Connect = new mongoose.model("User", userSchema);

module.exports = Connect;

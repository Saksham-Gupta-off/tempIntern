const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    UserId:{
        type: mongoose.Types.ObjectId,
        ref: userSchema,
        require: true
    },  
    HotelId:{
        type: mongoose.Types.ObjectId,
        ref: hotelSchema,
        require: true
    },  
    Start:{
        type: TimeRanges,
        require: true
    },
    End:{
        type: TimeRanges,
        require: true
    },
    PriceNoTax:{
        type: Number,
        require: true
    },
    Tax:{
        type: Number,
        require: true
    },
    ServiceCut:{  // Our cut of the prices
        // to be added on top of price_notax
        type: Number,
    },
    RoomType:{
        type: String,
    },
    Ratings:{
        Rating:{
            type:Number
        }
    },
    Reviews:{
        Review:{
            type:String
        }
    },
    Gst:{
        isGstBooking:{
            type:Boolean
        },
        GstNumber:{
            type: Number,
            required: isGstBooking
        }
    }
});

module.exports = mongoose.model("Hotel",hotelSchema)

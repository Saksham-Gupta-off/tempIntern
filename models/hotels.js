const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
    HotelName:{
      type:String,
      required: true
    },
    Title:{
      type:String,
      required: true
    },
    Room:{
      price:{
        type:Number,
        required: true
      },
      currency:Array,
      category:Array,
      amenities:Array,
    },
    Security:{
      equipment:Array,
    },
    Description:{
      type:String,
      Labels:{
        type:Array,
      },
    },
    Address:{
      Street:String,
      District:String,
      City:String,
      State:String,
      Country:String,
      PinCode:Number,
      Location:{
        type: "Point",
        coordinates:Float32Array
      },
      required: true
    },
    PhotoURLs:{
      type:Array
    },
    Reviews:{
      Points:{
        type:Number
      },
      NumReviews:{
        type:Number
      },
    },
});

module.exports = mongoose.model("Hotel",hotelSchema)

  
// let hotel1 = new Hotel({
//   hotel_name: "Hotel Maharana Inn",
//   location: "Mumbai",
//   address:
//     "VN Purav Marg, Charai, Chembur Naka, Chembur, Mumbai, Maharashtra 400071",
//   photoURLs: [
//     "https://lh3.googleusercontent.com/p/AF1QipPzePbKVGy6fXkzNsYYHR9CIex7n6mDebH4H_-w=w296-h202-n-k-rw-no-v1",
//     "https://lh3.googleusercontent.com/p/AF1QipM_MhnlIsE6WypfXg-3MVDq-I5EhEXPpGZa02g9=w296-h202-n-k-rw-no-v1",
//     "https://lh3.googleusercontent.com/p/AF1QipPXk-fiP82oLCPO0t7O-rnb8Z_71BueyoFqK25m=w296-h202-n-k-rw-no-v1",
//     "https://lh3.googleusercontent.com/p/AF1QipOdjQjahQpbP12KmtFcNquItJuIUOPKJNQz8V-K=w296-h202-n-k-rw-no-v1"
//   ],
//   points: 4286,
//   numReviews: 1099,
//   rating: 3.9,
//   offerings: ["Wi-Fi", "Free breakfast","Air conditioned rooms"]
// });

// hotel1.save();
// const check = await Hotel.find();
// console.log(check);

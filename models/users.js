const mongoose=require('mongoose');
// const validator=require('validator')

var UserSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: true
    },
    DOB:{
        type:Date,
        required: true
    },
    Gender:{
        type:String
    },
    EmailId:{
        type:String,
        required: true
    },
    Password:{
        type:Password,
        required: true
    },
    PhotoURLs:{
        type:String
    },
    Number:{
        type:Number
    },
    AltNumber:{
        type:Number
    },
    BillingAddress:{
        type:String
    },
    Emergency:{
        Name:{
            type:String,
        },
        Number:{
            type:Number,
        }
    },
    GovtId:{
        type:String
    },
    Booking:{
        type: Schema.Types.ObjectId,
        ref: bookings
    }
});

mongoose.model('Users',UserSchema)


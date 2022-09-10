const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    phoneNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    complaints: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Complaint'
    }],
    emergency_contacts: {
        type: [{
            name: String,
            relation: String,
            phone: Number
        }],
        validate: [arrayLimit,'{PATH} exceeds the limit of 3']
    },
    aadharHash: {
        type: String,
        required: true,
        unique: true
    }
});
function arrayLimit(val) {
    return val.length<=10;
}
module.exports=mongoose.model('user',UserSchema);
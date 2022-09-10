const mongoose=require('mongoose');

const ComplaintSchema=new mongoose.Schema({
    location: {
        x: {
            type: Number,
            required: true
        },
        y: {
            type: Number,
            required: true
        }
    },
    description: {
        type: String,
        required: false
    },
    contact_allowed: {
        type: Boolean,
        required: true,
        default: false
    },
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports=mongoose.model('complaint',ComplaintSchema)
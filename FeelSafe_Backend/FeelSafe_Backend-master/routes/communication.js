const express=require('express');
const User=require('../models/User')

const router=express.Router();

router.post('/sendSms',(req,res) => {
    const {accessToken}=req.body;
    try {
        const user=await User.findOne({aadharHash: accessToken});
        const users = user.emergency_contacts;
        const phoneNumbers = users.map(item=>{
            return item.phone;
        });
        
    } catch(e) {
        console.log(e);
        return res.status(500).send({message: "Something went wrong"});
    }
});

module.exports=router;
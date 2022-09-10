const express=require('express');
const User=require('../models/User');
const bcrypt=require('bcrypt');
const router=express.Router();

router.post('/login',async (req,res) => {
    const {phoneNumber,password}=req.body;
    try {
        const user=await User.findOne({phoneNumber: phoneNumber});
        if(!user) {
            return res.status(401).send({message: "User does not exist"});
        }
        const hashedPw=user.password;
        const successfulLogin=await bcrypt.compare(password,hashedPw);
        if(successfulLogin) {
            delete user.password;
        
            return res.status(200).json(user);
        }
        return res.status(400).send({message: "Invalid id or password"});
    } catch(e) {
        console.log(e);
        return res.status(500).send({message: "Something went wrong"});
    }
});

router.post('/register',async (req,res) => {
    const {phoneNumber,password,aadhar}=req.body;
    try {
        const saltRounds=10;
        const salt=await bcrypt.genSalt(saltRounds);
        const hashedPw=await bcrypt.hash(password,salt);
        const aadharSalt='$2b$10$481v3rbxTdHU1mGB405YPe';
        const hashedAadhar=await bcrypt.hash(aadhar,aadharSalt);
        const user=new User({phoneNumber,password: hashedPw,aadharHash: hashedAadhar});
        await user.save();
        delete user.password;
     
        return res.status(200).json(user)
    } catch(e) {
        console.log(e);
        return res.status(500).send({message: "Something went wrong"});
    }
});
router.post('/emergency-contacts',async(req,res) => {
    const {accessToken,emergency_contacts} = req.body;
    try{
        const user=await User.findOne({aadharHash: accessToken});
        user.emergency_contacts = emergency_contacts;
        await user.save();
        return res.status(200).json(user);

    }catch(e){
        console.log(e);
        return res.status(500).send({message: "Something went wrong"});
    }
})



module.exports=router;
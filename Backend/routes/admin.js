const express = require('express');
const router = require('express').Router();
const admin = require('../models/admin');
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken");
const secret_key = "Mykey01"
const {Router} =express.Router();



// router.post('/admin/save', (req,res) =>{

//     let newAdmin = new admin(req.body);

//     newAdmin.save((err) =>{
//         if(err){
//             return req.statusCode(400).json({
//                 error:err
//             })
//         }
//         return res.status(200).json({
//             success:"admin saves successfully"
//         });
//     });
// });

router.route("/admin/save").post(async (req,res, next) => {
    const {userName, password } = req.body;

    let existingUser;

    try{
        existingUser = await admin.findOne({ userName: userName });
    }catch(error) {
        console.log(error);
    }
    console.log(existingUser);
    if (existingUser){
        return res.status(400).json( {message: "User already exists!"});
    }

    const hashedPassword = bcrypt.hashSync(password);

    const newAdmin = new admin({   
        userName,
        password: hashedPassword
    });

    try {
        await newAdmin.save();
    }catch (error){
        console.log(error);
    }

    return res.status(201).json({ message: newAdmin}); 
});


router.get('/admin',(req,res) =>{
    admin.find().exec((err,admin) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingAdmin:admin
        });
    });
});


router.get("/get/:id", async(req,res) => {
    let adminid = req.params.id;

    admin.findById(adminid,(err,admin) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
            return res.status(200).json({
                success:true,
                admin
            });
        
    })
});

router.route("/admin/login").post( async(req, res, next) =>{

    const {userName, password} = req.body;

    let existingUser;
    try{
        existingUser = await admin.findOne({userName: userName});
    }catch(error){
        return new Error(error);
    }

    if(!existingUser){
        return res.status(400).json({ message: " check your Username and login again..."});
    }

   const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Invalid UserName or the password"})
    }

    const token = jwt.sign({id: existingUser._id}, secret_key, {
        expiresIn: "1hr"
    });

    res.cookie(String(existingUser._id),token,{
        path: '/',
        expires: new Date(Date.now() + 1000 * 30),
        httpOnly: true,
        sameSite: 'lax'
    })

    return res.status(200).json({message:  "Successfully logged in." , member: existingUser, token})

});

router.route("/admin/member").get(async(req,res,next) => {
    
    const cookie =  req.headers.cookie;
    const token = cookie.split("=")[1];
    console.log(token);
    
    if(!token){
        res.status(400).json({message: "No token found"});
    }
    jwt.verify(String(token),secret_key,async (error, newAdmin) =>{
        if(error){
            res.status(400).json({message: "Invalid token"});
        }
        console.log(newAdmin.id);
        req.id = newAdmin.id;

        const memberId = req.id;
        let member; 
        try{
            member = await admin.findById(memberId, "-password");
        }catch(error){
        return new Error(error)
        }
        if (!member){
        res.status(404).json({message: "user not found"})
        }
        return res.status(200).json({member});

    })
});

module.exports = router;
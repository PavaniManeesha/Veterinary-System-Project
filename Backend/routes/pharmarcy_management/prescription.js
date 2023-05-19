const express = require('express');


const Prescription = require('../../models/prescription');

const router = express.Router();


//save

router.post('/prescription/save',(req,res)=> {
    let newPrescription = new Prescription(req.body);

    newPrescription.save((err) => {
    if(err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:"Prescription  saved successfuly"
        });
    });

});

//read 
router.get('/prescription',(req,res) =>{
    Prescription.find().exec((err,Prescription) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Prescription
        });
    });
});

//get specific details

 router.get("/prescription/:id",(req,res)=>{
    let PreId = req.params.id;

    Prescription.findById(PreId,(err,prescription)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            prescription
        });
    });
 });

 //read petid
 router.get("/prescription/get/:petid",(req,res)=>{
    let PreId = req.params.petid;

    Prescription.find({petid:PreId},(err,prescription)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
          prescription
        });
    });
 });


//update

router.put('/prescription/update/:id',(req,res) =>{
    Prescription.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,prescription) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Prescription Updated Successfully"
            });
        }
    );
});

//delete
router.delete('/prescription/delete/:id',(req,res) =>{
    Prescription.findByIdAndRemove(req.params.id).exec((err,deletedPrescription)=>{
        if(err) return res.status(400).listenerCount({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedPrescription
        });
    });
});

module.exports = router;
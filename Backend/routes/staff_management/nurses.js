const express = require('express');
const Nurse = require('../../models/Nurse');

const router =express.Router();


//to save 
router.post('/nurse/save',(req,res)=>{

    let newNurse = new Nurse(req.body);

    newNurse.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Details saved sucessfully"
        });
    });
});


// to get

router.get('/nurse',(req,res) => {
    Nurse.find().exec((err,post) =>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:true,
            existingPosts:post
        });

    });
});

//get by id
router.get("/nurse/:id",(req,res) =>{

    let nurseID = req.params.id;

    Nurse.findById(nurseID,(err,nurse) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            nurse
        });
    });
});

// to update

router.put('/nurse/update/:id',(req,res) =>{
    Nurse.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});

            }
            return res.status(200).json({
                success:" Details updated sucessfully"
            });
        }
    );
});


// to delete

router.delete('/nurse/delete/:id',(req,res) =>{
    Nurse.findByIdAndRemove(req.params.id).exec((err,deletedNurse) =>{

        if(err) return res.status(400).json({
            message:"Details Deletion unsucessful",err
        });

        return res.json({
            message:"Deleted sucessfully",deletedNurse
        })
    });
})

module.exports = router;
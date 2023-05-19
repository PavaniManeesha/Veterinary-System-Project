const express = require('express');
const Medicines = require('../../models/medicineIn');

const router = express.Router();


//save medicine
router.post('/medicineIn/save',(req,res)=>{

    let newPost = new Medicines(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Medicine added successfully"
        });
    });

});


//get medicine
router.get('/medicineIn',(req,res) =>{
    Medicines.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific medicine
router.get("/medicineIn/:id",(req,res) =>{

    let medId = req.params.id;

    Medicines.findById(medId,(err,medicine) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            medicine
        });
    });
}); 


//update medicine
router.put('/medicineIn/update/:id',(req,res) =>{
    Medicines.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Medicine Updated Successfully"
            });
        }
    );
});

//delete medicine
router.delete('/medicineIn/delete/:id',(req,res) =>{
    Medicines.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Medicine Deleted Successfully",deletedPost

        });
    });

});


module.exports = router;

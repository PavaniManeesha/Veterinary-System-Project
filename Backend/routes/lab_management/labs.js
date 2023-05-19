const express = require('express');
const lab = require('../../models/lab');

const router = express.Router();

//save Posts cREATE

router.post('/lab/save', (req,res) =>{

    let newLab = new lab(req.body);

    newLab.save((err) =>{
        if(err){
            return req.statusCode(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"posts saved successfully"
        });
    });
});


//getPosts READ

router.get('/labs',(req,res) => {
    lab.find().exec((err,labs) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingLabs:labs
        });
    });
});

//Update 
router.put('/update/:id',(req,res) =>{
    lab.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,labs)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


//Delete
router.delete('/delete/:id',(req,res) =>{
    lab.findByIdAndRemove(req.params.id).exec((err,deletedLab) =>{
            if(err)return res.status(400).json({
                message:"Delete unsuccessFull",err
            });
            return res.json({
                message:"Delete Successfull",deletedLab
            });

    });
});


router.get("/get/:id", async (req,res) => {



    let labid = req.params.id;

   

    lab.findById(labid,(err,labs) => {

        if(err){
               return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            
            success: true,
            labs
        });

    });
})


module.exports = router;
const express = require('express');
const inquiry = require('../../models/inquiry');
const router = express.Router ();

//save

router.post('/inquiries/save',(req,res)=>{

    let newinquiry = new inquiry(req.body);

    newinquiry.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
   
            });
        }
        return res.status(200).json({
            success:"inquiry added successfully"
        });
    });

});
//read
router.get('/inquiries',(req,res)=>{
    inquiry.find().exec((err,inquiries)=>{
        if (err){
            
            return res.status(400).json({
                error:err
            });
        }
                     return res.status(200).json({
                success:true,
                existingPosts:inquiries
            });
        });
    });

//get inquiry

router.get('/inquiries/:id',(req,res)=>{

    let proId = req.params.id;

    inquiry.findById(proId,).exec((err,inquiries)=>{

        if(err){

            return res.status(400).json({

                error:err

            });

        }

        return res.status(200).json({

            success:true,

            inquiries

        });

    });

});


router.get("/inquiries/get/:ownerid",(req,res)=>{

    let OwnerId = req.params.ownerid;

    inquiry.find({ownerid:OwnerId},(err,inquiries)=>{

        if(err){
             return res.status(400).json({success:false,err});
        }
        return res.status(200).json({

            success:true,

            inquiries

        });

    });

 });


//delete inquiries



router.delete('/inquiries/delete/:id',(req,res) =>{

    inquiry.findByIdAndRemove(req.params.id).exec((err,deletedinquiries)=>{

        if(err) return res.status(400).listenerCount({

            message:"Delete unsuccesful",err

        });

        return res.json({

            message:"Delete Succesfull",deletedinquiries

        });

    });

});


module.exports = router;
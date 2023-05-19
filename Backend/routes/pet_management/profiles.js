const express = require('express');
const Profile = require('../../models/profile');
const router = express.Router ();

//save

router.post('/profiles/save',(req,res)=>{

    let newProfile = new Profile(req.body);

    newProfile.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
   
            });
        }
        return res.status(200).json({
            success:"Profiles added successfully"
        });
    });

});
//read
router.get('/profiles',(req,res)=>{
    Profile.find().exec((err,profiles)=>{
        if (err){
            
            return res.status(400).json({
                error:err
            });
        }
                     return res.status(200).json({
                success:true,
                existingPosts:profiles
            });
        });
    });

//get profiles

router.get('/profiles/:id',(req,res)=>{

    let proId = req.params.id;

    Profile.findById(proId,).exec((err,profiles)=>{

        if(err){

            return res.status(400).json({

                error:err

            });

        }

        return res.status(200).json({

            success:true,

            profiles

        });

    });

});
//update profiles

router.put('/profiles/update/:id',(req,res)=>{
    Profile.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,profiles)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"profile Updated succesfully"
            });

        }
    );
});

//delete profiles



router.delete('/profiles/delete/:id',(req,res) =>{

    Profile.findByIdAndRemove(req.params.id).exec((err,deletedProfiles)=>{

        if(err) return res.status(400).listenerCount({

            message:"Delete unsuccesful",err

        });



        return res.json({

            message:"Delete Succesfull",deletedProfiles

        });

    });

});


module.exports = router;
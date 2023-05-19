const express = require('express');
const Medicines = require('../../models/medicines');

const router = express.Router();

//save medicine

router.post('/medicine/save',(req,res)=>{

    let newMedicine = new Medicines(req.body);

    newMedicine.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Medicines saved successfully"
        });
    });

});

// get medicines

router.get('/medicine',(req,res)=>{
    Medicines.find().exec((err,medicines)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingMedicines:medicines
        });
    });
});


//get a specific medicines

router.get("/medicine/:id/",(req,res) =>{
    let medicineid = req.params.id;

    Medicines.findById(medicineid,(err,medicine)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            medicine
        });
    });
});


//update medicines

router.put('/medicine/update/:id',(req,res)=>{
    Medicines.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,medicine)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


//delete medicine

router.delete('/medicine/delete/:id',(req,res)=>{
    Medicines.findByIdAndRemove(req.params.id).exec((err,deleteMedicine)=>{

        if(err)return res.status(400).json({
            message:"Delete unsuccessfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteMedicine
        });

    });
});

module.exports = router;
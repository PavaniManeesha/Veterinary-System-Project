const express = require('express');
const reservation = require('../../models/reservation');

const router = express.Router();

//Save
router.post('/reservation/save', (req,res) =>{
    let newReservation = new reservation(req.body);

    newReservation.save((err) =>{
        if(err){
            return req.statusCode(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Reservation made successfully"
        });
    });
});

//Read
router.get('/reservation',(req,res) => {
    reservation.find().exec((err,reservation) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingReservation:reservation
        })
    })
});

//Update
router.put('/update/:id',(req,res) =>{
    reservation.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,reservation)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated SuccessFully"
            });
        }
    )
});

//Delete
router.delete('/delete/:id',(req,res) =>{
    reservation.findByIdAndRemove(req.params.id).exec((err,deletedReservation) =>{
        if(err)return res.status(400).json({
            message:"Delete unSuccess",err
        });
        return res.json({
            message:"Delete success",deletedReservation
        })
    })
})



router.get("/get/:id", async (req,res) => {



    let reservationid = req.params.id;

   

    reservation.findById(reservationid,(err,reservation) => {

        if(err){
               return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            
            success: true,
            reservation
        });

    });
})






module.exports = router;
import mongoose from "mongoose";
import paymentModel from "../models/paymentModel.js"

//creating new payment
export const createPayment = async(req, res)=>{
    const payment = req.body;
    const newPayment = new paymentModel(payment);

    try {
        await newPayment.save();
        res.status(200).json(newPayment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//getting payments
export const getPayment = async(req, res)=>{
    try {
        const findPayment = await paymentModel.find();
        res.status(200).json(findPayment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//updating payment
export const updatePayment = async(req, res)=>{
    const {id: _id} = req.params;
    const payment = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(400).send('Invalid Payment ID detected');
    
    const updatedPayment = await paymentModel.findByIdAndUpdate(_id, payment, {new: true});

    res.json(updatedPayment);
}

//deleting payment
export const deletePayment = async(req, res)=>{
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(400).send('Invalid Payment ID detected');

    await paymentModel.findByIdAndRemove(_id);

    res.json({message: 'payment deleted successfully'});
}

//Getting payment details using payment ID
export const usingID = async(req, res)=>{
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(400).send('Invalid Payment ID detected');

    try {
        const findPayment = await paymentModel.findById(_id);
        res.status(200).json(findPayment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};
const express = require("express");
const Requests = require("../../models/requests");

const router = express.Router();

//save medicine

router.post("/request/save", (req, res) => {
  let newRequest = new Requests(req.body);

  newRequest.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Medicines saved successfully",
    });
  });
});

// get requests

router.get("/request", (req, res) => {
  Requests.find().exec((err, requests) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingRequests: requests,
    });
  });
});

//get specific details
router.get("/request/:id", (req, res) => {
  let reqId = req.params.id;

  Requests.findById(reqId, (err, requests) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      requests,
    });
  });
});

//update

router.put("/request/update/:id", (req, res) => {
  Requests.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, requests) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      return res.status(200).json({
        success: "Report Updated Successfully",
      });
    }
  );
});

//delete
router.delete("/request/delete/:id", (req, res) => {
  Requests.findByIdAndRemove(req.params.id).exec((err, deletedRequests) => {
    if (err)
      return res.status(400).listenerCount({
        message: "Delete unsuccesful",
        err,
      });

    return res.json({
      message: "Delete Succesfull",
      deletedRequests,
    });
  });
});

//update medicine
router.put("/request/status/:id", (req, res) => {
  let id = req.params.id;
let status=req.body.status

Requests.findOneAndUpdate({_id:id},{status:status}).then(()=>{
    console.log(id);
    res.status(200).send({status: "Medicine updated"})
}).catch((err)=>{
    res.status(500).send({status: "Medicine not found"});
})
});

module.exports = router;

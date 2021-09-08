const express = require('express');
const router= express.Router();
const Advertisements = require('../Models/Advertisements');


//Request to Add New Advertisement
router.post("/add", async(req,res) =>{

    const NewAD=  new Advertisements({

        title:req.body.title,
        category:req.body.category,
        storeStatus:req.body.storeStatus,
        description:req.body.description,
        adStatus:req.body.adStatus,
        SP_ID:req.body.SP_ID,
        storeId:req.body.storeId
    });

    await NewAD.save()
               .then(()=>{ res.json("The New Advertisement Submitted Successfully!");})
               .catch((err)=>{ res.status(400).json(`Error: ${err}`)});
} );

//Request to Find Advertisement by ID
router.get("/getAd/:id", async(req,res) =>{

    await Advertisements.findById(req.params.id)
                        .then((ad)=>{ res.json(ad)})
                        .catch((err)=>{ res.status(400).json(`Error:${err}`)});
});

//Request to Find Advertisement by ID and Update
router.put("/update/:id", async(req,res) =>{
    
    const {title,category,storeStatus,description,adStatus,SP_ID,storeId}=req.body;
    const updateAD ={title,category,storeStatus,description,adStatus,SP_ID,storeId};

    await Advertisements.findByIdAndUpdate(req.params.id,updateAD)
                        .then(()=>{res.json("The Advertisement Updated Successfully!");})
                        .catch((err)=>{ res.status(400).json(`Error:${err}`)});
});                        

//Request to Find by ID and Delete
router.delete("/delete/:id", async(req,res)=>{

    await Advertisements.findByIdAndDelete(req.params.id)
                        .then(()=>{res.json("The Advertisement Deleted Successfully!");})
                        .catch((err)=>{ res.status(400).json(`Error:${err}`)});
});

module.exports=router;

const express=require('express')
const router = express.Router();
const studentData = require('../models/students');


//we will handle post requests
router.post('/students',async (req,res)=>{
try {
    const addstudent = new studentData(req.body);
    console.log(req.body);
    const inserstudent = await addstudent.save();
    res.send(inserstudent);
} catch (error) {
    console.log(error)
    
}
})

//we will handle get requests
router.get('/students',async (req,res)=>{
try {
    const getdata = await studentData.find({})
    res.send(getdata);
} catch (error) {
    console.log(error)
    
}
})
//done

//we handle get data like individual
router.get('/students/:id',async (req,res)=>{
try {
    const getdata = await studentData.findById(req.params.id)
    res.send(getdata);
} catch (error) {
    console.log(error)
    
}
})
//done

//we handle patch req of individual
router.patch('/students/:id',async (req,res)=>{
try {
    const getdata = await studentData.findByIdAndUpdate(req.params.id,req.body)
    res.send(getdata);
} catch (error) {
    console.log(error)
    
}
})
//done

//we handle patch req of individual
router.delete('/students/:id',async (req,res)=>{
try {
    const getdata = await studentData.findByIdAndDelete(req.params.id)
    res.send(getdata);
} catch (error) {
    console.log(error)
    
}
})
//done

//exports module
module.exports = router;
const express = require('express');
const mongoose = require('mongoose');

const studentschema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    address:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true
    }
})

const studentdata=mongoose.model('studata',studentschema);
module.exports = studentdata;

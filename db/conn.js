const mongoose = require ('mongoose');

mongoose.connect(' mongodb://localhost:27017/studentdata',{ useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log('Connection succesfully')).catch((err)=>console.log(err));
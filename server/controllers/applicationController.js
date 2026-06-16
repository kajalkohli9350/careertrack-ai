const Application =
require("../models/Application");

exports.addApplication =
async (req,res)=>{

 try{

   const application =
await Application.create({

 ...req.body,

 user:req.user.userId

});

   res.status(201).json(
   application
   );

 }
 catch(error){

  res.status(500).json({
   message:error.message
  });

 }

}

exports.getApplications =
async(req,res)=>{

 try{

  const applications =
  await Application.find({

   user:req.user.userId

  });

  res.status(200).json(
   applications
  );

 }

 catch(error){

  res.status(500).json({
   message:error.message
  });

 }

}

exports.deleteApplication =
async (req,res)=>{

 try{

  const application =
  await Application.findByIdAndDelete(
   req.params.id
  );

  if(!application){

   return res.status(404).json({
    message:"Application Not Found"
   });

  }

  res.status(200).json({
   message:"Application Deleted"
  });

 }

 catch(error){

  res.status(500).json({
   message:error.message
  });

 }

}

exports.updateApplication =
async(req,res)=>{

 try{

  const application =
  await Application.findByIdAndUpdate(

   req.params.id,

   req.body,

   { new:true }

  );

  if(!application){

   return res.status(404).json({
    message:"Application Not Found"
   });

  }

  res.status(200).json(
   application
  );

 }

 catch(error){

  res.status(500).json({
   message:error.message
  });

 }

}

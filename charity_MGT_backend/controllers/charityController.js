const Charity = require('../models/charityModel');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');
const  cloudinaryUploader  = require('../middleware/cloudnary')
const uploads = require('../middleware/multer')

 exports.uploadcharityPhoto = uploads.single('image');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};


exports.createCharity = catchAsync(
   async  (req,res,next)=>{
       const charity = await Charity.create(req.body);
        
         res.status(201).json({
           status:'success',
           data:charity
         })
})
exports.getAllCharity = catchAsync(async (req,res,next)=>{
  let filter = {}
  if(req.query.categories){
     filter =  {category:req.query.categories}
  }
    const charities = await Charity.find(filter);
    if(!charities){
      return next( new AppError('No charity found ',404))
    }
    res.status(200).json({
      status:"success",
      count:charities.length,
      data:charities
    })
  })
  
  exports.getCharity = catchAsync(  async (req,res,next)=>{
    const charity = await Charity.findById(req.params.id);
    if(!charity){
      return next(new AppError('No charity with that id',404))
    }
    res.status(200).json({
      status:"success",
      data:charity
    })
  })
exports.updateCharity =catchAsync(async (req,res,next)=>{


 const filteredBody = filterObj(req.body,'name','description','email','address','phone')
 
  if(req.file){
    const {path,filename} = req.file;
    upload = await cloudinaryUploader(
      path,
      "auto",
      "userPhoto",
      filename,
    );
    }
   // console.log(upload);

   filteredBody.image = upload.secure_url;
 

  const charity = await Charity.findByIdAndUpdate(req.params.id,filteredBody,{
    new:true,
    runValidators:true

  })
  if(!charity){
    return next(new AppError('There is no charity with that id',404))
  }
  res.status(200).json({
    status:'success',
    data:charity
  })

})
exports.deleteCharity = catchAsync( async (req,res,next)=>{
  const charity = await Charity.findByIdAndDelete(req.params.id);
   if(!charity){
     return next(new AppError('There is no charity with the id',404))
   }
   res.status(200).json({
     status:'success',
     message:"charity with the Id is deleted successfully"
   })
})
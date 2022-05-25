const Charity = require('../models/charityModel');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');
const sharp = require('sharp');
const multer = require('multer');


const multerStorage = multer.memoryStorage();
const multerFilter = (req,file,cb)=>{
    if(file.mimetype.startsWith('image')){
        cb(null,true)
    }else{
        cb(new AppError('Not an image! Please upload only images.',400),false)
    }
}
const upload = multer({
  storage:multerStorage,
  fileFilter:multerFilter
})

exports.uploadcharityPhoto = upload.single('image');
exports.resizeCharityPhoto = catchAsync(async (req,res,next)=>{
  if(!req.file) return next();
  req.file.filename = `charity-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
  .resize(500,500)
  .toFormat('jpeg')
  .jpeg({ quality:90 })
  .toFile(`./public/uploads/charity/${req.file.filename}`);

  next();
})
const filterObj = (obj,...allowedFields)=>{
  const newObj = {};
  Object.keys(obj).forEach(el=>{
      if(allowedFields.includes(el)) newObj[el] = obj[el];
  })
  return newObj;
}


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
  
  exports.getCharity = catchAsync( async (req,res,next)=>{
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
  const filteredBody = filterObj(req.body,'email')
   console.log("update");
  if(req.file){
    filteredBody.image = req.file.filename;
  }
  console.log(filteredBody.image);
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
   res.status(204).json({
     status:'success',
     data:null
   })
})
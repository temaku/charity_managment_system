const Category = require('../models/category');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');

exports.createCategory = catchAsync( async(req,res,next)=>{
    const category = await Category.create(req.body);
    res.status(201).json({
        status:'success',
        data:category
        
    })
})
exports.getCategory = catchAsync( async(req,res,next)=>{
    const category = await Category.findById(req.params.id);
    if(!category){
        return next(new AppError('No category found with this Id',404));
    }
    res.status(200).json({
        status:'success',
        data:category
        
    })
})
exports.getAllCategory = catchAsync( async(req,res,next)=>{
    const categories = await Category.find();
    if(!categories){
        return next(new AppError('No category found with this Id',404));
    }
    res.status(200).json({
        status:'success',
        count:categories.length,
        data:categories
        

    })

})

exports.UpdateCategory = catchAsync( async(req,res,next)=>{
    const category = await Category.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });
    if(!category){
        return next(new AppError('No category with that id.',404))
    }
    res.status(200).json({
        status:"success",
        data:category
    })


}

)
exports.deleteCategory = catchAsync( async(req,res,next)=>{
    const category = await Category.findByIdAndDelete(req.params.id);
    if(!category){
        return next(new AppError('No category with that id.',404))
    }
    res.status(204).json({
        status:"success",
        data:null
    })
})


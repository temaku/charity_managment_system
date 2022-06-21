const Budget = require('../models/budgetAllocate');
const catchAsync = require('../middleware/catchAysnc');
const AppError = require('../middleware/appError');

exports.createBudget = catchAsync( async(req,res,next)=>{
    const budget = await Budget.create(req.body);
    res.status(201).json({
        status:'success',
        data:budget
        
    })
})
exports.getBudget = catchAsync( async(req,res,next)=>{
    const budget = await Budget.findById(req.params.id);
    if(!budget){
        return next(new AppError('No budget found with this Id',404));
    }
    res.status(200).json({
        status:'success',
        data:budget
        
    })
})
exports.getAllBudget = catchAsync( async(req,res,next)=>{
    const budgets = await Budget.find();
    if(!budgets){
        return next(new AppError('No budget found with this Id',404));
    }
    res.status(200).json({
        status:'success',
        count:budgets.length,
        data:budgets
        

    })

})

exports.UpdateBudget = catchAsync( async(req,res,next)=>{
    const budget = await Budget.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });
    if(!budget){
        return next(new AppError('No budget with that id.',404))
    }
    res.status(200).json({
        status:"success",
        data:budget
    })


}

)
exports.deleteBudget = catchAsync( async(req,res,next)=>{
    const budget = await Budget.findByIdAndDelete(req.params.id);
    if(!budget){
        return next(new AppError('No budget with that id.',404))
    }
    res.status(200).json({
        status:'success',
        message:"Budget with the Id is deleted successfully"
    })
})


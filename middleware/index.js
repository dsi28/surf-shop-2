const middleware = {
    asyncErrorHandler: (fn)=>
        (req,res,next)=>{
            Promise.resolve(fn(req,res,next)).catch(next);
        },

    setLocalVariables: (req,res,next)=>{
        res.locals.title = 'generic title';
        res.locals.error = req.flash('error');
        res.locals.success = req.flash('success');
        next();
    }
}

module.exports =  middleware;
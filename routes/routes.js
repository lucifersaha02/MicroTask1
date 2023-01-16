const express = require('express')
const router = express.Router()
const errorHandler = require('../middleware/errorhandler')

// const app = express()


router.get("/error-endpoint",(req, res, next)=>{
    try{
        console.log("error");
        res.status(400).json({"message":"Error here"})

    }catch(err){
        next(err)
    }
    
} )




module.exports = router
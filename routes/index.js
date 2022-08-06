const express=require('express')

const router=express.Router()


//Login/Landing Page
router.get('/', (req,res) =>{
    res.send('Login')
})

router.get('/dashboard', (req,res) =>{
    res.send('Dashboard')
})
module.exports=router
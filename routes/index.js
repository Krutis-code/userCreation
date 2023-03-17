// const express =require('express');

// const router = express.Router();
// const bcrypted = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// router.post('/login', async (req,res)=>{
//     console.log("req post ..........................",req.body);
//     try {
        
//     } catch (error) {
        
//     }
// })

// router.post('/register', async (req,res)=>{
//     try {
//         console.log("register user//////////////////////////////////", req.body);
//         const {username,password, email} = req.body;
//         if( !username || typeof(username) !== 'string'){
//             console.log("register user//////////////////////////////////", req.body.username);
//             return res.json({message:"username can not be empty"})
//         }
//         if( !password || typeof(password) !== 'string' || password === null ){
//             console.log("register user//////////////////////////////////", req.body.password);
//             return res.json({message:"password can not be empty"})
//         }
//         if( !email || typeof(email) !== 'string' || email === null ){
//             console.log("register user//////////////////////////////////", req.body.email);
//             return res.json({message:"Email is Required for registration"})
//         }
        
        
//     } catch (error) {
        
//     }
// })

// module.exports = router;



const express = require('express');
const app    = express();
const jwt    = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const cors   = require('cors')
const bcrypt = require('bcrypt');


const PRODUCTROUTER   = require('./src/routers/product.router');
// const TUTORIALSROUTER = require('./src/routers/tutorials.router');


let corsOptions = { //อนุญาติให้ localhost:8080 เข้าระบบได้เท่านั้น
     origin:`http://localhost:${process.env.PORT}`
}


// ตั้งค่าการ Parse ตัวแปรเมื่อ Client ส่งข้อมูลเข้ามา
app.use(express.urlencoded({extended:true,limit:'500MB'}));
app.use(express.json({limit:'500MB'}));

// cors เป็นการกำหนดอนุญาติให้เว็บไหนเข้าใช้งานได้ กรณีที่ไม่ใช้ให้ app.use(cors())
app.use(cors(corsOptions));


// //กำหนดการทำงานของ router เมื่อถูกเรียกใช้งาน
// app.use((request,response,next)=>{
//     const error = new Error('Not found');
//     error.status = 404;
//     next(error);
// });

// //กรณีที่เส้นทาง router ไม่ถูกให้ขึ้น 404 or 500 not found
// app.use((error,req,res,next)=>{
//     res.status(error.status || 500);
//     res.json({
//         error:{
//             message:error.message
//         }
//     });
// });


//กำหนดเส้นทางไปยัง api
app.use('/api/products',PRODUCTROUTER);
// app.use('/api/tutorials',TUTORIALSROUTER);


//ทำการรัน server
app.listen(process.env.PORT,()=>{console.log(`GET START SERVER TO http://localhost:${process.env.PORT}`)})
const express = require("express")

const app = express();
const {userController} = require("./routes/user.routes")
const {productsController} = require("./routes/product.routes")
const {connection} = require("./config/db")
require('dotenv').config()

const {authentication} = require("./Middleware/authentication")

const PORT = process.env.PORT ||  8080;
const jwt = require("jsonwebtoken")
const cors = require("cors")
const path = require("path")
const cookieParser = require("cookie-parser");
app.use(express.json())

app.get("/", (req, res)=>{  
    res.send("Home page")
})

app.use(cors());

app.use(express.urlencoded({extended : false}));

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const smsKey = process.env.SMS_SECRET_KEY;
let twilioNum = process.env.TWILIO_PHONE_NUMBER;
const client = require("twilio")(accountSid, authToken);

  app.post("/sendOTP", (req, res)=>{
    const {phone} = req.body;
    const otp  = Math.floor(10000 + Math.random() * 900000);
    
  })
//   console.lod(phone)
//   let otp = "65465"
//   let phone = 8400182918
//   client.messages
  
//      .create({
//         body:`Your Otp is ${otp}`,
//         from: twilioNum,
//         to: phone,
//      })
//      .then((messages)=>{
//         res.status(200).json({phone, hash:fullHash, otp})
//      })
//      .catch((err)=>{
//         console.error("phone: ", err.messages);
//         return res.json({error: err.messages});
//      })

app.use("/user", userController)

app.use(authentication)

app.use("/products", productsController)



app.listen(PORT, async(req, res)=>{
    try{
        await connection;
        console.log("connected to db")
    }
    catch(err){
        console.log("error in connection", err)
    }
    console.log(`listening on port  ${PORT}`)
})
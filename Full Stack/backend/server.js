const express = require("express");
const {connection} = require("./config/db");
const {UserModel, DashboardModel} = require("./models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.send("based api endpoint");
})

app.post("/signup",(req,res)=>{
    const {email,password,confirmPassword} = req.body;
    bcrypt.hash(password, 5, async function(err, hash) {
        if(err){
            res.send("error");
        }

        const user =  new UserModel({
            email,
            password: hash,
            confirmPassword: hash,
        })
        try {
            await user.save();
          res.send("Signup successfull")
        } catch (error) {
            console.log(error);
        res.send("Something went wrong");
        }
            });
        })
        

        app.post("/login", async(req,res)=>{
            const {email,password} = req.body;
            const user = await UserModel.findOne({email,password});

            if(user){
                const token = jwt.sign({ foo: 'bar' }, 'secret');
                res.send({message: "Login Successful", token: token})
            }
            else{
                res.send({message: "Invalid Credentials"})
            }
        })

        app.get("/employees",async(req,res)=>{
            try {
                const data = await DashboardModel.find();
                res.send(data);
            } catch (error) {
                res.send(error);
            }
        })

        app.post("/employees/create",async(req,res)=>{
            const {firstName,lastName,email,department,salary} = req.body;
            await DashboardModel.create({firstName,lastName,email,department,salary});

            res.send("Dashboard created successful");
        })
 
        app.patch("/employees/:userID",async(req,res)=>{
            const id = req.params.userID;
            try {
            await DashboardModel.findByIdAndUpdate(id,req.body);
            res.send("Update Successful");
            } catch (error) {
                console.log(error);
            }
        })

        app.delete("/employees/:userID",async(req,res)=>{
            const id = req.params.userID;
            await DashboardModel.findByIdAndDelete(id,req.body);
            res.send("Deleted");
        })


app.listen(PORT,async()=>{
    try {
        await connection
        console.log("Connect");
    } catch (error) {
        console.log(error)
    }

    console.log(`Listening to ${PORT}`);
})

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {type: String,required: true},
    password: {type: String,required: true},
    confirmPassword: {type: String,required: true}
})

const dashboardSchema = mongoose.Schema({
    firstName: {type: String,required: true},
    lastName: {type: String,required: true},
   email: {type: String,required: true},
    department: {type: String,required: true},
    salary: {type: String,required: true},


})

const UserModel = mongoose.model("user",userSchema);
const DashboardModel = mongoose.model("dashboard",dashboardSchema);

module.exports={UserModel,DashboardModel};
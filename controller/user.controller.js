/**
 *  Project: REST API
 *  Author: Imtiaz Adar
 *  Components: Node JS, Express JS, MongoDB
 */

const {v4: uuidv4} = require("uuid");
const userList = require("../model/user.model");

// show all user
const showAllUser = async (req, res)=>{
    try{
        const users = await userList.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
    res.status(200).json({message: "User list", userList});
};

// get a particular user
const getOneUser = async (req, res)=>{
    const id = req.params.id;
    try{
        const user = await userList.findOne({ID: id});
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

// add an user
const addUser = async (req, res)=>{
    try{
        const {Name, Age, Address} = req.body;
        const newUser = new userList({"ID": uuidv4(), "Name": Name, "Age": Number(Age), "Address": Address});
        await newUser.save();
        console.log("User has been added successfully...")
        res.status(201).json({message: "User has been added successfully...", newUser});
    }
    catch(err){
        console.log("There is something wrong, please try again later...");
        res.status(500).json({message: err.message});
    }
    
};

// update an user
const updateUser = async (req, res)=>{
    const {Name, Age, Address} = req.body;
    const id = req.params.id;
    try{
        const user = await userList.findOne({ID: id});
        user.Name = Name;
        user.Age = Number(Age);
        user.Address = Address;
        await user.save();
        console.log("User details has been updated successfully...");
        res.status(200).json({message: "User details has been updated successfully..."});
    }
    catch{
        console.log("User ID has not matched...");
        res.status(400).json({message: "User ID has not matched...", err});
    }
};

// delete an user
const deleteUser = async (req, res)=>{
    const {id} = req.params;
    try{
        await userList.deleteOne({ID: id});
        console.log("User details has been deleted successfully...");
        res.status(200).json({message: "User has been deleted successfully..."});
    }
    catch(err){
        console.log("User ID has not matched...");
        res.status(400).json({message: "User ID has not matched...", err});
    }
};

module.exports = {showAllUser, getOneUser, addUser, updateUser, deleteUser};
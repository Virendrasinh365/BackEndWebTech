const Admin = require('../models/Admin.model.js')

//create  admin

const createAdmin = async(data)=>{
    return await Admin.create(data);
}
// read all
const getAllAdmin = async ()=>{

    return await Admin.find();

}
// read one
const getAdminById = async(id)=>{
    return await Admin.findById(id);

}

// update
const updateAdmin = async (id,data)=>{
    return await Admin.findIdAndUpdate(id,data,{new : true})
}

// delete
const deleteAdmin = async (id)=>{
    return await Admin.findIdAndDelete(id);
}
module.exports = { 
     createAdmin : createAdmin,
     getAllAdmin : getAllAdmin,
     getAdminById : getAdminById,
     updateAdmin : updateAdmin,
     deleteAdmin : deleteAdmin
}



const adminService = require('../services/Admin.service.js');

// create
const createAdmin = async (req,res)=>{
    try{
        const admin = await adminService.createAdmin(req.body);
        res.status(201).json({
            success : true,
            data : user,
            message : 'User created successfully'
        });

    }catch(err){
        res.status(400).json(`error is ${err}`);
    }
};

//getAll
const getAdmins = async(req,res)=>{
    const admins = await adminService.getAllAdmin();
    res.json(admin)
}

// read one
const getAdmin = async (req,res)=>{
    const admin = await adminService.getAdminById(req.params.id);

    if(!admin){
        return res.status(404).json({message : "Admin Not Found"});

    }
    res.json(admin);
};

//update

const updateAdmin = async (req,res)=>{
    const  updatedAdmin = await adminService.updateAdmin(req.params.id,req.body);
    if(!updatedAdmin){
        res.status(404).json({message:'user not found'});

    }
    res.json(updatedAdmin);
};

//delete
const deleteAdmin = async (req,res)=>{
    const deletedAdmin = await adminService.deleteAdmin(req.params.id);

    if(!deletedAdmin){
        res.status(404).json({message:'Admin not Found'});
    };
    res.json({message:'Admin deleted Successfully'});
};
module.exports = {
    createAdmin : createAdmin,
    getAdmins : getAdmins,
    getAdmin : getAdmin,
    updateAdmin : updateAdmin,
    deleteAdmin  : deleteAdmin
}
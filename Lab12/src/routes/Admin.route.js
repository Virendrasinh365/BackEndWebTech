const express = require('express');

const adminController = require('../controllers/Admin.controller.js');

const router = express.Router();

router.post('/register',adminController.createAdmin);
router.get('/',adminController.getAdmins);
router.get('/:id',adminController.getAdmin);
router.put('/:id',adminController.updateAdmin);
router.delete('/:id',adminController.deleteAdmin);


module.exports = router;
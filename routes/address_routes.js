const express = require("express");
const router = express.Router();

const addressCtrl = require("../controllers/address_controller");

router.get('/addresses', addressCtrl.getAllAddresses)
router.patch('/addresses/:id', addressCtrl.updateAddress)


module.exports = router
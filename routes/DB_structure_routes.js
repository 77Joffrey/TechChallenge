const express = require("express");
const router = express.Router();

const dbStructureCtrl = require("../controllers/DB_structure");

router.post('/addcoordinatesfields', dbStructureCtrl.addFieldsLatLonToAddress)
router.delete('/deletecoordinatesfields', dbStructureCtrl.deleteFieldsLatLonFromAddress)
router.post('/rentals', dbStructureCtrl.createViewCustomerRentals)
router.post('/nbrentals', dbStructureCtrl.createViewCustomerNbRentals)
router.post('/nbrentalsaddress', dbStructureCtrl.createViewCustomerNbRentalsAddress)


module.exports = router
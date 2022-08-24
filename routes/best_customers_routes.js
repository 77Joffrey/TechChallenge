const express = require("express");
const router = express.Router();

const bestCustomersCtrl = require('../controllers/best_customer_controller')

router.get('/customersActivity', bestCustomersCtrl.getCustomersActivity)
router.get('/bestcustomers', bestCustomersCtrl.getBestCustomers)

module.exports = router
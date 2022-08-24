const connection = require("../DB_connection");

// get all customers from most active to less
exports.getCustomersActivity = (req, res, next) => {
    let query = "SELECT * FROM `customerAddress_nbrentals_vw`";
    connection.query(query, (err, results) => {
      if (!err) {
        res.status(200).json(results);
      } else {
        res.status(500).json(err);
      }
    });
  };


// get best customer
exports.getBestCustomers = (req, res, next) => {
    let query = "SELECT customer_id,last_name,first_name,max(nb_rental) as nb_rentals,address_id,address,postal_code,city,latitude,longitude FROM `customerAddress_nbrentals_vw`";
    connection.query(query, (err, results) => {
      if (!err) {
        res.status(200).json(results);
      } else {
        res.status(500).json(err);
      }
    });
  };
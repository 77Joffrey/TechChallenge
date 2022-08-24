const connection = require("../DB_connection");

// ajout des colonnes latitude, longitude à la table address (used just once)
exports.addFieldsLatLonToAddress = (req, res, next) => {
    let query = "ALTER TABLE `address` ADD `latitude` FLOAT, ADD `longitude` FLOAT";
    connection.query(query, (err, results) => {
      if (!err) {
        res.status(201).json({message : "Fields successfully created!"});
      } else {
        res.status(500).json(err);
      }
    });
};
  
// suppression des colonnes latitude, longitude de la table address (test)
exports.deleteFieldsLatLonFromAddress = (req, res, next) => {
    let query = "ALTER TABLE `address` DROP `Latitude`, DROP `Longitude`";
    connection.query(query, (err, results) => {
        if (!err) {
          res.status(201).json({message : "Fields successfully deleted!"});
        } else {
          res.status(500).json(err);
        }
    });
};

// Création de vue pour joindre les locations à la table client
exports.createViewCustomerRentals = (req, res, next) => {
    let query = "CREATE VIEW customer_rentals_vw AS SELECT customer.customer_id,last_name,first_name,address_id,rental_id FROM customer LEFT JOIN rental ON `customer`.`customer_id` = `rental`.`customer_id`";
    connection.query(query, (err, results) => {
        if (!err) {
          res.status(201).json({message : "View successfully created!"});
        } else {
          res.status(500).json(err);
        }
    });
};

// Création de vue pour compter les locations par client (du max ver min)
exports.createViewCustomerNbRentals = (req, res, next) => {
    let query = "CREATE VIEW customer_nbrentals_vw AS SELECT customer_id,last_name,first_name,address_id, COUNT(*) as nb_rental FROM customer_rentals_vw GROUP BY customer_id ORDER BY nb_rental DESC";
    connection.query(query, (err, results) => {
        if (!err) {
          res.status(201).json({message : "View successfully created!"});
        } else {
          res.status(500).json(err);
        }
    });
};

// Création de vue pour intégrer les adresses des clients (toujours du plus actif au moins actif)
exports.createViewCustomerNbRentalsAddress = (req, res, next) => {
    let query = "CREATE VIEW customerAddress_nbrentals_vw AS SELECT customer_id,last_name,first_name,nb_rental,customer_nbrentals_vw.address_id,address,postal_code,city,latitude,longitude FROM customer_nbrentals_vw LEFT JOIN address ON customer_nbrentals_vw.address_id = address.address_id ORDER BY nb_rental DESC";
    connection.query(query, (err, results) => {
        if (!err) {
          res.status(201).json({message : "View successfully created!"});
        } else {
          res.status(500).json(err);
        }
    });
};
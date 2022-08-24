const connection = require("../DB_connection");
const fetch = require('node-fetch');
const { json } = require("express");

// get datas from table "address"
exports.getAllAddresses = (req, res, next) => {
  let query = "SELECT * FROM `address`";
  connection.query(query, (err, results) => {
    if (!err) {
      res.status(200).json(results);
    } else {
      res.status(500).json(err);
    }
  });
};

// update datas in table "address"
exports.updateAddress = (req, res, next) => {
  let query = "SELECT * FROM `address` ORDER BY postal_code ASC";
  connection.query(query, (err, results) => {
    if (!err) {
      res.status(200).json(results);
      const data =  results;
      const testingUpdate = [{"lat" : 49.785789}, {"long" : 5.756983}];
      console.log(testingUpdate[0].lat);
      for(i = 0; data.length > i; i ++){
        // ajout fetch ici
        // const completeAddress = `${data[i].address}` + "," + `${data[i].postal_code}` + "," + `${data[i].city}`
        // console.log(completeAddress);
        let updateQuery = "UPDATE `address` SET `latitude` = " + testingUpdate[0].lat + ",`longitude` = " + testingUpdate[1].long + "WHERE `address_id` = " + data[i]["address_id"];
        connection.query(updateQuery, (err, updateResults) => {
            if (!err) {
                console.log('DB updated!');
            } else {
                console.log('Error!');
              }
        })
      }


/*       fetch("https://nominatim.openstreetmap.org/search?q=11+RUE+DES+CHENES,VERNOU-LA-CELLE+SUR+SEINE&format=jsonv2")
      .then(res => {
        const locData = res.lat
        console.log(locData);
       })
      .catch(err => console.log("Oh no", err)) */


    // test fetch API (jsonplaceholder)
/*     fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {
      const data = res
        console.log("TEST API Fetching : Show users in the array :");
        for(i = 0; data.length > i; i ++){
          console.log((data[i].name));
        }
        console.log('TEST API Fetching successfully passed!');
}) */

    } else {
      res.status(500).json(err);
    }
  });
};
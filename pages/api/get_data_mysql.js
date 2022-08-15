import React from 'react'

export default function get_data_mysql(req, res) {
    // get the client
    const mysql = require('mysql2');

    // create the connection to database
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'booked'
    });

    // simple query
    connection.query(
    'SELECT * FROM item limit 10',
    function(err, results, fields) {
        // console.log(results);  
        // console.log(fields); 
        res.status(200).json({  result: results })
    }
    );
 

}

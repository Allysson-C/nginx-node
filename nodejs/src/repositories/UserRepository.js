const mysql = require('mysql');
const dbConfig = require('../config/dbConfig.json');

class UserRepository {
  constructor() {
    this.connection = mysql.createPool(dbConfig);
  }

  create(name){
    const insertQuery = `INSERT INTO people(name) values('${name}')`;

    return new Promise((resolve, reject) => {
      this.connection.query(insertQuery, (err, result, fields) => {
        if (err) {
          reject(err);
        }
        
        return resolve(result);
      });
    })
  }

  find(){
    const selectQuery = "SELECT * FROM people";
    
    return new Promise((resolve, reject) => {
      this.connection.query(selectQuery, (err, result, fields) => {
        if (err) {
          reject(err);
        }

        return resolve(result);
      });
    })
  }
}

module.exports = UserRepository;
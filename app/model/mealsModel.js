var connection = require('../../connection');

function Meals() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('SELECT * from Meals', function(err, rows) {
        if(err) throw err;
        con.release();
        res.send(rows);
      });
    });
  };

  this.create = function(meal, res) {
    connection.acquire(function(err, con) {
      con.query('INSERT INTO Meals set ?', meal, function(err, result) {
        if(err) throw err;
        con.release();
        if (err) {
          res.send({status: 1, message: 'Meal creation failed'});
        } else {
          res.send({status: 0, message: 'Meal created successfully'});
        }
      });
    });
  };
}


module.exports = new Meals();

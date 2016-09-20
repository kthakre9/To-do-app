var connection = require('../../connection');

function Meals() {
  this.get = function (res) {
    connection.acquire(function (err, con) {
      con.query('SELECT * from Meals', function (err, rows) {
        if (err) throw err;
        con.release();
        res.send(rows);
      });
    });
  };

  this.create = function (meal, res) {
    connection.acquire(function (err, con) {
      con.query('INSERT INTO Meals set ?', meal, function (err, result) {
        if (err) throw err;
        con.release();
        if (err) {
          res.send({status: 1, message: 'Meal creation failed'});
        } else {
          res.send({status: 0, message: 'Meal created successfully'});
        }
      });
    });
  };

  this.getById = function (id, res) {
    connection.acquire(function (err, con) {
      con.query('SELECT * from Meals WHERE idMeals = ?', [id], function (err, rows) {
        if (err) throw err;
        con.release();
        res.send(rows);
      });
    });
  };

  this.update = function (meal, id, res) {
    connection.acquire(function (err, con) {
      con.query('update Meals set ? where idMeals = ?', [meal, id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'meal update failed'});
        } else {
          res.send({status: 0, message: 'meal updated successfully'});
        }
      });
    });
  };

  this.delete = function (id, res) {
    connection.acquire(function (err, con) {
      con.query('delete from Meals where idMeals = ?', [id], function (err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
}


module.exports = new Meals();

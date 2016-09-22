var connection = require('../../connection');

function Groceries() {
    this.get = function (res) {
        connection.acquire(function (err, con) {
            con.query('SELECT * from Grocery', function (err, rows) {
                if (err) throw err;
                con.release();
                res.send(rows);
            });
        });
    };
}


module.exports = new Groceries();
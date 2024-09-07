const sqlite3 = require('sqlite3').verbose();

const users = new sqlite3.Database('./Data.db', (err) => {
    if (err) {
        console.error('Data | DB error: ' + err.message);
    } else {
        console.log('Data | Connected to the database');

        users.run(`CREATE TABLE IF NOT EXISTS user (
            ID INTEGER PRIMARY KEY,
            email TEXT NOT NULL, 
            product TEXT NOT NULL, 
            dateTime TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error('Data | Table creation error: ' + err.message);
            }
        });
    }
});
const products = new sqlite3.Database('./Products.db', (err) =>
{
    if(err)
    {
        console.error('Products | DB error: ' + err.message);
    } else
    {
        console.log('Products | Connected to the database');
    }
    products.run(`CREATE TABLE IF NOT EXISTS products (
            ID INTEGER PRIMARY KEY,
            Name TEXT NOT NULL, 
            Cost INTEGER NOT NULL, 
            Description TEXT NOT NULL
        )`, (err) => {
        if (err) {
            console.error('Products | Table creation error: ' + err.message);
        } else {
        }
    });
});
function addNewProduct(name, cost, description)
{

    products.run('INSERT INTO products (name, cost, description) VALUES (?, ?, ?)', [name, cost, description], function(err) {
        if (err) {
            console.error('Product | Error inserting data: ' + err.message);
        }
        users.close((err) => {
            if (err) {
                console.error('Product | Error closing the database: ' + err.message);
            }
        });
    });}
function addNewUser(email, product) {
    const dateTime = new Date().toISOString();

    users.run('INSERT INTO user (email, product, dateTime) VALUES (?, ?, ?)', [email, product, dateTime], function(err) {
        if (err) {
            console.error('Users | Error inserting data: ' + err.message);
        }
        users.close((err) => {
            if (err) {
                console.error('Users | Error closing the database: ' + err.message);
            }
        });
    });
}

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./Data.db', (err) => {
    if (err) {
        console.error('DB error: ' + err.message);
    } else {
        console.log('Connected to the database');

        db.run(`CREATE TABLE IF NOT EXISTS user (
            ID INTEGER PRIMARY KEY,
            email TEXT NOT NULL, 
            product TEXT NOT NULL, 
            dateTime TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error('Table creation error: ' + err.message);
            } else {
                addNewUser("test@gmail.com", "telegram_bot");
            }
        });
    }
});

function addNewUser(email, product) {
    const dateTime = new Date().toISOString();

    db.run('INSERT INTO user (email, product, dateTime) VALUES (?, ?, ?)', [email, product, dateTime], function(err) {
        if (err) {
            console.error('Error inserting data: ' + err.message);
        }
        db.close((err) => {
            if (err) {
                console.error('Error closing the database: ' + err.message);
            }
        });
    });
}

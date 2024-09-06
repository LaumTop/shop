const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./Data.db", (err) =>
{
    if(err)
    {
        console.error("DB error" + err.message);
    }
    else
    {
        console.log("Connected to the database");
    }
});
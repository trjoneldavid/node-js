const mysql = require('mysql2/promise')

 async function query(q,values)  {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'sample_schema',
        password: 'root'
    });

    try {
        const [results, fields] = await connection.query(q,values);
        return results

    } catch (err) {
        console.log(err);
    }
}

module.exports = { query }
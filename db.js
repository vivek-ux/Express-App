//postgreSql database connection logic.

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'system',
    port: 5432,
});

module.exports = pool;
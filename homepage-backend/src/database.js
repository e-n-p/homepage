import mysql from 'mysql';

var pool  = mysql.createPool({
    host: 'localhost',
    user: 'hmpg',
    password: 'wordpass',
    database: 'homepage',
});

export const db = {
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            pool.getConnection((error, conn) => {
                if (error) reject(error);
                conn.query(queryString, escapedValues, (error, results, fields) => {
                    if (error) reject(error);
                    resolve({ results, fields });
                })
            })
        }),
}
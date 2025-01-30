import mysql from 'mysql';

var pool  = mysql.createPool({
    host: '127.0.0.1',
    user: 'hmpg',
    password: 'wordpass',
    database: 'homepage',
});

export const db = {
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            pool.getConnection((error, conn) => {
                if (error) {
                    console.error('Error getting database connection:', error);
                    return reject(error);
                }
                conn.query(queryString, escapedValues, (queryError, results, fields) => {
                    conn.release();

                    if (queryError) {
                        console.error('Error executing query:', queryError);
                        return reject(queryError);
                    }
                    resolve({ results, fields });
                })
            })
        }),
}

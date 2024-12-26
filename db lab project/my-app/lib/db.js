import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',      // Replace with your MySQL host
  user: 'root',           // Replace with your MySQL user
  password: 'admin123',   // Replace with your MySQL password
  database: 'university_database', // Replace with your database name
});

export default pool;

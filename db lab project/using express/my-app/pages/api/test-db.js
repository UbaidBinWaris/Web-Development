import pool from '../../lib/db';

export default async function handler(req, res) {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    res.status(200).json({ result: rows[0].result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database connection failed.' });
  }
}

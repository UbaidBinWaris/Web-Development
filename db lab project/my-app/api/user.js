import db from '../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [rows] = await db.query('SELECT * FROM departments'); // Adjust your query
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    }
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    try {
      const result = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
      res.status(201).json({ message: 'User added', id: result.insertId });
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

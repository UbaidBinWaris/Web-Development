import pool from '../../lib/db';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const departments = await pool.query('SELECT department_id, department_name FROM departments');
      res.status(200).json(departments);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch departments' });
  }
}

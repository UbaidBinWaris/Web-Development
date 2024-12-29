import pool from '../../lib/db';

export default async function handler(req, res) {
  const { student_id } = req.query;

  if (req.method === 'GET' && student_id) {
    try {
      const [rows] = await pool.query(
        'SELECT * FROM students WHERE student_id = ?', [student_id]
      );
      if (rows.length > 0) {
        res.status(200).json(rows);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch student data' });
    }
  } else {
    res.status(400).json({ error: 'Invalid request' });
  }
}

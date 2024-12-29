// /api/student-data/[id].js
import pool from '../../lib/db';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const [student] = await pool.query('SELECT * FROM students WHERE student_id = ?', [id]);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch student data" });
  }
}

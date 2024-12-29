import pool from '../../lib/db';

export default async function handler(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM schedules, classrooms, faculty, courses WHERE schedules.course_id = courses.course_id AND schedules.room_id = classrooms.room_id AND schedules.faculty_id = faculty.faculty_id'); 
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

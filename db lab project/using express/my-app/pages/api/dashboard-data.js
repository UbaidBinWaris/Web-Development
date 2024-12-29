import pool from '../../lib/db';

export default async function handler(req, res) {
  try {
    const [[{ count: studentCount }]] = await pool.query('SELECT COUNT(student_id) AS count FROM students');
    const [[{ count: facultyCount }]] = await pool.query('SELECT COUNT(faculty_id) AS count FROM faculty');
    const [[{ count: enrollmentCount }]] = await pool.query('SELECT COUNT(enrollment_id) AS count FROM enrollments');
    const [[{ count: departmentCount }]] = await pool.query('SELECT COUNT(department_id) AS count FROM departments');

    // Respond with a JSON object
    res.status(200).json({
      students: studentCount,
      faculty: facultyCount,
      enrollments: enrollmentCount,
      departments: departmentCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

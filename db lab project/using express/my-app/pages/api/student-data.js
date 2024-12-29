import pool from "../../lib/db";

export default async function handler(req, res) {
  try {
    // Query to fetch student records
    const [rows] = await pool.query(`
      select * from students,departments where students.department_id = departments.department_id order by students.student_id ASC;
    `);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch student data" });
  }
}

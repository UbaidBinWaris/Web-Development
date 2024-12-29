import pool from "../../lib/db";

export default async function handler(req, res) {
  const { method, query } = req;

  try {
    if (method === "DELETE") {
      const { student_id } = query;

      // Validate required fields
      if (!student_id) {
        return res.status(400).json({ error: "Student ID is required" });
      }

      const result = await pool.query(
        "DELETE FROM students WHERE student_id = ?",
        [student_id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Student not found" });
      }

      res.status(200).json({ message: "Student deleted successfully" });
    } else {
      res.setHeader("Allow", ["DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ error: "Failed to delete student" });
  }
}

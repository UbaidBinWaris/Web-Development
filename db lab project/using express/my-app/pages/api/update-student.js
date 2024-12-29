import pool from "../../lib/db";

export default async function handler(req, res) {
  const { method, body, query } = req;

  try {
    if (method === "PUT") {
      const { student_id } = query;
      const { name, email } = body;

      // Validate required fields
      if (!student_id || !name || !email) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const result = await pool.query(
        "UPDATE students SET name = ?, email = ? WHERE student_id = ?",
        [name, email, student_id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Student not found" });
      }

      res.status(200).json({ message: "Student updated successfully" });
    } else {
      res.setHeader("Allow", ["PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ error: "Failed to update student" });
  }
}

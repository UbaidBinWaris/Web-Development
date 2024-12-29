import pool from "../../lib/db";

export default async function handler(req, res) {
  const { method, body } = req;

  try {
    if (method === "POST") {
      const { student_id, name, email } = body;

      // Validate required fields
      if (!student_id || !name || !email) {
        return res.status(400).json({ error: "All fields are required" });
      }

      await pool.query(
        "INSERT INTO students (student_id, name, email) VALUES (?, ?, ?)",
        [student_id, name, email]
      );

      res.status(200).json({ message: "Student added successfully" });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error inserting student:", error);
    res.status(500).json({ error: "Failed to add student" });
  }
}

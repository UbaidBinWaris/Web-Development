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

      // Start a transaction
      const connection = await pool.getConnection();
      try {
        await connection.beginTransaction();

        // Delete from related tables
        await connection.query("DELETE FROM enrollments WHERE student_id = ?", [student_id]);
        await connection.query("DELETE FROM fees WHERE student_id = ?", [student_id]);
        await connection.query("DELETE FROM students WHERE student_id = ?", [student_id]);

        // Commit the transaction
        await connection.commit();

        // Release the connection
        connection.release();

        return res.status(200).json({ message: "Student and related records deleted successfully" });
      } catch (error) {
        // Rollback the transaction on error
        await connection.rollback();
        connection.release();
        console.error("Error during transaction:", error);
        return res.status(500).json({ error: "Failed to delete student and related records" });
      }
    } else {
      res.setHeader("Allow", ["DELETE"]);
      return res.status(405).json({ error: `Method ${method} Not Allowed` });
    }
  } catch (error) {
    console.error("Error deleting student:", error);
    return res.status(500).json({ error: "Failed to delete student" });
  }
}

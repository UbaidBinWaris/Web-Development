import pool from "../../lib/db";

export default async function handler(req, res) {
  const { method, body } = req;

  if (method !== "POST") {
    return res.setHeader("Allow", ["POST"]).status(405).end(`Method ${method} Not Allowed`);
  }

  const { studentId, isbn } = body;

  try {
    // Check if the book is available
    const book = await pool.query("SELECT * FROM library WHERE isbn = ? AND status = 'Available'", [isbn]);
    if (book.length === 0) {
      return res.status(404).json({ error: "Book is not available or ISBN is invalid." });
    }

    // Mark the book as loaned
    await pool.query("UPDATE library SET status = 'Loaned', loaned_to_student_id = ? WHERE isbn = ?", [studentId, isbn]);
    res.status(200).json({ message: "Book loaned successfully." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to loan the book." });
  }
}

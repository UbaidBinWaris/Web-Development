import pool from "../../lib/db";

export default async function handler(req, res) {
  const { method, body } = req;

  if (method !== "POST") {
    return res.setHeader("Allow", ["POST"]).status(405).end(`Method ${method} Not Allowed`);
  }

  const { isbn } = body;

  try {
    const book = await pool.query("SELECT * FROM library WHERE isbn = ? AND status = 'Loaned'", [isbn]);
    if (book.length === 0) {
      return res.status(404).json({ error: "Book is not currently loaned or ISBN is invalid." });
    }

    // Mark the book as available
    await pool.query("UPDATE library SET status = 'Available', loaned_to_student_id = NULL WHERE isbn = ?", [isbn]);
    res.status(200).json({ message: "Book returned successfully." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to return the book." });
  }
}

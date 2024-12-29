import pool from '../../lib/db';

export default async function handler(req, res) {
  const { method, body } = req;

  try {
    if (method === 'POST') {
      const { isbn, title, author } = body;

      // Validate required fields
      if (!isbn || !title || !author) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Validate ISBN format (max 11 digits, all numeric)
      if (!/^\d{1,11}$/.test(isbn)) {
        return res.status(400).json({ error: 'ISBN must be a maximum of 11 digits and numeric.' });
      }

      // Check if the ISBN already exists in the database
      const [isbnCheck] = await pool.query('SELECT * FROM library WHERE isbn = ?', [isbn]);
      if (isbnCheck.length > 0) {
        return res.status(409).json({ error: 'ISBN already exists' });
      }

      // Insert the new book into the database
      await pool.query(
        'INSERT INTO library (title, author, status, isbn) VALUES (?, ?, ?, ?)',
        [title, author, 'Available', isbn]
      );

      return res.status(200).json({ message: 'Book added successfully' });
    } else {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to perform operation' });
  }
}

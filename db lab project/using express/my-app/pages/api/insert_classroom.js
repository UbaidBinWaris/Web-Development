import pool from '../../lib/db';

export default async function handler(req, res) {
  const { method, body } = req;

  try {
    if (method === 'POST') {
      // Insert a new classroom
      const { room_number, building, capacity } = body;

      // Validate required fields
      if (!room_number || !building || !capacity) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      await pool.query(
        'INSERT INTO classrooms (room_number, building, capacity) VALUES (?, ?, ?)',
        [room_number, building, capacity]
      );

      res.status(200).json({ message: 'Classroom added successfully' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to perform operation' });
  }
}

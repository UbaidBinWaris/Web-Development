export default async function handler(req, res) {
  const { method, body } = req;

  try {
    if (method === 'POST') {
      const { first_name, last_name, date_of_birth, phone_number, enrollment_date, email, phone, department_id } = body;
      await pool.query(
        'INSERT INTO students (first_name, last_name, date_of_birth, phone_number, enrollment_date, email, phone, department_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [first_name, last_name, date_of_birth, phone_number, enrollment_date, email, phone, department_id]
      );
      return res.status(200).json({ message: 'Student added successfully' });
    } else if (method === 'PUT') {
      const { student_id, first_name, last_name, email, phone, department } = body;
      await pool.query(
        'UPDATE students SET first_name = ?, last_name = ?, email = ?, phone = ?, department = ? WHERE student_id = ?',
        [first_name, last_name, email, phone, department, student_id]
      );
      return res.status(200).json({ message: 'Student updated successfully' });
    } else if (method === 'DELETE') {
      const { id } = body;
      await pool.query('DELETE FROM students WHERE id = ?', [id]);
      return res.status(200).json({ message: 'Student deleted successfully' });
    } else {
      res.setHeader('Allow', ['POST', 'PUT', 'DELETE']);
      return res.status(405).json({ error: `Method ${method} Not Allowed` });
    }
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Failed to perform operation' });
  }
}

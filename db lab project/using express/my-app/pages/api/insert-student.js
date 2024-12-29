import pool from "../../lib/db";

export default async function handler(req, res) {
  const { method, body } = req;

  try {
    if (method === "POST") {
      const {
        student_id,
        first_name,
        last_name,
        date_of_birth,
        enrollment_date,
        email,
        phone_number,
        department_id,
      } = body;

      // Validate required fields
      if (
        !student_id ||
        !first_name ||
        !last_name ||
        !date_of_birth ||
        !enrollment_date ||
        !email ||
        !phone_number ||
        !department_id
      ) {
        return res.status(400).json({ error: "All fields are required" });
      }

      console.log("Received data:", body);

      const query = `
        INSERT INTO students (student_id, first_name, last_name, date_of_birth, enrollment_date, email, phone_number, department_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [
        student_id,
        first_name,
        last_name,
        date_of_birth,
        enrollment_date,
        email,
        phone_number,
        department_id,
      ];

      const [result] = await pool.query(query, values);

      console.log("Insert result:", result);

      res.status(200).json({ message: "Student added successfully" });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error inserting student:", error.message);
    res.status(500).json({ error: "Failed to add student" });
  }
}

import mysql from 'mysql2';

export default async (req, res) => {
  // Crear conexión a la base de datos
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  // Hacer consulta SQL
  connection.query('SELECT * FROM servicios', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error en la consulta' });
    }
    res.status(200).json(results);
  });
};

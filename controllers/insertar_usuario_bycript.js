const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tienda'
});

connection.connect(async (err) => {
  if (err) {
    return console.error('Error de conexión:', err.message);
  }

  console.log('Conectado a la base de datos');

  const username = 'user';
  const plainPassword = 'user123';

  try {
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const sql = 'INSERT INTO usuarios (username, password) VALUES (?, ?) ON DUPLICATE KEY UPDATE password = VALUES(password)';
    const values = [username, hashedPassword];

    connection.query(sql, values, (error, results) => {
      if (error) {
        console.error('Error al insertar usuario:', error.message);
      } else {
        console.log('Usuario insertado o actualizado correctamente');
      }
      connection.end();
    });
  } catch (err) {
    console.error('Error al insertar usuario:', err.message);
    connection.end();
  }
});

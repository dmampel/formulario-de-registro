const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al abrir la base de datos', err);
    } else {
        console.log('Base de datos SQLite conectada.');
        db.run(`CREATE TABLE IF NOT EXISTS participantes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            email TEXT,
            edad INTEGER,
            pais TEXT,
            modalidad TEXT,
            tecnologias TEXT,
            nivel TEXT,
            aceptaTerminos INTEGER
        )`, (err) => {
            if (err) {
                console.error('Error creando tabla participantes', err);
            }
        });
    }
});

module.exports = db;

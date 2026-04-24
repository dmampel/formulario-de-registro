const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Evitar errores de favicon en la consola
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Evitar errores ruidosos de Chrome DevTools en la consola
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
    res.status(404).end();
});

app.get('/', (req, res) => {
    res.send('API de Participantes funcionando 🚀');
});

// 1. Obtener participantes GET /participantes
app.get('/participantes', (req, res) => {
    db.all('SELECT * FROM participantes', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // Convertir tecnologias de string a array y aceptaTerminos a boolean
        const formattedRows = rows.map(row => ({
            ...row,
            tecnologias: row.tecnologias ? JSON.parse(row.tecnologias) : [],
            aceptaTerminos: Boolean(row.aceptaTerminos)
        }));
        res.json(formattedRows);
    });
});

// 2. Crear participante POST /participantes
app.post('/participantes', (req, res) => {
    const { nombre, email, edad, pais, modalidad, tecnologias, nivel, aceptaTerminos } = req.body;
    db.run(
        'INSERT INTO participantes (nombre, email, edad, pais, modalidad, tecnologias, nivel, aceptaTerminos) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, email, edad, pais, modalidad, JSON.stringify(tecnologias), nivel, aceptaTerminos ? 1 : 0],
        function (err) {
            if (err) {
                console.error('Error al insertar en la base de datos:', err);
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({
                id: this.lastID,
                nombre, email, edad, pais, modalidad, tecnologias, nivel, aceptaTerminos
            });
        }
    );
});

// 3. Eliminar participante DELETE /participantes/:id
app.delete('/participantes/:id', (req, res) => {
    const id = req.params.id;
    db.run('DELETE FROM participantes WHERE id = ?', id, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: `Participante con id ${id} eliminado` });
    });
});

// 4. Actualizar participante PUT /participantes/:id
app.put('/participantes/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, email, edad, pais, modalidad, tecnologias, nivel, aceptaTerminos } = req.body;
    db.run(
        'UPDATE participantes SET nombre = ?, email = ?, edad = ?, pais = ?, modalidad = ?, tecnologias = ?, nivel = ?, aceptaTerminos = ? WHERE id = ?',
        [nombre, email, edad, pais, modalidad, JSON.stringify(tecnologias), nivel, aceptaTerminos ? 1 : 0, id],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (this.changes === 0) {
                return res.status(404).json({ error: 'Participante no encontrado' });
            }
            res.status(200).json({
                id: parseInt(id),
                nombre, email, edad, pais, modalidad, tecnologias, nivel, aceptaTerminos
            });
        }
    );
});

// 5. Resetear todos los datos (opcional para el botón de limpieza total en frontend)
app.delete('/participantes', (req, res) => {
    db.run('DELETE FROM participantes', [], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // Resetea el contador de ID
        db.run('DELETE FROM sqlite_sequence WHERE name="participantes"', [], () => {
            res.status(200).json({ message: 'Todos los datos eliminados' });
        });
    });
});


app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});

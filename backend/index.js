const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const db = require('./db');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'ultrasecret-key-tp7';

app.use(cors());
app.use(express.json());

// --- MIDDLEWARES ---

// Validar Token JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Token no proporcionado' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token inválido o expirado' });
        req.user = user;
        next();
    });
};

// Validar Rol
const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user.rol !== role) {
            return res.status(403).json({ error: 'Acceso denegado: permisos insuficientes' });
        }
        next();
    };
};

// --- ENDPOINTS AUTH ---

// Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM usuarios WHERE username = ? AND password = ?', [username, password], (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });

        const token = jwt.sign(
            { id: user.id, username: user.username, rol: user.rol },
            SECRET_KEY,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: { id: user.id, username: user.username, rol: user.rol }
        });
    });
});

// --- ENDPOINTS PARTICIPANTES ---

// Evitar errores de favicon en la consola
app.get('/favicon.ico', (req, res) => res.status(204).end());

app.get('/', (req, res) => {
    res.send('API de Participantes con JWT Funcionando 🔐');
});

// 1. Obtener participantes GET /participantes (Requiere Login)
app.get('/participantes', authenticateToken, (req, res) => {
    db.all('SELECT * FROM participantes', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        const formattedRows = rows.map(row => ({
            ...row,
            tecnologias: row.tecnologias ? JSON.parse(row.tecnologias) : [],
            aceptaTerminos: Boolean(row.aceptaTerminos)
        }));
        res.json(formattedRows);
    });
});

// 2. Crear participante POST /participantes (Requiere ADMIN)
app.post('/participantes', authenticateToken, authorizeRole('ADMIN'), (req, res) => {
    const { nombre, email, edad, pais, modalidad, tecnologias, nivel, aceptaTerminos } = req.body;
    db.run(
        'INSERT INTO participantes (nombre, email, edad, pais, modalidad, tecnologias, nivel, aceptaTerminos) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, email, edad, pais, modalidad, JSON.stringify(tecnologias), nivel, aceptaTerminos ? 1 : 0],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({
                id: this.lastID,
                nombre, email, edad, pais, modalidad, tecnologias, nivel, aceptaTerminos
            });
        }
    );
});

// 3. Eliminar participante DELETE /participantes/:id (Requiere ADMIN)
app.delete('/participantes/:id', authenticateToken, authorizeRole('ADMIN'), (req, res) => {
    const id = req.params.id;
    db.run('DELETE FROM participantes WHERE id = ?', id, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: `Participante con id ${id} eliminado` });
    });
});

// 4. Actualizar participante PUT /participantes/:id (Requiere ADMIN)
app.put('/participantes/:id', authenticateToken, authorizeRole('ADMIN'), (req, res) => {
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

// 5. Resetear todos los datos (Requiere ADMIN)
app.delete('/participantes', authenticateToken, authorizeRole('ADMIN'), (req, res) => {
    db.run('DELETE FROM participantes', [], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        db.run('DELETE FROM sqlite_sequence WHERE name="participantes"', [], () => {
            res.status(200).json({ message: 'Todos los datos eliminados' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});

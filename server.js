const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir les fichiers statiques depuis le dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route principale pour servir la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'accueil.html'));
});

// Route pour servir la page quiz.html
app.get('/quiz.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'quiz.html'));
});

// Route pour servir la page note.html
app.get('/note.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'note.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur en écoute sur le port ${PORT}`);
});

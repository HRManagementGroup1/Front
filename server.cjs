const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Statik dosyalar için projenin ana dizinini kullan
app.use(express.static(path.join(__dirname, 'src')));

// Login sayfa rotası
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'pages', 'login', 'login.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

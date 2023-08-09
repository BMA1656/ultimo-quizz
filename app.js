const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor HTTP usando Express!');
});


app.get('/task', (req, res) => {
  const taskList = [
    { id: 1, name: 'lavaer', descripcion: 'lava la ropa' },
    { id: 2, name: 'dormir', descripcion: 'cierra los ojos luego de 24h de explotacion laboral' },   
  ];
  res.json(taskList);
});


app.post('/task', (req, res) => {  
  const newTask = {id: 3, name: 'comer', descripcion: 'tengo hambre y huela a comida' };
  taskList.push(newTask);
  res.json({ message: 'Nueva tarea agregada al a litsa' });
});


app.get('/image/:username', (req, res) => {
  const { username } = req.params;
  if (username === 'ronny') {
    res.sendFile(__dirname + '/ronny_image.jpg'); 
  } else {
    res.send('Usuario no encontrado');
  }
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
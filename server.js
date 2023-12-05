import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;

const app = express();
const PORT = 3000;
app.listen(PORT , () => console.log(`el servidor esta escuchando en el port ${PORT}`)) 

const votos = [];

app.use(json());

app.post('/votar', (req, res) => {
  const { distrito, candidato } = req.body;

  const distritosValidos = ['zona1', 'zona2', 'zona3', 'zona4'];
  if (!distritosValidos.includes(distrito)) {
    return res.status(400).send('Zona no correspondiente');
  }

  const candidatosValidos = ['candidatoA', 'candidatoB', 'candidatoC', 'enblanco'];
  if (!candidatosValidos.includes(candidato)) {
    return res.status(400).send('Candidato no válido');
  }

  votos.push({ distrito, candidato });

  res.send('Voto cargado');
});

app.get('/votosGenerales', (req, res) => {
  const resultadosGenerales = votos.reduce((resultados, voto) => {
    resultados[voto.candidato] = (resultados[voto.candidato] || 0) + 1;
    return resultados;
  }, {});

  res.json({ generales: resultadosGenerales });
});


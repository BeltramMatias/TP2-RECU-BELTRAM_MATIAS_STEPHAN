const express = require('express');
const bodyParser = require('body-parser');
const VotosCasosDeUso = require('../casosDeUso/votosCasosDeUso');

const router = express.Router();
const votosCasosDeUso = new VotosCasosDeUso();

router.use(bodyParser.json());

router.post('/votar', (req, res) => {
  const { distrito, candidato } = req.body;
  votosCasosDeUso.cargarVoto(distrito, candidato);
  res.send('Voto cargado');
});

router.get('/votosGenerales', (req, res) => {
  const resultadosGenerales = votosCasosDeUso.obtenerVotosGenerales();
  res.json({ generales: resultadosGenerales });
});

module.exports = router;

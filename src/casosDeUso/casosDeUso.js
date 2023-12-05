const VotoDao = require('../dao/votosDao');
const Voto = require('../modelo/votosModelo').default;

class CasosDeUso {
  constructor() {
    this.votoDao = new VotoDao();
  }

  cargarVoto(distrito, candidato) {
    const nuevoVoto = new Voto(distrito, candidato);
    this.votoDao.agregarVoto(nuevoVoto);
  }

  obtenerVotosGenerales() {
    return this.votoDao.obtenerVotosGenerales();
  }
}

module.exports = CasosDeUso;

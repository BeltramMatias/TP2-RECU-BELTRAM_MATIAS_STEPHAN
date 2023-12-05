const Voto = require('../modelo/votosModelo').default;

class Votos {
  constructor() {
    this.votosGenerales = {
      candidatoA: 0,
      candidatoB: 0,
      candidatoC: 0,
      enblanco: 0,
    };
    this.votosPorZona = {
      zona1: { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 },
      zona2: { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 },
      zona3: { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 },
      zona4: { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 },
    };
  }

  cargarVoto(zona, candidato) {
    if (this.votosPorZona[zona] && this.votosGenerales[candidato] !== undefined) {
      this.votosPorZona[zona][candidato]++;
      this.votosGenerales[candidato]++;
      return 'Voto cargado';
    } else {
      return 'Zona no correspondiente o candidato no válido';
    }
  }

  obtenerVotosGenerales() {
    return { generales: this.votosGenerales };
  }
}


module.exports = Voto, Votos;

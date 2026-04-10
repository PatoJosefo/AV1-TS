import { TipoTeste, ResultadoTeste } from "./enums";

export class Teste {
  tipo: TipoTeste;
  resultado: ResultadoTeste;

  constructor(tipo: TipoTeste, resultado: ResultadoTeste) {
    this.tipo = tipo;
    this.resultado = resultado;
  }

  exibirDetalhes(): void {
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Resultado: ${this.resultado}`);
  }
}
import { TipoPeca, StatusPeca } from "./enums";

export class Peca {
  nome: string;
  tipo: TipoPeca;
  fornecedor: string;
  status: StatusPeca;

  constructor(
    nome: string,
    tipo: TipoPeca,
    fornecedor: string,
    status: StatusPeca
  ) {
    this.nome = nome;
    this.tipo = tipo;
    this.fornecedor = fornecedor;
    this.status = status;
  }

  atualizarStatus(novoStatus: StatusPeca): void {
    this.status = novoStatus;
    console.log(`Status da peça "${this.nome}" atualizado para: ${this.status}`);
  }

  exibirDetalhes(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Fornecedor: ${this.fornecedor}`);
    console.log(`Status: ${this.status}`);
  }
}
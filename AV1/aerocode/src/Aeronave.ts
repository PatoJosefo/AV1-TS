import { TipoAeronave } from "./enums";
import { Peca } from "./Peca";
import { Etapa } from "./Etapa";
import { Teste } from "./Teste";

export class Aeronave {
  codigo: string;
  modelo: string;
  tipo: TipoAeronave;
  capacidade: number;
  alcance: number;
  pecas: Peca[];
  etapas: Etapa[];
  testes: Teste[];

  constructor(
    codigo: string,
    modelo: string,
    tipo: TipoAeronave,
    capacidade: number,
    alcance: number
  ) {
    this.codigo = codigo;
    this.modelo = modelo;
    this.tipo = tipo;
    this.capacidade = capacidade;
    this.alcance = alcance;
    this.pecas = [];
    this.etapas = [];
    this.testes = [];
  }

  adicionarPeca(peca: Peca): void {
    this.pecas.push(peca);
    console.log(`Peça "${peca.nome}" adicionada à aeronave "${this.codigo}".`);
  }

  adicionarEtapa(etapa: Etapa): void {
    this.etapas.push(etapa);
    console.log(`Etapa "${etapa.nome}" adicionada à aeronave "${this.codigo}".`);
  }

  adicionarTeste(teste: Teste): void {
    this.testes.push(teste);
    console.log(`Teste "${teste.tipo}" adicionado à aeronave "${this.codigo}".`);
  }

  exibirDetalhes(): void {
    console.log(`\n=== AERONAVE ===`);
    console.log(`Código: ${this.codigo}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Capacidade: ${this.capacidade} passageiros`);
    console.log(`Alcance: ${this.alcance} km`);
    console.log(`Peças: ${this.pecas.length}`);
    console.log(`Etapas: ${this.etapas.length}`);
    console.log(`Testes: ${this.testes.length}`);
  }
}
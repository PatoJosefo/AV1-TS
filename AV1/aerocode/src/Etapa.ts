import { StatusEtapa } from "./enums";
import { Funcionario } from "./Funcionario";

export class Etapa {
  nome: string;
  prazo: string;
  status: StatusEtapa;
  funcionarios: Funcionario[];

  constructor(nome: string, prazo: string) {
    this.nome = nome;
    this.prazo = prazo;
    this.status = StatusEtapa.PENDENTE;
    this.funcionarios = [];
  }

  iniciar(): void {
    if (this.status !== StatusEtapa.PENDENTE) {
      console.log(`A etapa "${this.nome}" não pode ser iniciada pois não está pendente.`);
      return;
    }
    this.status = StatusEtapa.ANDAMENTO;
    console.log(`Etapa "${this.nome}" iniciada com sucesso!`);
  }

  finalizar(): void {
    if (this.status !== StatusEtapa.ANDAMENTO) {
      console.log(`A etapa "${this.nome}" não pode ser finalizada pois não está em andamento.`);
      return;
    }
    this.status = StatusEtapa.CONCLUIDA;
    console.log(`Etapa "${this.nome}" concluída com sucesso!`);
  }

  associarFuncionario(funcionario: Funcionario): void {
    const jaAssociado = this.funcionarios.find(f => f.id === funcionario.id);
    if (jaAssociado) {
      console.log(`Funcionário "${funcionario.nome}" já está associado a esta etapa.`);
      return;
    }
    this.funcionarios.push(funcionario);
    console.log(`Funcionário "${funcionario.nome}" associado à etapa "${this.nome}".`);
  }

  listarFuncionarios(): void {
    if (this.funcionarios.length === 0) {
      console.log(`Nenhum funcionário associado à etapa "${this.nome}".`);
      return;
    }
    console.log(`Funcionários da etapa "${this.nome}":`);
    this.funcionarios.forEach(f => f.exibirDetalhes());
  }

  exibirDetalhes(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Prazo: ${this.prazo}`);
    console.log(`Status: ${this.status}`);
    console.log(`Funcionários: ${this.funcionarios.length}`);
  }
}
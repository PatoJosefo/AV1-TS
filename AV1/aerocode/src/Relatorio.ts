import { Aeronave } from "./Aeronave";
import * as fs from "fs";

export class Relatorio {
  aeronave: Aeronave;
  nomeCliente: string;
  dataEntrega: string;

  constructor(aeronave: Aeronave, nomeCliente: string, dataEntrega: string) {
    this.aeronave = aeronave;
    this.nomeCliente = nomeCliente;
    this.dataEntrega = dataEntrega;
  }

  gerar(): string {
    let conteudo = "";

    conteudo += `===== RELATÓRIO FINAL DE ENTREGA =====\n`;
    conteudo += `Cliente: ${this.nomeCliente}\n`;
    conteudo += `Data de Entrega: ${this.dataEntrega}\n`;
    conteudo += `\n--- AERONAVE ---\n`;
    conteudo += `Código: ${this.aeronave.codigo}\n`;
    conteudo += `Modelo: ${this.aeronave.modelo}\n`;
    conteudo += `Tipo: ${this.aeronave.tipo}\n`;
    conteudo += `Capacidade: ${this.aeronave.capacidade} passageiros\n`;
    conteudo += `Alcance: ${this.aeronave.alcance} km\n`;

    conteudo += `\n--- PEÇAS UTILIZADAS ---\n`;
    if (this.aeronave.pecas.length === 0) {
      conteudo += `Nenhuma peça registrada.\n`;
    } else {
      this.aeronave.pecas.forEach((peca, i) => {
        conteudo += `${i + 1}. ${peca.nome} | Tipo: ${peca.tipo} | Fornecedor: ${peca.fornecedor} | Status: ${peca.status}\n`;
      });
    }

    conteudo += `\n--- ETAPAS REALIZADAS ---\n`;
    if (this.aeronave.etapas.length === 0) {
      conteudo += `Nenhuma etapa registrada.\n`;
    } else {
      this.aeronave.etapas.forEach((etapa, i) => {
        conteudo += `${i + 1}. ${etapa.nome} | Prazo: ${etapa.prazo} | Status: ${etapa.status}\n`;
      });
    }

    conteudo += `\n--- TESTES REALIZADOS ---\n`;
    if (this.aeronave.testes.length === 0) {
      conteudo += `Nenhum teste registrado.\n`;
    } else {
      this.aeronave.testes.forEach((teste, i) => {
        conteudo += `${i + 1}. Tipo: ${teste.tipo} | Resultado: ${teste.resultado}\n`;
      });
    }

    conteudo += `\n=====================================\n`;
    return conteudo;
  }

  salvar(): void {
    const conteudo = this.gerar();
    const nomeArquivo = `relatorio_${this.aeronave.codigo}.txt`;
    fs.writeFileSync(nomeArquivo, conteudo, "utf-8");
    console.log(`Relatório salvo em: ${nomeArquivo}`);
  }
}
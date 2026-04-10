import * as readline from "readline";
import * as fs from "fs";
import { Aeronave } from "./Aeronave";
import { Peca } from "./Peca";
import { Etapa } from "./Etapa";
import { Funcionario } from "./Funcionario";
import { Teste } from "./Teste";
import { Relatorio } from "./Relatorio";
import {
  TipoAeronave,
  TipoPeca,
  StatusPeca,
  StatusEtapa,
  NivelPermissao,
  TipoTeste,
  ResultadoTeste
} from "./enums";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* EasterEgg do Projeto aqui:
GaviaoArqueiroPiorVingador*/

const aeronaves: Aeronave[] = [];
const funcionarios: Funcionario[] = [];

function pergunta(texto: string): Promise<string> {
  return new Promise(resolve => rl.question(texto, resolve));
}

async function menuPrincipal(): Promise<void> {
console.log(`\n--- AEROCODE ---`);
console.log(`1. Cadastrar aeronave`);
console.log(`2. Listar aeronaves`);
console.log(`3. Cadastrar funcionário`);
console.log(`4. Gerenciar peças`);
console.log(`5. Gerenciar etapas`);
console.log(`6. Realizar testes`);
console.log(`7. Gerar relatório`);
console.log(`0. Sair`);

  const opcao = await pergunta(`\nDigite uma opção: `);

  switch (opcao.trim()) {
    case "1": await cadastrarAeronave(); break;
    case "2": listarAeronaves(); break;
    case "3": await cadastrarFuncionario(); break;
    case "4": await menuPecas(); break;
    case "5": await menuEtapas(); break;
    case "6": await menuTestes(); break;
    case "7": await gerarRelatorio(); break;
    case "0":
      console.log(`\nSaindo...`);
      rl.close();
      return;
    default:
      console.log(`\nOpção inválida, tente mais uma vez`);
  }

  await menuPrincipal();
}

async function cadastrarAeronave(): Promise<void> {
  console.log(`\n-- Nova aeronave --`);
  const codigo = await pergunta(`Código: `);

  const duplicado = aeronaves.find(a => a.codigo === codigo);
  if (duplicado) {
    console.log(`Esse código já está em uso`);
    return;
  }

  const modelo = await pergunta(`Modelo: `);
  console.log(`Tipo: 1-COMERCIAL | 2-MILITAR`);
  const tipoOpcao = await pergunta(`Escolha: `);
  const tipo = tipoOpcao === "1" ? TipoAeronave.COMERCIAL : TipoAeronave.MILITAR;
  const capacidade = parseInt(await pergunta(`Capacidade (passageiros): `));
  const alcance = parseInt(await pergunta(`Alcance (km): `));

  const aeronave = new Aeronave(codigo, modelo, tipo, capacidade, alcance);
  aeronaves.push(aeronave);
  console.log(`\nAeronave ${codigo} registrada`);
}

function listarAeronaves(): void {
  console.log(`\n-- Lista de aeronaves --`);
  if (aeronaves.length === 0) {
    console.log(`Nenhuma aeronave foi cadastrada no sistema ainda`);
    return;
  }
  aeronaves.forEach(a => a.exibirDetalhes());
}

async function cadastrarFuncionario(): Promise<void> {
  console.log(`\n-- Novo funcionário --`);
  const id = await pergunta(`ID: `);
  const nome = await pergunta(`Nome: `);
  const telefone = await pergunta(`Telefone: `);
  const endereco = await pergunta(`Endereço: `);
  const usuario = await pergunta(`Usuário: `);
  const senha = await pergunta(`Senha: `);
  console.log(`Nível: 1-ADMINISTRADOR | 2-ENGENHEIRO | 3-OPERADOR`);
  const nivelOpcao = await pergunta(`Escolha: `);

  let nivel = NivelPermissao.OPERADOR;
  if (nivelOpcao === "1") nivel = NivelPermissao.ADMINISTRADOR;
  else if (nivelOpcao === "2") nivel = NivelPermissao.ENGENHEIRO;

  const funcionario = new Funcionario(id, nome, telefone, endereco, usuario, senha, nivel);
  funcionarios.push(funcionario);
  console.log(`\nFuncionário ${nome} adicionado.`);
}

async function menuPecas(): Promise<void> {
  console.log(`\n-- Peças --`);
  const codigo = await pergunta(`Código da aeronave: `);
  const aeronave = aeronaves.find(a => a.codigo === codigo);

  if (!aeronave) {
    console.log(`Aeronave não encontrada!`);
    return;
  }

  console.log(`1. Adicionar peça`);
  console.log(`2. Listar peças`);
  console.log(`3. Atualizar status de peça`);
  const opcao = await pergunta(`Escolha: `);

  if (opcao === "1") {
    const nome = await pergunta(`Nome da peça: `);
    const fornecedor = await pergunta(`Fornecedor: `);
    console.log(`Tipo: 1-NACIONAL | 2-IMPORTADA`);
    const tipoOpcao = await pergunta(`Escolha: `);
    const tipo = tipoOpcao === "1" ? TipoPeca.NACIONAL : TipoPeca.IMPORTADA;
    const peca = new Peca(nome, tipo, fornecedor, StatusPeca.EM_PRODUCAO);
    aeronave.adicionarPeca(peca);

  } else if (opcao === "2") {
    aeronave.pecas.forEach(p => p.exibirDetalhes());

  } else if (opcao === "3") {
    const nomePeca = await pergunta(`Nome da peça: `);
    const peca = aeronave.pecas.find(p => p.nome === nomePeca);
    if (!peca) {
      console.log(`Peça não encontrada!`);
      return;
    }
    console.log(`Status: 1-EM_PRODUCAO | 2-EM_TRANSPORTE | 3-PRONTA`);
    const statusOpcao = await pergunta(`Escolha: `);
    if (statusOpcao === "1") peca.atualizarStatus(StatusPeca.EM_PRODUCAO);
    else if (statusOpcao === "2") peca.atualizarStatus(StatusPeca.EM_TRANSPORTE);
    else peca.atualizarStatus(StatusPeca.PRONTA);
  }
}

async function menuEtapas(): Promise<void> {
  console.log(`\n-- Etapas de producao --`);
  const codigo = await pergunta(`Código da aeronave: `);
  const aeronave = aeronaves.find(a => a.codigo === codigo);

  if (!aeronave) {
    console.log(`Aeronave não encontrada!`);
    return;
  }

  console.log(`1. Adicionar etapa`);
  console.log(`2. Iniciar etapa`);
  console.log(`3. Finalizar etapa`);
  console.log(`4. Associar funcionário à etapa`);
  console.log(`5. Listar etapas`);
  const opcao = await pergunta(`Escolha: `);

  if (opcao === "1") {
    const nome = await pergunta(`Nome da etapa: `);
    const prazo = await pergunta(`Prazo: `);
    const etapa = new Etapa(nome, prazo);
    aeronave.adicionarEtapa(etapa);

  } else if (opcao === "2") {
    const nome = await pergunta(`Nome da etapa: `);
    const etapa = aeronave.etapas.find(e => e.nome === nome);
    if (!etapa) { console.log(`Etapa não encontrada!`); return; }
    etapa.iniciar();

  } else if (opcao === "3") {
    const nome = await pergunta(`Nome da etapa: `);
    const etapa = aeronave.etapas.find(e => e.nome === nome);
    if (!etapa) { console.log(`Etapa não encontrada!`); return; }

    const index = aeronave.etapas.indexOf(etapa);
    if (index > 0 && aeronave.etapas[index - 1].status !== StatusEtapa.CONCLUIDA) {
      console.log(`Finalize a etapa anterior primeiro`);
      return;
    }
    etapa.finalizar();

  } else if (opcao === "4") {
    const nomeEtapa = await pergunta(`Nome da etapa: `);
    const etapa = aeronave.etapas.find(e => e.nome === nomeEtapa);
    if (!etapa) { console.log(`Etapa não encontrada!`); return; }

    const idFunc = await pergunta(`ID do funcionário: `);
    const funcionario = funcionarios.find(f => f.id === idFunc);
    if (!funcionario) { console.log(`Funcionário não encontrado!`); return; }
    etapa.associarFuncionario(funcionario);

  } else if (opcao === "5") {
    aeronave.etapas.forEach(e => e.exibirDetalhes());
  }
}

async function menuTestes(): Promise<void> {
  console.log(`\n-- Testes --`);
  const codigo = await pergunta(`Código da aeronave: `);
  const aeronave = aeronaves.find(a => a.codigo === codigo);

  if (!aeronave) {
    console.log(`Aeronave não encontrada!`);
    return;
  }

  console.log(`Tipo: 1-ELETRICO | 2-HIDRAULICO | 3-AERODINAMICO`);
  const tipoOpcao = await pergunta(`Escolha: `);
  let tipo = TipoTeste.ELETRICO;
  if (tipoOpcao === "2") tipo = TipoTeste.HIDRAULICO;
  else if (tipoOpcao === "3") tipo = TipoTeste.AERODINAMICO;

  console.log(`Resultado: 1-APROVADO | 2-REPROVADO`);
  const resultadoOpcao = await pergunta(`Escolha: `);
  const resultado = resultadoOpcao === "1" ? ResultadoTeste.APROVADO : ResultadoTeste.REPROVADO;

  const teste = new Teste(tipo, resultado);
  aeronave.adicionarTeste(teste);
  console.log(`Teste salvo com sucesso!`);
}

async function gerarRelatorio(): Promise<void> {
  console.log(`\n-- Relatorio final --`);
  const codigo = await pergunta(`Código da aeronave: `);
  const aeronave = aeronaves.find(a => a.codigo === codigo);

  if (!aeronave) {
    console.log(`Aeronave não encontrada!`);
    return;
  }

  const nomeCliente = await pergunta(`Nome do cliente: `);
  const dataEntrega = await pergunta(`Data de entrega: `);

  const relatorio = new Relatorio(aeronave, nomeCliente, dataEntrega);
  console.log(relatorio.gerar());
  relatorio.salvar();
}

menuPrincipal();
<h3 align="center"> Rafael Guimarães da Silva Oliveira </h3>
<h1 align="center"> AV1 - TypeScript - Aerocode </h1>


## 👀 Qual é o objetivo deste projeto

Estre projeto é uma atividade avaliativa da matéria de "Técnicas de Programação". O objetivo principal deste projeto é usar TypeScript para desenvolver um sistema CLI, com o objetivo de podermos preencher e cadastrar informações de diversos processos da produção de aeronaves. 
Nesse projeto, temos dados de aeronaves, funcionários, peças, etapas, testes e relatórios.
Com esse objetivo em mente, desenvolvi um projeto onde a empresa "aerocode" pode automatizar esse processo complicado utilizando CLI.

## 📝 Requisitos para utilizar este código

<img src="https://img.shields.io/badge/node.js-green?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"><br>

## ⚙️ Instalação

Clone este repositório e instale as seguintes dependências:

```bash
npm install
```

## 🛠️ Como rodar o projeto

Compile o projeto desta forma:

```bash
npx tsc
```

Execute o sistema:

```bash
node dist/index.js
```

## 📋 Funcionalidades deste projeto:

- Cadastro de aeronaves 
- Gerenciamento de peças
- Controle de etapas
- Cadastro de funcionários
- Registro de testes
- Geração de relatórios em texto

## 💻 Tecnologias

<table align="center">
  <tr>
    <th>Linguagens</th>
    <th>Ferramentas</th>
    <th>Bibliotecas & Ambientes</th>
  </tr>
  <tr valign="top">
    <td align="center">
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"><br>
      <img src="https://img.shields.io/badge/JavaScript-FFC30B?style=for-the-badge&logo=JavaScript&logoColor=black"/><br>
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/><br>
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/node.js-green?style=for-the-badge&logo=node.js&logoColor=white"/>
    </td>
  </tr>
</table>

## 🗂️ A estrutura original utilizada neste projeto

```
aerocode/
├── src/
│   ├── Aeronave.ts
│   ├── Etapa.ts
│   ├── Funcionario.ts
│   ├── Peca.ts
│   ├── Relatorio.ts
│   ├── Teste.ts
│   ├── enums.ts
│   └── index.ts
├── dist/
├── node_modules/
├── .gitgnore
├── package.json
├── package-lock.json
├── tsconfig.json
└── Readme.md
```

## 🖥️ Em quais sistemas operacionais esse código funciona

Este projeto é 100% compatível com os sistemas Windows e Linux, simultâneamente. Ele foi todo projetado com a intenção de funcionar em ambos os sistemas operacionais.

![Windows](https://img.shields.io/badge/Windows-0078D6?style=flat&logo=windows&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black)

## ⚠️ Disclaimer:

Não, esse README.md não foi feito por IA, sei bem que vc vai verificar isso, Gerson. Pode ficar em paz. Eu peguei algumas coisas dos meus projetos antigos pra poupar tempo, por exemplo, a tabela de tecnologias está no repositório do "ProjectAPI_SecondSemester", que eu mesmo fiz à mão, mas 99% disso foi feito por mim agora, até mesmo as poucas coisas que peguei em outros repositórios meus também sofreram alterações. Adoro fazer readme's, é bem legal. 
De resto, a única parte deste readme feito por IA é a "🗂️ A estrutura utilizada neste projeto", pq eu não queria escrever tudo isso na mão, mas modifiquei essa parte também sem IA. Enfim, espero que leia isso kkkkkkk (O easteregg está no código).
# Finova - Portal de Notícias e Gestão de Carteira de Investimentos

## Descrição

O Finova é uma aplicação web que permite aos usuários acompanhar notícias financeiras e gerenciar seus investimentos em ativos financeiros. A aplicação oferece funcionalidades para registrar, acompanhar e analisar investimentos, fornecendo aos usuários uma visão abrangente de seu patrimônio e desempenho financeiro.

**Nota:** Este aplicativo consome a API de notícias News API para fornecer informações financeiras atualizadas aos usuários.

## Funcionalidades Principais

### Registro de Ativos

Os usuários podem adicionar e editar informações sobre os ativos em sua carteira, incluindo:
- Símbolo do ativo
- Quantidade
- Data de aquisição
- Custo unitário

### Patrimônio Total

A aplicação calcula automaticamente o patrimônio total de cada usuário, somando o custo total de seus ativos. Isso fornece aos usuários uma visão clara de seu patrimônio financeiro.

### Acompanhamento em Tempo Real

Os usuários podem acompanhar o valor atual de seus ativos em tempo real, sempre que essa informação estiver disponível. Isso permite que os usuários tomem decisões informadas com base nas últimas informações do mercado.

**Nota:** O backend deste aplicativo utiliza a biblioteca Yfinance para obter dados de ativos financeiros em tempo real.

## Objetivo do Frontend

O frontend desta aplicação foi desenvolvido com o objetivo de consumir o backend construído com Flask. O frontend fornece uma interface amigável para os usuários gerenciarem seus investimentos e acessarem notícias financeiras em tempo real.

## Tecnologias Utilizadas

- Angular: O frontend da aplicação é desenvolvido com o framework Angular, proporcionando uma experiência de usuário interativa e responsiva.

- Flask: O backend da aplicação é construído em Flask, um framework Python para desenvolvimento web.

## Backend

O código-fonte do backend da aplicação Finova está localizado em um repositório separado no GitHub. Você pode acessá-lo [aqui](https://meulink.com).

## Interface Principal

Aqui está uma imagem da interface principal do aplicativo Finova:

![Interface Principal](https://i.imgur.com/pxPwWgy.png)

## Como Executar o Projeto

Siga as etapas abaixo para executar o projeto localmente:

1. Clone este repositório em sua máquina:

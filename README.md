# Finova - Portal de Notícias e Gestão de Carteira de Investimentos

![Logo do Finova](https://i.imgur.com/RELNipx.png)

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

**Nota:** O [Backend](https://github.com/lucasfrotabarroso14/Finova_Portal_Backend) deste aplicativo utiliza a biblioteca Yfinance para obter dados de ativos financeiros em tempo real.

## Objetivo do Frontend

O frontend desta aplicação foi desenvolvido com o objetivo de consumir o [Backend](https://github.com/lucasfrotabarroso14/Finova_Portal_Backend) construído com Flask. O frontend fornece uma interface amigável para os usuários gerenciarem seus investimentos e acessarem notícias financeiras em tempo real.

## Tecnologias Utilizadas

- Angular: O frontend da aplicação é desenvolvido com o framework Angular, proporcionando uma experiência de usuário interativa e responsiva.

- Flask: O [Backend](https://github.com/lucasfrotabarroso14/Finova_Portal_Backend) da aplicação é construído em Flask, um framework Python para desenvolvimento web.

## [Backend](https://github.com/lucasfrotabarroso14/Finova_Portal_Backend)

O código-fonte do [Backend](https://github.com/lucasfrotabarroso14/Finova_Portal_Backend) da aplicação Finova está localizado em um repositório separado no GitHub.

## Interface Principal

Aqui está uma imagem da interface principal do aplicativo Finova:

![Interface Principal](https://i.imgur.com/pxPwWgy.png)

## Redirecionamento para Sites de Notícias

Ao clicar no link "Leia Mais" no card de uma notícia, os usuários são redirecionados para o site da notícia correspondente, onde podem obter mais informações detalhadas.

## Status do Projeto

Este projeto está em desenvolvimento e ainda não está completo. Continuamos trabalhando para adicionar mais funcionalidades e aprimorar a experiência do usuário.



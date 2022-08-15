# Contabilizar
##### Teste técnico de programação
---

## Introdução

Este repositório contém um arquétipo cujo objetivo é prover um artefato para codificação de um desafio de programação, de nível básico, com o uso da linguaguem Javascript.

O propósito deste desafio é testar o conhecimento de uma pessoa em técnicas básicas de **Programação** e **Estrutura de Dados**.

Nas seções abaixo, o(a) candidato(a) encontrará as instruções sobre como deverá proceder para realizar o desafio.

Caso o(a) candidato(a) esteja participando de um processo seletivo, deverá considerar não apenas as instruções contidas nesse manual, mas também as instruções que forem repassadas pela organização que estiver promovendo o processo seletivo no qual esse repositório esteja sendo utilizado como referência para realização de um Teste Técnico.

**Por que Javascript?**

Atualmente existem dezenas de linguagens de programação sendo utilizadas para as mais diversas finalidades no mercado. Isso faz o desafio de elaborar um desafio de programação ser ainda mais complexo. Entendemos que Javascript, por ser uma linguagem de programação amplamente utilizada para o desenvolvimento de aplicações para plataforma web, permitindo ser executada apenas com o uso de um navegador, facilita tanto o processo de avaliação como o de implementação do desafio por parte do(a) candidato(a).

Caso o(a) candidato(a) não tenha familiaridade com Javscript, indicamos uma ótima referência para estudo, a documentação do [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference) sobre a linguagem.

## Orientações gerais

O(a) candidato(a) deverá realizar upload de arquivo ZIP com o conteúdo desse repositório, que pode ser obtido clicando no menu do botão Code e escolhendo a opção "Download ZIP".

Os arquivos contidos no ZIP baixado devem ser descompactados em uma mesma pasta.

O(a) candidato(a) então deverá alterar o conteúdo do arquivo **service.js**, adicionando código nas funções contidas nesse arquivo, conforme as instruções que serão descritas adiante.

Para testar o código implementado, o(a) candidato(o) deverá abrir o arquivo index.html em um navegador, o que geralmente é possível apenas com a execução de um duplo clique sobre ele.

Imagem do arquivo index.html aberto em um browser. Será esse o "frontend" do programa.

![Alt text](/assets/front.png?raw=true "Frontend")

Após terminar todas as implementações no arquivo service.js, todo o conteúdo da pasta deverá ser compactado em um novo arquivo ZIP, cujo o nome deverá conter o CPF do(a) candidato(a) (Exemplo: '07817548790.zip'). Por fim, esse arquivo deverá e ser enviado para a organização que promove o processo seletivo de acordo com as orientações indicadas por ela.

## Implementação

O arquivo service.js contém as 5 (cinco) funções destacadas na imagem abaixo.

O código do corpo de cada uma dessas funções deve ser implementada em conformidade com as regras que serão descritas adiante.

![Alt text](/assets/back.png?raw=true "Frontend")

### Regras a serem implementadas

#### Modelos de dados

Existem dois tipos de objeto que serão usados como parâmetros de entrada nas funções: o JSON **"lancamento"** (no singular) e o **"lancamentos"** (no plural).

Você deve considerar que o JSON lancamento (no singular) será um objeto que possui duas propriedades: cpf e valor. Exemplo:
```js
{ cpf: "07817548790", valor: 12.45 }
```

A propriedade **cpf** é uma string, enquanto a propriedade **valor** é um número.

Por sua vez, o JSON lancamentos (no plural) será um array de objetos do tipo lancamento (no singular). Exemplo:
```js
[{ cpf: "07817548790", valor: 12.45 }, { cpf: "92632334039", valor: 1234.65 }]
```

#### Regras de Negócio

1. Função **validarEntradaDeDados**
- Tipo do parâmetro de entrada: lancamento
- Tipos de retorno: string (mensagens de validação) ou null (todas as validações ok)


2. Função **recuperarSaldosPorConta**
- Tipo do parâmetro de entrada: lancamentos (todos os lançamentos registrados)
- Tipos de retorno: lancamentos (agrupados por CPF. Cada linha, um CPF.)


3. Função **recuperarMaiorMenorLancamentos**
- Tipo do parâmetro de entrada:
  - lancamentos (todos os lançamentos registrados)
  - string (CPF já validado, somente com números)
- Tipos de retorno: lancamentos (somente dois registros identificados na regra)


4. Função **recuperarMaioresSaldos**
- Tipo do parâmetro de entrada: lancamentos (todos os lançamentos registrados)
- Tipos de retorno: lancamentos (somente os três registros identificados na regra)


5. Função: **recuperarMaioresMedias**
- Tipo do parâmetro de entrada: lancamentos (todos os lançamentos registrados)
- Tipos de retorno: lancamentos (somente os três registros identificados na regra)

## Exemplo de Teste do programa

#### Entradas de dados:

Obs.: A sequência deve ser obedecida.

CPF       |Valor     |
------------|------------|


#### Saídas esperadas:

2. Painel Azul Claro (Saldos por CPF)

CPF       |Valor     |
------------|------------|

3. Painel Cinza (O maior e o menor lançamento do último CPF)

CPF       |Valor     |
------------|------------|

4. Painel Azul Escuro (Os três CPFs com maiores "médias")

CPF       |Valor     |
------------|------------|

5. Painel Amarelo (Três maiores saldos por CPF - do maior para o menor)

CPF       |Valor     |
------------|------------|


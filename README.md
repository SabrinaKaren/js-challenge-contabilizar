# Contabilizar
##### Teste técnico de programação
---

## Introdução

Este repositório contém um arquétipo cujo objetivo é prover um artefato para codificação de um desafio de programação, de nível básico, com o uso da linguaguem Javascript.

O propósito deste desafio é testar o conhecimento de uma pessoa em técnicas de **Programação** e **Manipulação de Dados**.

Nas seções abaixo, o(a) candidato(a) encontrará as instruções sobre como deverá proceder para realizar o desafio.

Caso o(a) candidato(a) esteja participando de um processo seletivo, deverá considerar não apenas as instruções contidas aqui, como também as instruções que forem fornecidas pela organização que estiver promovendo o processo seletivo.

**Por que Javascript?**

Atualmente existem dezenas de linguagens de programação sendo utilizadas para as mais diversas finalidades no mercado. Isso torna o desafio de elaborar um desafio de programação ainda mais complexo. Entendemos que Javascript, por ser uma linguagem de programação amplamente utilizada para o desenvolvimento de aplicações para diversas plataformas (em especial a web), facilita o processo de avaliação, vez que para esse tipo de conteúdo podemos usar o próprio navegador para executar os códigos, sem necessidade de configurações de ambiente.

Caso o(a) candidato(a) não tenha familiaridade com Javascript, indicamos uma ótima referência para estudo: a documentação do [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference) sobre a linguagem.

## Orientações gerais

O(a) candidato(a) deverá realizar upload do arquivo ZIP com o conteúdo desse repositório. Ele pode ser obtido clicando no menu do botão "Code"(na parte superior, mais à direita desta tela), escolhendo a opção "Download ZIP".

Os arquivos contidos no ZIP baixado devem ser descompactados em uma mesma pasta na máquina local.

Para realizar o desafio, o(a) candidato(a) deverá alterar o conteúdo do arquivo **service.js**, adicionando código nas funções contidas nesse arquivo, conforme as instruções que serão descritas adiante.

Para testar o código implementado, o(a) candidato(o) poderá abrir o arquivo index.html no navegador, o que geralmente é possível apenas com a execução de um duplo clique sobre ele.

Imagem do arquivo index.html aberto no navegador. Por meio dessa interface, o(a) candidato(a) poderá testar o código implementado.

Obs.: Como não estamos usando um armazenamento de dados persistente (banco de dados, storage...), lembre-se que caso a página seja recarregada, os dados precisarão ser adicionados novamente.

![Alt text](/assets/front.png?raw=true "Frontend")

### Entrega

Se esse desafio estiver sendo realizado no contexto de um processo seletivo, a entrega do desafio deverá ser realizada em conformidade com as orientações da organização que promove o processo.

Sugerimos às organizações que estiverem usando esse desafio como referência, que solicite o(a) candidato(a), após terminar a codificação das funções contidas no arquivo **service.js**, crie um novo arquivo ZIP, cujo o nome corresponda ao CPF do(a) candidato(a) (Exemplo: 07817548790.zip), enviando para um email ou realizando o upload em um site.

Isso pode facilitar a implemetação de uma correção preliminar automatizada.

Se vc estiver realizando esse desafio de forma avulsa, sem estar participando de um processo seletivo, pode enviar o arquivo ZIP com a solução para o email: contato@marcelo.dev.br. Assim que possível, logo que possível daremos um retorno.

## Case

### Contexto de Negócio

Considerando tratar de um desafio, buscamos criar um cenário que reflita situações pelas quais vivenciamos como desenvolvedores de software no dia-a-dia.

Esse desafio simula o que poderiam ser consideradas funções de um sistema de Contabilidade, mais especificamente de um módulo de análise de dados.

Por se tratar de uma cenário hipotético, essas funções podem parecer não fazer qualquer sentido no mundo real, embora o conhecimento em técnicas de programação e manipulação de dados, exigidas do(a) candidato(a) para que realize a implementação, sejam exatamente as mesmas que seriam exigidas em uma cenário real.

### Implementação

O arquivo service.js contém as 5 (cinco) funções destacadas na imagem abaixo.

![Alt text](/assets/back.png?raw=true "Frontend")

O código do corpo de cada uma dessas funções deve ser implementado em conformidade com as regras que serão descritas adiante.

Para um melhor entendimento das regras, além da descrição, o(a) candidato(a) poderá usar da interpretação dos dados de entrada e saída presentes na seção **Exemplo de Teste do programa**.

O nome de cada função também é sugestivo. Embora o candidato só possa alterar o arquivo **service.js** é facultado analisar o código dos demais arquivos contidos no repositório, afim de entender o propósito do código a ser implementado.

A capacidade de interpretar os requisitos, mesmo em casos que a especificação não seja detalhada, também faz parte do rol de habilidades de um bom desenvolvedor e é comum que esses aspectos também seja considerados pelos avaliadores no momento de decidir pela contratação, ou não, do(a) candidato(a).

Ainda assim, caso o(a) candidato(a) tenha dúvidas, poderá usar os meios fornecidos pela organização que estiver promovendo o processo seletivo, ou no caso de estar realizando o desafio de forma avulsa, pode enviar um mensagem com as dúvidas para: contato@marcelo.dev.br. Logo que possível, daremos um retorno.

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

Obs.: Para validações e outros cálculos, o(a) candidato(a) poderá criar funções auxiliares (até mesmo capturar funções na internet para usar no código), mas **não deve modificar as assinaturas das funções existentes**.

1. Função **validarEntradaDeDados**
- Tipo do parâmetro de entrada: lancamento
- Tipos de retorno: string (mensagens de validação) ou null (se todas as validações estiverem)
Esta função recebe um objeto (lancamento) contendo os valores digitados pelo usuário. Esses valores deverão ser analisados conforme as regras abaixo. Caso uma ou mais regras não sejam atendidas, uma mensagem de validação informando quais regras não foram atendidas deverá ser retornada na função. Se todas as regras forem atendidas a função deverá retornar null.
   - CPF deve conter apenas caracteres núméricos.
   - O dígito verificador do CPF deve ser válido.
   - Valor deve ser numérico.
   - Valor não pode ser superior a R$ 15.000,00.
   - Valor não pode ser inferior a R$ 2.000,00.
Obs.: Para realizar o cálculo do dígito verificador do CPF e saber se o valor informado é válido, poderá o(a) candidato(a) utilizar uma função obtida por meio de pesquisa na Internet, desde que se certifique que essa função esteja funcionando corretamente. A habilidade para realizar a pesquisa e adição de código obtido externamente faz parte dos critérios de avaliação, pois representa uma rotina comum no dia-a-dia dos desenvolvedores.

2. Função **recuperarSaldosPorConta**
- Tipo do parâmetro de entrada: lancamentos (todos os lançamentos registrados)
- Tipo de retorno: lancamentos (Em cada linha o CPF e o respectivo saldo)
Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo em cada linha um CPF e o valor do respectivo saldo. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.

3. Função **recuperarMaiorMenorLancamentos**
- Tipo do parâmetro de entrada:
  - lancamentos (todos os lançamentos registrados)
  - string (CPF já validado, somente com números)
- Tipo de retorno: lancamentos (somente dois registros, conforme solicitado na regra)
Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo, no máximo, dois registros, sendo um deles com o maior e outro com o menor valor lançado para o CPF recebido como parâmetro. Havendo menos de dois lançamentos registrados para o respectivo CPF, os dois registros (maior e menor) contidos no array de retorno deverão ser idênticos. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.

4. Função **recuperarMaioresSaldos**
- Tipo do parâmetro de entrada: lancamentos (todos os lançamentos registrados)
- Tipo de retorno: lancamentos (somente três registros, conforme solicitado na regra)
Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo, no máximo, três registros correspondentes aos CPFs com maiores saldos. Para cada lançamento deverá ser exibido o saldo do respectivo CPF. Havendo menos de três diferentes CPFs nos registros, deve ser retornado no array quantos forem possível. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.

5. Função: **recuperarMaioresMedias**
- Tipo do parâmetro de entrada: lancamentos (todos os lançamentos registrados)
- Tipos de retorno: lancamentos (somente os três registros identificados na regra)
Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo, no máximo, três registros correspondentes aos CPFs com maiores saldos médios. O saldo médio deve corresponder à "MÉDIA" dos valores registros para o respectivo CPF. Havendo menos de três diferentes CPFs nos registros, deve ser retornado no array quantos forem possível. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.

## Exemplo de Teste do programa

#### Entradas de dados:

Obs.: A sequência deve ser obedecida.

CPF       |Valor     |
------------|------------|
74914372061 | R$ 1.234,78
74914372061 |-R$ 123,56
74914372061 |-R$ 865,00
41421980096 |-R$ 987,00
41421980096 | R$ 123,00
41421980096 |-R$ 1.225,90
05987701007 | R$ 1.267,39
05987701007 | R$ 143,90
05987701007 | R$ 23,40
93975495022 | R$ 1.943,00
93975495022 | R$ 8.000,21
93975495022 | R$ 546,78

#### Saídas esperadas:

##### Painel Azul Claro (Saldos por CPF - Na sequência em que os CPFs foram digitados):

CPF       |Valor     |
------------|------------|
05987701007 | R$ 1.434,69
41421980096 | R$ 2.089,90
74914372061 | R$ 246,22
93975495022 | R$ 10.489,99

##### Painel Cinza (O maior e o menor lançamento do último CPF - Do menor para o maior):

CPF       |Valor     |
------------|------------|
93975495022 | R$ 546,78
93975495022 | R$ 8.000,21

##### Painel Azul Escuro (Os três CPFs com maiores "médias" - Da maior para a menor):

CPF       |Valor     |
------------|------------|
93975495022 | R$ 3.496,66
05987701007 | R$ 478,23
74914372061 | R$ 82,07

##### Painel Amarelo (Três maiores saldos por CPF - do maior para o menor):

CPF       |Valor     |
------------|------------|
93975495022 | R$ 10.489,99
41421980096 | R$ 2.089,90
05987701007 | R$ 1.434,69

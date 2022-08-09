const validarEntradaDeDados = (lancamento) => {
    //TODO validar entrada de dados
    /*
    Exemplo de lancamento: { cpf: '07817548790', valor: 1234.65 }
    Essa função deve retornar nulo, caso todas as critérios abaixo sejam atendidas.
    Se um ou mais critérios não forem atendidos, a função deve retornar uma string contendo uma mensagem informado os critérios não atendidos.
    - CPF deve ser válido
    - Valor deve estar entre 15000 e -2000
    */

}

const recuperarSaldosPorConta = (lancamentos) => {
    //TODO retornar lista com o saldo de cada os cpfs
    /*
    Exemplo de lancamentos: [{ cpf: '07817548790', valor: 1234.65 }, { cpf: '50133244083', valor: 4523.35 }, { cpf: '07817548790', valor: 45.98 }...]
    Exemplo de retorno da função: [{ cpf: '07817548790', valor: 4232.65 }, { cpf: '50133244083', valor: 5673.34 }...]
    */
}

const recuperarUltimosLancamentos = (cpf, lancamentos) => {
    //TODO retornar lista com os três últimos lançamentos do cpf
    /*
    Exemplo de lancamentos: [{ cpf: '07817548790', valor: 1234.65 }, { cpf: '50133244083', valor: 4523.35 }, { cpf: '07817548790', valor: 45.98 }...]
    Exemplo de retorno da função: [{ cpf: '07817548790', valor: 4232.65 }, { cpf: '07817548790', valor: 45.98 }, { cpf: '07817548790', valor: 23.98 }]
    */
}

const recuperarMaioresSaldos = (lancamentos) => {
    //TODO retornar lista com os três maiores saldos
    /*
    Exemplo de lancamentos: [{ cpf: '07817548790', valor: 1234.65 }, { cpf: '50133244083', valor: 4523.35 }, { cpf: '07817548790', valor: 45.98 }...]
    Exemplo de retorno da função: [{ cpf: '07817548790', valor: 1234.65 }, { cpf: '50133244083', valor: 5673.34 }, { cpf: '16237364048', valor: 5673.34 }]
    */
}


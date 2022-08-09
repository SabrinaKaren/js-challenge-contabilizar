$('#valor').maskMoney();

const lancamentos = []

const salvarLancamento = () => {
    
    let inputCpf = document.getElementById('cpf')
    let inputValor = document.getElementById('valor')
    let inputRegistrar = document.getElementById('registrar')

    inputCpf.setAttribute('disabled', true)
    inputValor.setAttribute('disabled', true)
    inputRegistrar.setAttribute('disabled', true)

    setTimeout(() => {
        try {
            let lancamento = { 
                cpf: inputCpf.value == '' ? null : inputCpf.value, 
                valor: inputValor.value == '' ? null :  inputValor.value
            }
            let mensagemValidacao = validarEntradaDeDados(lancamento)
            if (mensagemValidacao) {
                alert(mensagemValidacao)
            } else {
                lancamentos.push(lancamento)
                atualizarPaineis(inputCpf.value);
                alert('Lançamento registrado com sucesso!')
            }
        } finally {
            inputCpf.removeAttribute('disabled')
            inputValor.removeAttribute('disabled')
            inputRegistrar.removeAttribute('disabled')
            inputCpf.focus()
        }
    }, 1000)

}

const atualizarPaineis = (cpf) => {
    limparCampos()
    atualizarPainelSaldosPorConta()
    atualizarPainelUltimosLancamentos(cpf)
    atualizarPainelMaioresSaldos()
}

const limparCampos = () => {
    document.getElementById('cpf').value = null
    document.getElementById('valor').value = null
}

const atualizarPainelSaldosPorConta = () => {
    let tbody = document.getElementById('saldosPorConta')
    atualizarPainel(tbody, recuperarSaldosPorConta(lancamentos))
}

const atualizarPainelUltimosLancamentos = (cpf) => {
    let tbody = document.getElementById('ultimosLancamentos')
    atualizarPainel(tbody, recuperarUltimosLancamentos(cpf, lancamentos))
}

const atualizarPainelMaioresSaldos = () => {
    let tbody = document.getElementById('maioresSaldos')
    atualizarPainel(tbody, recuperarMaioresSaldos(lancamentos))
}

const atualizarPainel = (tbody, lancamentosProcessados) => {
    tbody.innerHTML = ''
    for(const lancamento of lancamentosProcessados) {
        let th = document.createElement('th')
        th.setAttribute('scope', 'row') 
        th.innerHTML = lancamento.cpf
        let td = document.createElement('td')
        td.innerHTML = lancamento.valor
        let tr = document.createElement('tr')
        tr.appendChild(th)
        tr.appendChild(td)
        tbody.appendChild(tr)
    }
}
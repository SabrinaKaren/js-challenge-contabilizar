const lancamentos = []

const salvarLancamento = () => {
    
    const inputCpf = document.getElementById('cpf')
    const inputValor = document.getElementById('valor')
    const inputRegistrar = document.getElementById('registrar')

    const disableInput = (input) => input.setAttribute('disabled', true)
    disableInput(inputCpf)
    disableInput(inputValor)
    disableInput(inputRegistrar)

    setTimeout(() => {
        try {
            const lancamento = { 
                cpf: inputCpf.value == '' ? null : inputCpf.value, 
                valor: Number(inputValor.value) == '' ? null :  Number(inputValor.value)
            }
            const mensagemValidacao = validarEntradaDeDados(lancamento)
            if (mensagemValidacao) {
                alert(mensagemValidacao)
            } else {
                lancamentos.push(lancamento)
                atualizarPaineis(inputCpf.value);
                alert('Lançamento registrado com sucesso!')
            }
        } finally {
            const enableInput = (input) => input.removeAttribute('disabled')
            enableInput(inputCpf)
            enableInput(inputValor)
            enableInput(inputRegistrar)
            inputCpf.focus()
        }
    }, 1000)

}

const atualizarPaineis = (cpf) => {

    const atualizarPainel = (tbody, lancamentosProcessados) => {
        tbody.innerHTML = ''
        for(const lancamento of lancamentosProcessados) {
            const th = document.createElement('th')
            th.setAttribute('scope', 'row') 
            th.innerHTML = lancamento.cpf
            const td = document.createElement('td')
            td.innerHTML = (Math.round(lancamento.valor * 100) / 100).toFixed(2).replace(',','').replace('.',',')
            const tr = document.createElement('tr')
            tr.appendChild(th)
            tr.appendChild(td)
            tbody.appendChild(tr)
        }
    }

    document.getElementById('cpf').value = null
    document.getElementById('valor').value = null
    atualizarPainel(document.getElementById('saldosPorConta'), recuperarSaldosPorConta(lancamentos))
    atualizarPainel(document.getElementById('ultimosLancamentos'), recuperarMaiorMenorLancamentos(cpf, lancamentos))
    atualizarPainel(document.getElementById('maioresSaldos'), recuperarMaioresSaldos(lancamentos))
    atualizarPainel(document.getElementById('maioresMedias'), recuperarMaioresMedias(lancamentos))

}

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyT' && (event.ctrlKey || event.metaKey)) {
        lancamentos.push({cpf:'74914372061',valor:1234.78})
        lancamentos.push({cpf:'74914372061',valor:-123.56})
        lancamentos.push({cpf:'74914372061',valor:-865.00})
        lancamentos.push({cpf:'41421980096',valor:-987})
        lancamentos.push({cpf:'41421980096',valor:123})
        lancamentos.push({cpf:'41421980096',valor:-1225.9})
        lancamentos.push({cpf:'05987701007',valor:1267.39})
        lancamentos.push({cpf:'05987701007',valor:143.9})
        lancamentos.push({cpf:'05987701007',valor:23.4})
        lancamentos.push({cpf:'93975495022',valor:1943})
        lancamentos.push({cpf:'93975495022',valor:8000.21})
        lancamentos.push({cpf:'93975495022',valor:546.78})
        atualizarPaineis('93975495022');
    }
});

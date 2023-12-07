function handleButtonClick(){
    const agendamento = { 
        nome: document.getElementById("nome").value,
        celular: document.getElementById("celular").value,
        servico: document.getElementById("servico").value,
        data: document.getElementById("data").value,
        horario: document.getElementById("horario").value
    }

    // faz uma solicitação POST dos dados para o endpoint /api/agendamento
    fetch('/api/agendamento', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(agendamento)
    })
}
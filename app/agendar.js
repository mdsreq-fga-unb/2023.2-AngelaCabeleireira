const agendamento = { 
    nome: document.getElementById("nome"),
    celular: document.getElementById("celular"),
    servico: document.getElementById("servico"),
    data: document.getElementById("data"),
    horario: document.getElementById("horario")
}

const handleButtonClick = () => {
    // faz uma solicitação POST dos dados para o endpoint /api/agendamento
    fetch('/api/agendamento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(agendamento)
    })
}
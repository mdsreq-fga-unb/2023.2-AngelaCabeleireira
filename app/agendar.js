const nome = document.getElementById("nome")
const celular = document.getElementById("celular")

const handleButtonClick = () => {
    const agendamento = { nome: nome.value, celular: celular.value }
    // faz uma solicitação POST dos dados para o endpoint /api/agendamento 
    fetch('/api/agendamento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(agendamento)
    })
}
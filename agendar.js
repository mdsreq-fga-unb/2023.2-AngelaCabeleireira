const nome = document.getElementById("nome")
const celular = document.getElementById("celular")
const pibid = document.getElementById("pibid")

const handleButtonClick = () => {
    const agendamento = {nome: nome.value, celular: celular.value, pibid: pibid.checked}
    // faz uma solicitação POST dos dados para o endpoint /api/agendamento 
    fetch('http://localhost:3000/api/agendamento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(agendamento)
    })
}
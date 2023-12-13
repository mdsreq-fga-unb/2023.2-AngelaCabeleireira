export function criarAgendamento(agendamento){
    // faz um POST dos dados para o endpoint /api/agendamento
    fetch('/api/agendamento', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(agendamento)
    }).then(res => {
        if (res.ok) {
            window.alert(`AGENDAMENTO RECEBIDO`)
        } else {
            throw new Error('Erro ao criar agendamento')
        }
    }).catch(error => console.error(error))
}
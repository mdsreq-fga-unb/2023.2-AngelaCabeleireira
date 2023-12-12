window.excluirAgendamento = function(){
    const agendamento = { servico: document.getElementById('servico').value,
                          data: documentgetElementById('data').value,
                          horario: document.getElementById('horario').value }
    fetch(`/api/deletar?servico=${encodeURIComponent(agendamento.servico)}&data=${encodeURIComponent(agendamento.data)}&horario=${encodeURIComponent(agendamento.horario)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.resultado == null)
            window.alert('Agendamento não encontrado!\nConfira os dados digitados.')

        console.log(data)
        document.write(`Agendamento apagado:\nServiço: ${data.servico}\nData e horário: ${data.data} às ${data.horario}.`)
    })
    .catch(error => {
        console.error('Erro ao encontrar agendamento:', error)
    });
}
window.encontrarAgendamento = function(){
    const celular = document.getElementById('celular').value
    // Utiliza parâmetros de consulta na URL para passar o número de celular
    fetch(`/api/finder?celular=${encodeURIComponent(celular)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data == null)
            window.alert('Agendamento não encontrado!\nConfira o número digitado.')

        console.log(data)
        document.write(`Agendamento encontrado:\nServiço: ${data.servico}\nData e horário: ${data.data} às ${data.horario}.`)
    })
    .catch(error => {
        console.error('Erro ao encontrar agendamento:', error)
    });
}

window.indisponiveis = function(){
    const dados = {data: document.getElementById('data').value,
                   horario: document.getElementById('horario').value}
    fetch(`/api/indisponiveis?data=${encodeURI(dados.data)}&horario=${dados.horario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    })
}
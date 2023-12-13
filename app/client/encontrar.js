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
    })
}
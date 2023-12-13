window.excluirAgendamento = function(){
    const time = document.getElementById('horario').value                        //pega o valor do horario selecionado
    const formattedTime = time.slice(0, 2) + ' : ' + time.slice(3)               //muda o formato de 08:00  para 08 : 00 (esse espaço entre : e os numeros eh importante no db)

    const date = document.getElementById('data').value                           //pega o valor da data no formato "2023-12-16"
    const partesData = date.split('-')                                           //divide a data em partes
    const formattedDate = `${partesData[2]}/${partesData[1]}/${partesData[0]}`   //junta as partes dividas na ordem "16/12/2023"


    const agendamento = { servico: document.getElementById('servico').value,
                          data: formattedDate,
                          horario: formattedTime }
    fetch(`/api/deletar?servico=${encodeURIComponent(agendamento.servico)}&data=${encodeURIComponent(agendamento.data)}&horario=${encodeURIComponent(agendamento.horario)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.r.deletedCount == 0 || data.r == null) {
            window.alert('Não há agendamento com os dados informados.')
            console.log('Não há agendamento com os dados informados.')
            console.log(data.r)
            console.log(data.d)
        } else {
            console.log(data.d)
            const div = document.getElementById("deletado") 
            div.innerHTML = `Agendamento apagado:\nServiço: ${data.d.servico}\nData e horário: ${data.d.data} às ${data.d.horario}.`
        }
    })
    .catch(error => {   
        console.error('Erro ao encontrar agendamento:', error)
    })
}
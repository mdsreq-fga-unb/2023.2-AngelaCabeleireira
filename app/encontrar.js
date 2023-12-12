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
        // Trate os dados recebidos aqui
        console.log(data)
    })
    .catch(error => {
        console.error('Erro ao encontrar agendamento:', error)
    });
}

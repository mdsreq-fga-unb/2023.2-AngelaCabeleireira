window.indisponiveis = async function() {
    try {
        const date = document.getElementById('data').value
        console.log(date)
        const partesData = date.split('-')
        console.log(partesData)
        const formattedDate = `${partesData[2]}/${partesData[1]}/${partesData[0]}`
        console.log(formattedDate)
        const response = await fetch(`/api/unavailable?data=${encodeURIComponent(formattedDate)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
        const data = await response.text()
        console.log(data)
        const div = document.getElementById("resultado") // Corrigir o id do elemento
        div.innerHTML = `${data}`
    } catch (error) {
        console.error(error)
        throw new Error('Erro ao verificar indisponibilidade')
    }
}

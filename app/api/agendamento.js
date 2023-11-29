export default (req, res) => {
    let body = ''
    req.on('data', chunk => {
        body += chunk.toString()
    })

    req.on('end', () => {
        const agendamento = JSON.parse(body)
        console.log(agendamento)
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'X-Content-Type-Options': 'nosniff'
        })
        res.end(JSON.stringify({ message: 'Agendamento recebido' }))
    })
}

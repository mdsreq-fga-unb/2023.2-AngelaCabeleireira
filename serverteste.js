import http from 'http'
import url from 'url'

const port = 3000
// cria o server
const server = http.createServer((req, res) => {
    // tive que adicionar isso para resolver problemas de politicas de CORS dos navegadores
    if (req.method === 'OPTIONS') {
        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type'
        })
        res.end()
        return
    }
    // quando houver um POST no endpoint pega os dados recebido e da um console.log
    if (req.method === 'POST' && url.parse(req.url).pathname === '/api/agendamento') {
    let body = ''
    req.on('data', chunk => {
        body += chunk.toString()
    })

    req.on('end', () => {
        const agendamento = JSON.parse(body)
        // aqui o server so da um log dos dados recebidos mas tem que fazer ele enviar esses dados pro bot e o bot usar pra confirmacao
        console.log(agendamento)
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type'
        })
        res.end(JSON.stringify({ message: 'Agendamento recebido' }))
    })
} else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Deu ruim')
}

})

server.listen(port, () => console.log(`listening on ${port}`))

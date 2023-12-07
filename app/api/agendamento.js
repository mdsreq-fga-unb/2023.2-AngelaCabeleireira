import { handleCriarAgendamento } from "../db/controllers/agendamentoController.js"
//politicas CORS
export default async (req, res) => {
    let body = ''
    req.on('data', chunk => {
        body += chunk.toString()
    })

    req.on('end', async () => {
        try {
            const agendamento = JSON.parse(body)
            await handleCriarAgendamento(req, res, agendamento)
        } catch (error) {
            if (!res.headersSent) {
                res.writeHead(500, {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'X-Content-Type-Options': 'nosniff'
                })
                res.end(JSON.stringify({ message: 'Erro ao processar agendamento', error: error.message }))
            }
        }
    })
}

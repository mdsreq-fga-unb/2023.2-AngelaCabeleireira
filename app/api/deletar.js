import { apagarAgendamento } from "../db/models/agendamentoModel.js"

export default async (req, res) => {
    try {
        const dados = { servico: req.query.servico,
                          data: req.query.data,
                          horario: req.query.horario }
        const resultado = await apagarAgendamento(dados)
        res.status(200).json( resultado )
    } catch (error) {
        res.status(500).json({ message: 'Erro', error: error.message })
    }
}
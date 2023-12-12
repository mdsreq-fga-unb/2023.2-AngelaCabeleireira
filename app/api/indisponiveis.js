import { indisponivel } from "../db/models/agendamentoModel.js"

export default async (req, res) => {
    try {
        const dados = { data: req.query.data,
                        horario: req.query.horario }
        const resultado = await indisponivel(dados)
        res.status(200).json({ resultado: resultado })
    } catch (error) {
        res.status(500).json({ message: 'Erro', error: error.message })
    }
}
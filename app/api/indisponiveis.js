import { indisponivel } from "../db/models/agendamentoModel.js"

export default async (req, res) => {
    try {
        const dados = req.query.json({data: data, horario: horario})
        const resultado = await indisponivel(dados)
        res.status(200).json({ resultado: resultado })
    } catch (error) {
        res.status(500).json({ message: 'Erro', error: error.message })
    }
}
import { indisponivel } from "../db/models/agendamentoModel.js"

export default async (req, res) => {
    try {
        const data = req.query.data
        const resultado = await indisponivel(data)
        res.status(200).json(resultado)
    } catch (error) {
        res.status(500).json({ message: 'Erro', error: error.message })
    }
}
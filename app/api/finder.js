import { findAgendamento } from "../db/models/agendamentoModel.js"

export default async (req, res) => {
    try {
        const celular = req.query.celular
        const resultado = await findAgendamento(celular )
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao encontrar agendamento', error: error.message });
    }
}

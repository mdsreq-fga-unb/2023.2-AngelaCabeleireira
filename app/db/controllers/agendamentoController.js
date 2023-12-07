import { criarAgendamento } from '../models/agendamentoModel.js'

export async function handleCriarAgendamento(req, res, agendamento) {
  try {
    const result = await criarAgendamento(agendamento)
    return res.status(201).json({ message: 'Agendamento criado com sucesso', result })
  } catch (error) {
    if (!res.headersSent) {
      return res.status(500).json({ message: 'Erro ao criar agendamento', error: error.message })
    }
  }
}
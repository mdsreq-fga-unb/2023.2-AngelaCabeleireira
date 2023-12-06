import { criarAgendamento } from '../models/agendamentoModel.js'

export async function handleCriarAgendamento(req, res) {
  try {
    const agendamento = JSON.parse(req.body)
    const result = await criarAgendamento(agendamento)
    res.status(201).json({ message: 'Agendamento criado com sucesso', result })
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar agendamento', error: error.message })
  }
}
import { Agendamento } from '../models/agendamentoModel.js'

export async function criarAgendamento(dadosAgendamento) {
    try {
        const result = await Agendamento(dadosAgendamento)
        console.log(`Agendamento criado com sucesso: ${result}`)
    } catch (error) {
        console.error(`Erro ao criar agendamento: ${error}`)
    }
}
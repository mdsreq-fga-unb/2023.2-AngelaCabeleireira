// db/controllers/agendamentoController.js
import Agendamento from '../models/agendamentoModel.js'

export async function criarAgendamento(dadosAgendamento) {
    try {
        const novoAgendamento = new Agendamento(dadosAgendamento)
        await novoAgendamento.save()
        console.log(`Agendamento criado com sucesso: ${novoAgendamento}`)
    } catch (error) {
        console.error(`Erro ao criar agendamento: ${error}`)
    }
}
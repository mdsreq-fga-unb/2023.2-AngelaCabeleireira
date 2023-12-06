import { connectToDatabase } from '../database.js'

export async function criarAgendamento(dadosAgendamento) {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.db('SalaoAngela').collection('Agendamentos')

  try {
    const result = await collection.insertOne(dadosAgendamento)
    return result
  } catch (error) {
    throw new Error(error.message)
  }
}

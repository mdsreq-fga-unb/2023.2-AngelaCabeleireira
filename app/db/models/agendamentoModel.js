import connectToDatabase from '../database.js'

export async function criarAgendamento(dadosAgendamento) {
  const db = await connectToDatabase(process.env.MONGODB_URI) //variavel de ambiente que esta na vercel
  const collection = db.db('SalaoAngela').collection('Agendamentos')

  try {
    const result = await collection.insertOne(dadosAgendamento) //insercao do agendamento no db
    return result
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function findAgendamento(celular) {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.db('SalaoAngela').collection('Agendamentos')

  try {
    const result = await collection.findOne(celular)
    return result
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function apagarAgendamento(dadosAgendamento) {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.db('SalaoAngela').collection('Agendamentos')

  try {
    const result = await collection.deleteOne(dadosAgendamento)
    return result
  } catch (error) {
    throw new Error(error.message)
  }
}
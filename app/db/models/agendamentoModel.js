import connectToDatabase from '../database.js'

// CRIAR
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

//ENCONTRAR UM
export async function findAgendamento(numero) {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.db('SalaoAngela').collection('Agendamentos')

  try {
    const result = await collection.findOne({ celular: numero })
    return result
  } catch (error) {
    throw new Error(error.message)
  }
}

//ENCONTRAR TODOS
export async function indisponivel(data) {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.db('SalaoAngela').collection('Agendamentos')

  try {
    const result = await collection.find(data).toArray()
    return result
  } catch (error) {
    throw new Error(error.message)
  }
}

//DELETAR
export async function apagarAgendamento(dadosAgendamento) {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.db('SalaoAngela').collection('Agendamentos')

  try {
    const result = await collection.deleteOne(dadosAgendamento)
    const resultado = {r: result, d: dadosAgendamento}
    return resultado
  } catch (error) {
    throw new Error(error.message)
  }
}
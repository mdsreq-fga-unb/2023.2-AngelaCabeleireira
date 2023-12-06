import { connectToDatabase } from '../database.js'

// Função serverless para criar um novo documento
export default async function Agendamento(req, res){
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.db('SalaoAngela').collection('Agendamentos')

  const agendamento = req.body

  try {
    const result = await collection.insertOne(agendamento)
    res.status(201).send(result)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
import { MongoClient } from 'mongodb'

let client
let clientPromise

// Função para conectar ao MongoDB Atlas
export default async function connectToDatabase(uri){
  if (!client) {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    clientPromise = client.connect()
  }
  return clientPromise
}
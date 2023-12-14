import { encontrarTodos } from "../db/models/agendamentoModel";


export default async (req, res) => {
    try {
        // Usar diretamente req.query.data sem decodificar ou parsear
        const param = req.query.data;
        console.log(param)
        const resultado = await encontrarTodos(param) // Verificar se o parâmetro é compatível com a função
        res.status(200).json(resultado)
    } catch (error) {
        res.status(500).json({ message: 'Erro', error: error.message })
    }
}

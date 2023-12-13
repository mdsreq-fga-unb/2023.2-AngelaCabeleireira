export default async function indisponiveis(data) {
    try {
        const response = await fetch(`/api/indisponiveis?data=${encodeURI(data)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
        throw new Error('Erro ao verificar indisponibilidade')
    }
}
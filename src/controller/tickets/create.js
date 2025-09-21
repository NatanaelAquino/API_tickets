import { randomUUID } from 'node:crypto'
export function create({ request, response, database }) {
  const { esquipamento, description, user_name } = request.body

  const tickets = {
    id: randomUUID(),
    esquipamento,
    description,
    user_name,
    status: "open",
    create_at: new Date(),
    updated_at: new Date()
  }

  database.insert("tickets", tickets)
  return response.writeHead(201).end(JSON.stringify(tickets))


}
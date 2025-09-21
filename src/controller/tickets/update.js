export function update({request, response, database}){
  const {id} = request.params
  const {equipamento,description} = request.body

  database.update("tickets",id,{
    equipamento,
    description,
    updated_at: new Date(),
  })
  return response.end()
}
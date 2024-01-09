import clientService from "../services/client.service.js"
async function createClient(req, res, next) {
  try {
    let client = req.body
    if (!client.name || !client.cpf || !client.phone|| !client.email || !client.address){
      throw new Error("Os campos Name, CPF, Phone, Email e Address são obrigatórios")
    }
  res.send(await clientService.createClient(client))
  logger.info(`POST /client - ${JSON.stringify(client)}`)
} catch (err) {
  next(err)
}
}

async function getClients(req, res, next) {
  try {
     res.send(await clientService.getClients())
     logger.info("GET /client")
  } catch (error) {
    next(error)
  }
}

async function getClient(req, res, next) {
    try {
      res.send(await clientService.getClient(req.params.id))
      logger.info("GET /client")
    } catch (error) {
      next(error)
    }
}

async function deletClient(req, res, next){
  try {
    await clientService.deletClient(req.params.id)
    res.end()
    logger.info("DELETE /client")
  } catch (error) {
    next(error)
  }
}

async function updateClient(req, res, next){
  try {
    let client = req.body
    if (!client.clientId || !client.name || !client.cpf || !client.phone|| !client.email || !client.address){
      throw new Error("Os campos Name, Client ID CPF, Phone, Email e Address são obrigatórios")
    }
    client = await clientService.updateClient(client)
    res.send(client)
    logger.info(`PUT /client - ${JSON.stringify(client)}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createClient,
  getClients,
  getClient,
  deletClient,
  updateClient
}
import saleService from "../services/sale.service.js"
async function createSale(req, res, next) {
  try {
    let sale = req.body
    if (!sale.value || !sale.date || !sale.client_id|| !sale.product_id){
      throw new Error("Os campos Date, Date, Client_id e Product_id são obrigatórios")
    }
  res.send(await saleService.createSale(sale))
  logger.info(`POST /sale - ${JSON.stringify(sale)}`)
} catch (err) {
  next(err)
}
}

async function getSales(req, res, next) {
  try {
     res.send(await saleService.getSales(req.query.product_id))
     logger.info("GET /sale")
  } catch (error) {
    next(error)
  }
}

async function getSale(req, res, next) {
    try {
      res.send(await saleService.getSale(req.params.id))
      logger.info("GET /sale")
    } catch (error) {
      next(error)
    }
}

async function deletSale(req, res, next){
  try {
    await saleService.deletSale(req.params.id)
    res.end()
    logger.info("DELETE /sale")
  } catch (error) {
    next(error)
  }
}

async function updateSale(req, res, next){
  try {
    let sale = req.body
    if (!sale.saleId || !sale.value || !sale.date || !sale.client_id|| !sale.product_id){
      throw new Error("Os campos Sale_id, Value, Date, Client_id e Product_id são obrigatórios")
    }
    sale = await saleService.updateSale(sale)
    res.send(sale)
    logger.info(`PUT /sale - ${JSON.stringify(sale)}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createSale,
  getSales,
  getSale,
  deletSale,
  updateSale
}
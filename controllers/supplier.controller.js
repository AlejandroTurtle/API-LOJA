import supplierService from "../services/supplier.service.js"
async function createSupplier(req, res, next) {
  try {
    let supplier = req.body
    if (!supplier.name || !supplier.cnpj || !supplier.phone|| !supplier.email || !supplier.address){
      throw new Error("Os campos Name, CNPJ, Phone, Email e Address são obrigatórios")
    }
  res.send(await supplierService.createSupplier(supplier))
  logger.info(`POST /supplier - ${JSON.stringify(supplier)}`)
} catch (err) {
  next(err)
}
}

async function getSuppliers(req, res, next) {
  try {
     res.send(await supplierService.getSuppliers())
     logger.info("GET /supplier")
  } catch (error) {
    next(error)
  }
}

async function getSupplier(req, res, next) {
    try {
      res.send(await supplierService.getSupplier(req.params.id))
      logger.info("GET /supplier")
    } catch (error) {
      next(error)
    }
}

async function deletSupplier(req, res, next){
  try {
    await supplierService.deletSupplier(req.params.id)
    res.end()
    logger.info("DELETE /supplier")
  } catch (error) {
    next(error)
  }
}

async function updateSupplier(req, res, next){
  try {
    let supplier = req.body
    if (!supplier.supplierId || !supplier.name || !supplier.cnpj || !supplier.phone|| !supplier.email || !supplier.address){
      throw new Error("Os campos Name, Supplier ID CNPJ, Phone, Email e Address são obrigatórios")
    }
    supplier = await supplierService.updateSupplier(supplier)
    res.send(supplier)
    logger.info(`PUT /supplier - ${JSON.stringify(supplier)}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deletSupplier,
  updateSupplier
}
import productService from "../services/product.service.js"
async function createProduct(req, res, next) {
  try {
    let product = req.body
    if (!product.name || !product.description || !product.value|| !product.stock || !product.supplierId){
      throw new Error("Os campos Name, Description, value, stock e Supplier_id são obrigatórios")
    }
  res.send(await productService.createProduct(product))
  logger.info(`POST /product - ${JSON.stringify(product)}`)
} catch (err) {
  next(err)
}
}

async function getProducts(req, res, next) {
  try {
     res.send(await productService.getProducts())
     logger.info("GET /product")
  } catch (error) {
    next(error)
  }
}

async function getProduct(req, res, next) {
    try {
      res.send(await productService.getProduct(req.params.id))
      logger.info("GET /product")
    } catch (error) {
      next(error)
    }
}

async function deletProduct(req, res, next){
  try {
    await productService.deletProduct(req.params.id)
    res.end()
    logger.info("DELETE /product")
  } catch (error) {
    next(error)
  }
}

async function updateProduct(req, res, next){
  try {
    let product = req.body
    if (!product.productId || !product.name || !product.description || !product.value|| !product.stock || !product.supplierId){
      throw new Error("Os campos Product_id, Name, Description, value, stock e Supplier_id são obrigatórios")
    }
    product = await productService.updateProduct(product)
    res.send(product)
    logger.info(`PUT /product - ${JSON.stringify(product)}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deletProduct,
  updateProduct
}
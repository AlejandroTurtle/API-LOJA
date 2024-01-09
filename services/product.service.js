import productRepository from "../repositories/product.repository.js"
import supplierRepository from "../repositories/supplier.repository.js"
import saleRepository from "../repositories/sale.repository.js"

async function createProduct(product){
  if (await supplierRepository.getSupplier (product.supplierId))
  return await productRepository.insertProduct(product)
  throw new Error ("O supplier_id informado não existe.")
}


async function getProducts(){
    return await productRepository.getProducts()
}

async function getProduct(id){
return await productRepository.getProduct(id)
}

async function deletProduct(id){
  const sales = await saleRepository.getSalesByProductId(id)
  if (sales) {
    throw new Error ("Não é possivel excluir o produto pois ele ja possui vendas")
  }
  await productRepository.deletProduct(id)
}

async function updateProduct(product){
  if (await supplierRepository.getSupplier (product.supplierId))
  return await productRepository.updateProduct(product)
  throw new Error ("O supplier_id informado não existe.")
}
export default {
  createProduct,
  getProducts,
  getProduct,
  deletProduct,
  updateProduct
}
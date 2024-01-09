import saleRepository from "../repositories/sale.repository.js"
import clientRepository from "../repositories/client.repository.js"
import productRepository from "../repositories/product.repository.js"

async function createSale(sale){
  if (!await clientRepository.getClient(sale.client_id)){
    throw new Error("O client_id informado não existe.")
  }
  if (!await productRepository.getProduct(sale.product_id))
  throw new Error("O product_id informado não existe.")


  const product = await productRepository.getProduct(sale.product_id)


  if (product.stock > 0) {
   sale = await saleRepository.insertSale(sale)
  product.stock--;
  await productRepository.updateProduct(product)
  return sale
}  else {
  throw new Error("O produto informado não possui estoque.")
}



  
}


async function getSales(productId){
  if (productId){
      return await saleRepository.getSalesByProductId(productId)
  }
    return await saleRepository.getSales()
}

async function getSale(id){
return await saleRepository.getSale(id)
}

async function deletSale(id){
const sale = await saleRepository.getSale(id)
if (sale){
  const product = await productRepository.getProduct(sale.product_id)
  await saleRepository.deletSale(id)
  product.stock++
  await productRepository.updateProduct(product)
}else {
  throw new Error ("O id da sale informado não existe.")
} }

async function updateSale(sale){
  let error = ""
  if (!await clientRepository.getClient(sale.client_id)){
    error = "O client_id informado não existe"
  }
  if (!await productRepository.getProduct(sale.product_id)){
    error += "O product_id informado não existe."
  }
  if (error){
    throw new Error (error)
  }
  return await saleRepository.updateSale(sale)
}
export default {
  createSale,
  getSales,
  getSale,
  deletSale,
  updateSale
}
import express from "express";
import saleController from "../controllers/sale.controller.js";


const router = express.Router();


router.post("/", saleController.createSale)
router.get("/", saleController.getSales)
router.get("/:id", saleController.getSale)
router.delete("/:id", saleController.deletSale)
router.put("/", saleController.updateSale)




export default router

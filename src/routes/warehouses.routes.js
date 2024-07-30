import {
  insert,
  updateWarehouse,
  deleteWarehouse,
  getWarehouses,
  getWarehouseByPk,
} from "../controllers/warehouses.controller.js";
import { Router } from "express";

const wareHousesRouter = Router();

wareHousesRouter.post("/", insert);
wareHousesRouter.put("/:id", updateWarehouse);
wareHousesRouter.delete("/:id", deleteWarehouse);
wareHousesRouter.get("/", getWarehouses);
wareHousesRouter.get("/:id", getWarehouseByPk);

export default wareHousesRouter;

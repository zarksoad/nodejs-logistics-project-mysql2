import { Router } from "express";
import {
  getAllshipments,
  getShipment,
  postShipment,
  updateShipment,
} from "../controllers/shipment.controller.js";

const shipmentRoutes = Router();

shipmentRoutes.post("/", postShipment);
shipmentRoutes.get("/", getAllshipments);
shipmentRoutes.get("/:id", getShipment);
shipmentRoutes.put("/:id", updateShipment)

export default shipmentRoutes;

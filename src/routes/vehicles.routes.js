import { Router } from "express";
import {
  deleteVehicle,
  getAllVehicles,
  getVehicle,
  postVehicle,
  updateVehicle,
} from "../controllers/vehicles.controller.js";

const vehiclesRoutes = Router();

vehiclesRoutes.post("/", postVehicle);
vehiclesRoutes.get("/", getAllVehicles);
vehiclesRoutes.get("/:id", getVehicle);
vehiclesRoutes.put("/:id", updateVehicle);
vehiclesRoutes.delete("/:id", deleteVehicle);

export default vehiclesRoutes;

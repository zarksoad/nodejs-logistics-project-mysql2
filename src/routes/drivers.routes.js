import { Router } from "express";
import {
  insertDriver,
  getAllDrivers,
  getDriverByfk,
  updateDriver,
  deleteDriver,
} from "../controllers/drivers.controller.js";

const driverRoutes = Router();

driverRoutes.post("/", insertDriver);
driverRoutes.get("/", getAllDrivers);
driverRoutes.get("/:id", getDriverByfk);
driverRoutes.put("/:id", updateDriver);
driverRoutes.delete("/:id", deleteDriver);

export default driverRoutes;

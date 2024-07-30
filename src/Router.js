import wareHousesRouter from "./routes/warehouses.routes.js";
import driverRoutes from "./routes/drivers.routes.js";
import vehiclesRoutes from "./routes/vehicles.routes.js";
import { Router } from "express";
import shipmentRoutes from "./routes/shipment.routes.js";

const router = Router();

router.use("/warehouses", wareHousesRouter);
router.use("/drivers", driverRoutes);
router.use("/vehicles", vehiclesRoutes);
router.use("/shipments", shipmentRoutes);

export default router;

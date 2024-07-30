import { findAll, findByFk, save, update } from "../models/shipment.models.js";

export const postShipment = async (req, res, next) => {
  try {
    const { warehouseId, item, quantity, vehicleId, driverId } = req.body;
    const newWarehouse = await save({
      warehouseId,
      item,
      quantity,
      vehicleId,
      driverId,
    });
    res.status(201).json({ newWarehouse });
  } catch (error) {
    next(error);
  }
};

export const getAllshipments = async (_, res, next) => {
  try {
    const getAllshipments = await findAll();
    res.json({ shipments: getAllshipments });
  } catch (error) {
    next(error);
  }
};

export const getShipment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const shipment = await findByFk(id);
    if (shipment.length === 0) {
      return res.status(404).json("shipment not found");
    }
    res.json({ shipment });
  } catch (error) {
    next(error);
  }
};
export const updateShipment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { warehouseId, item, quantity, vehicleId, driverId } = req.body;
    const shipmentUpdate = await update(id, {
      warehouseId,
      item,
      quantity,
      vehicleId,
      driverId,
    });
    if (shipmentUpdate.length === 0) {
      return res.status(404).json("vehicle not found");
    }
    res.json({ shipmentUpdate });
  } catch (error) {
    next(error);
  }
};



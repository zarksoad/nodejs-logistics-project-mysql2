import {
  destroy,
  findAll,
  findByPk,
  save,
  update,
} from "../models/vehicles.models.js";

export const postVehicle = async (req, res, next) => {
  try {
    const { model, warehouseId, driverId } = req.body;
    const newVehicle = await save({ model, warehouseId, driverId });
    res.status(201).json({ newVehicle });
  } catch (error) {
    next(error);
  }
};

export const getAllVehicles = async (_, res, next) => {
  try {
    const getAllVehicles = await findAll();
    res.json({ vehicles: getAllVehicles });
  } catch (error) {
    next(error);
  }
};

export const getVehicle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const vehicle = await findByPk(id);
    if (vehicle.length === 0) {
      return res.status(404).json("Vehicle not found");
    }
    res.json({ vehicle });
  } catch (error) {
    next(error);
  }
};
export const updateVehicle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { model, warehouseId, driverId } = req.body;
    const vehicleUpdate = await update(id, { model, warehouseId, driverId });
    if (vehicleUpdate.length === 0) {
      return res.status(404).json("vehicle not found");
    }
    res.json({ vehicleUpdate });
  } catch (error) {
    next(error);
  }
};

export const deleteVehicle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const vehicle = await destroy(id);
    console.log(vehicle);
    if (vehicle.length === 0) {
      return res.status(404).json("Driver not found");
    }
    res.status(204).json({ message: "The vehicle has been deleted" });
  } catch (error) {
    next(error);
  }
};

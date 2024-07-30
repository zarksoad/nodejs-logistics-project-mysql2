import {
  destroy,
  findAll,
  findByFk,
  save,
  update,
} from "../models/drivers.models.js";

export const insertDriver = async (req, res, next) => {
  try {
    const { name, warehouseId } = req.body;
    const newDriver = await save({ name, warehouseId });
    res.status(201).json({ Driver: newDriver });
  } catch (error) {
    next(error);
  }
};
export const getAllDrivers = async (req, res, next) => {
  try {
    const drivers = await findAll();
    res.json({ drivers });
  } catch (error) {
    next(error);
  }
};

export const getDriverByfk = async (req, res, next) => {
  try {
    const { id } = req.params;
    const driver = await findByFk(id);
    console.log(driver);
    if (driver.length === 0) {
      return res.status(404).json("Driver not found");
    }
    console.log(driver);
    res.json({ Driver: driver });
  } catch (error) {
    next(error);
  }
};

export const updateDriver = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, warehouseId } = req.body;
    const driver = await update(id, { name, warehouseId });
    res.json({ driverUpdated: driver });
  } catch (error) {
    next(error);
  }
};

export const deleteDriver = async (req, res, next) => {
  try {
    const { id } = req.params;
    const driver = await destroy(id);
    if (driver.length === 0) {
      return res.status(404).json("Driver not found");
    }
    res.status(204).json({ message: "The driver has been deleted" });
  } catch (error) {
    next(error);
  }
};

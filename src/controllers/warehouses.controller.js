import {
  destroy,
  findAll,
  findByFk,
  save,
  update,
} from "../models/warehouses.models.js";

export const insert = async (req, res, next) => {
  try {
    const { name, location } = req.body;
    console.log(name, location);
    const warehouseCreated = await save({ name, location });
    res.status(201).send({
      message: "Successfully created",
      data: warehouseCreated,
    });
  } catch (error) {
    next(error);
  }
};

export const updateWarehouse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, location } = req.body;
    const warehouseUpdated = await update(id, { name, location });
    res.json({
      message: "Warehouse has been updated",
      data: warehouseUpdated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteWarehouse = async (req, res, next) => {
  try {
    const { id } = req.params;

    const warehouseDeleted = await destroy(id);
    if (warehouseDeleted.length === 0) {
      return res.status(404).json({ message: "warehouse not found" });
    }
    res.status(204).json({
      warehouseDeleted: "The warehouse has been deleted",
      data: warehouseDeleted,
    });
  } catch (error) {
    next(error);
  }
};

export const getWarehouses = async (_, res, next) => {
  try {
    const warehouses = await findAll();
    res.json({ warehouses: warehouses });
  } catch (error) {
    next(error);
  }
};

export const getWarehouseByPk = async (req, res, next) => {
  try {
    const { id } = req.params;
    const warehouse = await findByFk(id);
    if (warehouse.length == 0) {
      return res.status(404).json({ message: "warehouse not found" });
    }
    res.json({ warehouse });
  } catch (error) {
    next(error);
  }
};

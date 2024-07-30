import { pool } from "../../config/database.js";

export const save = async (vehicles) => {
  try {
    const [response] = await pool.query(
      "INSERT INTO vehicles (model,warehouseId,driverId) VALUES(?,?,?)",
      [vehicles.model, vehicles.warehouseId, vehicles.driverId]
    );
    const [newVehicle] = await pool.query(
      "SELECT * FROM vehicles WHERE id = ?",
      [response.insertId]
    );
    return newVehicle;
  } catch (error) {
    throw new Error(error);
  }
};

export const findAll = async () => {
  try {
    const [response] = await pool.query("SELECT * FROM vehicles");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const findByPk = async (id) => {
  try {
    const [response] = await pool.query("SELECT * FROM vehicles WHERE id =?", [
      id,
    ]);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const update = async (id, vehicle) => {
  try {
    await pool.query(
      "UPDATE vehicles SET model = ?,warehouseId=?,driverId =? WHERE id = ?",
      [vehicle.model, vehicle.warehouseId, vehicle.driverId, id]
    );
    const [[vehicleUpdate]] = await pool.query(
      "SELECT * FROM vehicles WHERE id = ?",
      [id]
    );
    return vehicleUpdate;
  } catch (error) {}
};

export const destroy = async (id) => {
  try {
    await pool.query("DELETE FROM vehicles WHERE id = ?", [id]);
    const [vehicleDelete] = await pool.query(
      "SELECT * FROM vehicles WHERE id = ?",
      [id]
    );
    return vehicleDelete;
  } catch (error) {
    throw new Error(error);
  }
};

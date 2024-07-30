import { pool } from "../../config/database.js";

export const save = async (shipments) => {
  try {
    const [resolve] = await pool.query(
      "INSERT INTO shipments (warehouseId,item,quantity,vehicleId,driverId) VALUES(?,?,?,?,?)",
      [
        shipments.warehouseId,
        shipments.item,
        shipments.quantity,
        shipments.vehicleId,
        shipments.driverId,
      ]
    );
    const [[newShipment]] = await pool.query(
      "SELECT * FROM shipments WHERE id = ?",
      [resolve.insertId]
    );
    console.log(resolve.insertId);
    return newShipment;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findAll = async () => {
  try {
    const [shipments] = await pool.query("SELECT * FROM shipments");
    return shipments;
  } catch (error) {
    throw new Error(error);
  }
};

export const findByFk = async (id) => {
  try {
    const [shipment] = await pool.query(
      "SELECT * FROM shipments WHERE id = ?",
      [id]
    );
    return shipment;
  } catch (error) {
    throw new Error(error);
  }
};

export const update = async (id, shipments) => {
  try {
    const [response] = await pool.query(
      "UPDATE shipments SET warehouseId = ?,item = ?,quantity = ?,vehicleId = ?,driverId = ? WHERE id = ?",
      [
        shipments.warehouseId,
        shipments.item,
        shipments.quantity,
        shipments.vehicleId,
        shipments.driverId,
        id,
      ]
    );
    const [[shipmentUpdated]] = await pool.query(
      "SELECT * FROM shipments WHERE id = ?",
      [id]
    );
    return shipmentUpdated;
  } catch (error) {
    throw new Error(error);
  }
};

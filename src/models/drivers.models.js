import { pool } from "../../config/database.js";

export const save = async (driver) => {
  try {
    const [resolve] = await pool.query(
      "INSERT INTO drivers (name,warehouseId) VALUES(?,?)",
      [driver.name, driver.warehouseId]
    );
    const [[newDriver]] = await pool.query(
      "SELECT * FROM drivers WHERE id = ?",
      [resolve.insertId]
    );
    return newDriver;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findAll = async () => {
  try {
    const [drivers] = await pool.query("SELECT * FROM drivers");
    return drivers;
  } catch (error) {
    throw new Error(error);
  }
};

export const findByFk = async (id) => {
  try {
    const [driver] = await pool.query("SELECT * FROM drivers WHERE id = ?", [
      id,
    ]);
    return driver;
  } catch (error) {
    throw new Error(error);
  }
};

export const update = async (id, driver) => {
  try {
    const [response] = await pool.query(
      "UPDATE drivers SET name = ?,warehouseId = ? WHERE id = ?",
      [driver.name, driver.warehouseId, id]
    );
    const [[driverUpdated]] = await pool.query(
      "SELECT * FROM drivers WHERE id = ?",
      [id]
    );
    return driverUpdated;
  } catch (error) {
    throw new Error(error);
  }
};

export const destroy = async (id) => {
  try {
    await pool.query("DELETE FROM drivers WHERE id = ?", [id]);
    const [driverDelete] = await pool.query(
      "SELECT * FROM drivers WHERE id = ?",
      [id]
    );
    return driverDelete;
  } catch (error) {
    throw new Error(error);
  }
};

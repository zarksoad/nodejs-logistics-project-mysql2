import { pool } from "../../config/database.js";

export const save = async (warehouses) => {
  try {
    const [resolve] = await pool.query(
      "INSERT INTO warehouses(name,location) VALUES(?,?) ",
      [warehouses.name, warehouses.location]
    );
    const [warehouseCreated] = await pool.query(
      "SELECT * FROM warehouses WHERE id = ?",
      [resolve.insertId]
    );
    return warehouseCreated;
  } catch (error) {
    throw new Error("something bad happened", error);
  }
};

export async function update(id, warehouses) {
  try {
    const [resolve] = await pool.query(
      "UPDATE warehouses SET name = ?,location = ? WHERE id = ?",
      [warehouses.name, warehouses.location, id]
    );
    const [warehouseUpdated] = await pool.query(
      "SELECT * FROM warehouses WHERE id = ?",
      [id]
    );
    return warehouseUpdated;
  } catch (error) {
    throw new Error("Warehouse hasn't been updated");
  }
}

export async function destroy(id) {
  try {
    await pool.query("DELETE from warehouses WHERE id = ?", [id]);
    const [warehouseDeleted] = await pool.query(
      "SELECT * FROM warehouses WHERE id = ?",
      [id]
    );
    return warehouseDeleted;
  } catch (error) {
    throw new Error(error);
  }
}

export const findAll = async () => {
  try {
    const [warehouses] = await pool.query("SELECT * FROM warehouses");
    return warehouses;
  } catch (error) {
    console.error("error", error);
  }
};

export const findByFk = async (id) => {
  try {
    const [warehouse] = await pool.query(
      "SELECT * FROM warehouses WHERE id = ?",
      [id]
    );
    return warehouse;
  } catch (error) {
    console.error("error", error);
  }
};

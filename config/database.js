import mysql2 from "mysql2/promise";

let pool;

try {
  pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    database: "logistic",
    password: "1234",
  });
  console.log("Data base connected");
} catch (error) {
  console.error("error connecting database", error);
}

export { pool };

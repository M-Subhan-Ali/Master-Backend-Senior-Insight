import { pool } from "../db/index.js";

export const UserModel = {
  async create(name, email, password) {
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password]
    );
    return result.rows[0];
  },

  async findByEmail(email) {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0];
  },

  async getAll() {
    const result = await pool.query("SELECT id, name, email FROM users ORDER BY id DESC");
    return result.rows;
  },
};

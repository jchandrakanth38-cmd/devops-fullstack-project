const express = require("express")
const { Pool } = require("pg")

const app = express()

const pool = new Pool({
  user: "postgres",
  host: "postgres",
  database: "devopsdb",
  password: "postgres",
  port: 5432
})

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()")
  res.json(result.rows)
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})

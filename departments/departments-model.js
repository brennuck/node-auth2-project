const db = require("../data/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("departments").select("id", "name");
}

function findBy(filter) {
  return db("departments").where(filter);
}

async function add(role) {
  const [id] = await db("departments").insert(role, "id");

  return findById(id);
}

function findById(id) {
  return db("departments").where({ id }).first();
}

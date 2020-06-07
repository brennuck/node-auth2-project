
exports.seed = function(knex) {
  const departments = [
    {
      name: "admin",
    },
    {
      name: "user"
    }
  ]
      return knex('departments')
        .insert(departments)
        .then(() => {
          console.log("\n== Seed data for roles table added. ==\n")
        })
};

module.exports = {
  db: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "admin",
      database: "phinma",
    },
    pool: {
      min: 0,
      max: 20,
    },
  },
};

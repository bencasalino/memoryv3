// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgersql:///mem_db_3"
  },
  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL
  }
};

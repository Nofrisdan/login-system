import { Sequelize, ValidationErrorItemOrigin } from "sequelize";

// connect database
const username = "nofrisdan",
  password = "N03D0600",
  db = "belajar_login_system";

const connectDb = new Sequelize(db, username, password, {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
});

export default connectDb;

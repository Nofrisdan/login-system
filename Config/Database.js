import { Sequelize, ValidationErrorItemOrigin } from "sequelize";

// connect database
const host = "localhost",
  username = "nofrisdan",
  password = "N03D0600",
  db = "belajar_login_system";

const connectDb = new Sequelize(db, username, password, {
  host,
  dialect: "mysql",
});

try {
  // ValidationErrorItemOrigin
  console.log("Database Connected");
} catch (error) {
  //   console.log(error.message);
  console.error("Unable connect to database");
}

export default connectDb;

import connectDb from "../../Config/Database.js";
import { DataTypes } from "sequelize";

// model tb_user
export const tb_user = connectDb.define(
  "tb_user",
  {
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    modelName: "tb_user",
  }
);

// sync
connectDb.sync();

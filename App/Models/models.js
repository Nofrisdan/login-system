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
    token: {
      type: DataTypes.STRING(300),
      allowNull: false,
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
    timestamps: true,
    modelName: "tb_user",
  }
);

// sync
connectDb.sync();

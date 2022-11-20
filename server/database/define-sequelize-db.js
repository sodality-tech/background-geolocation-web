import Sequelize from "sequelize";

import { pgConnectionString } from "../config.js";

export default new Sequelize(pgConnectionString, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

import Sequelize from "sequelize";

import { pgConnectionString } from "../config.js";

export default new Sequelize(pgConnectionString, {
  ssl: true,
});

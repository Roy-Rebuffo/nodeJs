import { Sequelize }  from "sequelize";

export const sequelize = new Sequelize('bd_scott_nodejs', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3307
});
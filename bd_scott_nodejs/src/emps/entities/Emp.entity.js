import { Sequelize } from "sequelize";
import { sequelize }  from "../../db/db.config.js";

export const Emp = sequelize.define('emp',
    {
        empno: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ename: {
            type: Sequelize.STRING,
            allowNull: false
        },
        job: {
            type: Sequelize.STRING,
            allowNull: false
        },
        mgr: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        sal: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        comm: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        deptno:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        hiredate:{
            type: Sequelize.DATE,
            allowNull: false
        },
        createdAt: {
            type: 'DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL',
            defaultValue: () => new Date()
        },
        updatedAt: {
            type: 'DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL',
            defaultValue: () => new Date()
        }
    },
    {
        timestamps: false
    }
);

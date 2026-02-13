import express from 'express';
import deptRouter from './routes/depts.js';
import empRouter from './routes/emps.js';
import { sequelize } from './db/db.config.js';
import {Dept} from "./depts/entities/Dept.entity.js";
import {Emp} from "./emps/entities/Emp.entity.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hey world!');
});

// END POINT: dept
app.use('/depts', deptRouter);

// END POINT: dept
app.use('/emps', empRouter);

try{
  Dept.hasMany(Emp, {
    foreignKey: 'deptno'
  });

  Emp.belongsTo(Dept, {
    foreignKey: 'deptno'
  });

  await sequelize.sync({ force: false }); //Cambiar a true si queremos que borre las tablas cada vez que ejecutamos
  console.log('Connection with DB stablished');
} catch(error) {
  console.log('DB not connected', error);
}

export default app.listen(PORT | 3000, () => {
  console.log(`Server listening on port ${PORT}`);
}); 
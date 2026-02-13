import { Emp } from "./entities/Emp.entity.js";

const findAll = async () => {
    return await Emp.findAll();
}

const findOneById = async (empno) => {
  return await Emp.findOne({ where: { empno: empno }});
}
//Usamos la FK de Departamentos
const findUserDepartments = async (deptno) => {
  return await Emp.findAll({ where: { deptno: deptno }});
}

const create = async (post) => {
  const newEmp = await Emp.create(post);
  return newEmp;
}

export const empRepository ={
  findAll,
  findOneById,
  create,
  findUserDepartments
}
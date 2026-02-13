import {Dept} from "./entities/Dept.entity.js";

const findAll = async () => {
    return await Dept.findAll();
}

const findOneById = async (deptno) => {
  return await Dept.findOne({ where: { deptno: deptno }});
}

const create = async (dept) => {
  const newDept = await Dept.create(dept);
  return newDept;
}

export const deptRepository ={
  findAll,
  findOneById,
  create
}
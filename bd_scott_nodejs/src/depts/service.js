import { deptRepository } from './repository.js';
import { empRepository } from "../emps/repository.js";

const findAll = async () => {
    const depts = await deptRepository.findAll();
    return {
      depts: depts
    }
}

const findOneById = async (id) => {
  console.log('dept id service ', id)
  const dept = await deptRepository.findOneById(id);
  const emps = await findEmpsDepts(id);
  return {
    dptno: dept.deptno,
    name: dept.dname,
    loc: dept.loc,
    emps: emp
  }
}

const findDeptEmps= async (deptno) => {
  const  deptEmps= await empRepository.findUserDepartments(deptno);
  return deptEmps;
}

const create = async (userObj) => {
  const newUser = await userRepository.create(userObj);
  return {
    user: newUser
  }
}

export const deptService = {
  findAll,
  findOneById,
  create,
  findDeptEmps
}
import { empRepository } from './repository.js';

const findAll = async () => {
    const emps = await empRepository.findAll();
    return {
      users: emps
    }
}

const findOneById = async (id) => {
  console.log('user id service ', id)
  const emp = await empRepository.findOneById(id);
  return {
    emp: emp
  }
}

const findEmpsDepts = async (deptno) => {
  const  empsDept= await empRepository.findUserDepartments(deptno);
  return empsDept;
}

const create = async (emp) => {
  const newEmp = await empRepository.create(emp);
  return {
    emp: newEmp
  }
}

export const empService = {
  findAll,
  findOneById,
  create,
  findEmpsDepts
}
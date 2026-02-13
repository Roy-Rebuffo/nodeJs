import {deptService} from "./service.js";

// GET:

const findAll = async (req, res) => {
  res.status(200).json(await deptService.findAll());
}

const findOneById = async (req, res) => {
  res.status(200).json(await deptService.findOneById(+req.params.id));
}

// END GET

// POST:

const create = async (req, res) => {
  res.status(201).json(await deptService.create(req.body));
}

// END POST

export const deptController = {
  findAll,
  findOneById,
  create
}
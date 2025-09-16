import CreateCliente from "../../application/use-cases/CreateCliente.js";
import GetCliente from "../../application/use-cases/GetCliente.js";
import GetClienteById from "../../application/use-cases/GetClienteById.js";
import UpdateCliente from "../../application/use-cases/UpdateCliente.js";
import DeleteCliente from "../../application/use-cases/DeleteCliente.js";
import ClienteRepositoryMongo from "../repositories/ClienteRepositoryMongo.js";

const clienteRepository = new ClienteRepositoryMongo();

export const createCliente = async (req, res) => {
  try {
    const useCase = new CreateCliente(clienteRepository);
    const cliente = await useCase.execute(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getClientes = async (req, res) => {
  try {
    const useCase = new GetCliente(clienteRepository);
    const clientes = await useCase.execute();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getClienteById = async (req, res) => {
  try {
    const useCase = new GetClienteById(clienteRepository);
    const cliente = await useCase.execute(req.params.id);
    if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateCliente = async (req, res) => {
  try {
    const useCase = new UpdateCliente(clienteRepository);
    const cliente = await useCase.execute(req.params.id, req.body);
    if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const deleteCliente = async (req, res) => {
  try {
    const useCase = new DeleteCliente(clienteRepository);
    const result = await useCase.execute(req.params.id);
    if (!result) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json({ message: "Cliente eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

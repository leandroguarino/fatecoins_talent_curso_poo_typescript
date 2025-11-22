import { Cliente } from "./classes/Cliente.js";
import { Pedido } from "./classes/Pedido.js";

const cliente1 = new Cliente()
cliente1.setNome("Jao Silva")
cliente1.setCodigo(1)

const pedido1 = new Pedido()
pedido1.setCodigo(1)
pedido1.setDataHora(new Date())
pedido1.setCliente(cliente1)

cliente1.addPedido(pedido1)

console.log("Cliente cadastrado", cliente1)

console.log("\n\n")

console.log("Pedido cadastrado", pedido1)

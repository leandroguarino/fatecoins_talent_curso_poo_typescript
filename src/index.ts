import { Cliente } from "./classes/Cliente.js";
import { ClientePessoaFisica } from "./classes/ClientePessoaFisica.js";
import { Pedido } from "./classes/Pedido.js";
import { Produto } from "./classes/Produto.js";

//cria um objeto da classe Cliente
const cliente1 = new ClientePessoaFisica()
cliente1.setNome("Jao Silva")
cliente1.setCodigo(1)
cliente1.setEstadoCivil("casado")

const produto1 = new Produto()
produto1.setCodigo(1)
produto1.setNome("Café expresso Pequeno")
produto1.setPreco(4.00)

//cria um objeto da classe Pedido
const pedido1 = new Pedido()
pedido1.setCodigo(1)
pedido1.setDataHora(new Date())
//vinculado o cliente ao pedido
pedido1.setCliente(cliente1)
//vincula o pedido ao cliente
cliente1.addPedido(pedido1)
//vincula os produtos ao pedido
pedido1.addProduto(produto1)
//vincula o pedido ao produto
produto1.addPedido(pedido1)

console.log(pedido1)
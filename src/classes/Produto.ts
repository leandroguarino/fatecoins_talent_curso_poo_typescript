import type { Pedido } from "./Pedido.js"

export class Produto{
    private codigo: number
    private nome: string
    private preco: number
    private pedidos: Pedido[]

    constructor(){
        this.codigo = 0
        this.nome = ""
        this.preco = 0
        this.pedidos = []
    }

}
import type { Cliente } from "./Cliente.js"
import type { ClientePessoaFisica } from "./ClientePessoaFisica.js"
import type { Produto } from "./Produto.js"

export class Pedido<TIPO extends Cliente>{
    private codigo: number
    private dataHora: Date
    private cliente: TIPO | null
    private produtos: Produto[]
    
    constructor(){
        this.codigo = 0
        this.dataHora = new Date()
        this.cliente = null
        this.produtos = []
    }

    public setCodigo(codigo: number){
        this.codigo = codigo
    }

    public getCodigo(){
        return this.codigo
    }

    public setDataHora(dataHora: Date){
        this.dataHora = dataHora
    }

    public getDataHora(){
        return this.dataHora
    }

    public setCliente(novoCliente: TIPO){
        this.cliente = novoCliente
    }

    public getCliente(){
        return this.cliente
    }

    public addProduto(produto: Produto){
        this.produtos.push(produto)
    }    
}
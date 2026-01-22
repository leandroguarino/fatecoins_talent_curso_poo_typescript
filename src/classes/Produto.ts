import type { IProduto } from "../interfaces/IProduto.js"
import type { Cliente } from "./Cliente.js"
import type { Pedido } from "./Pedido.js"

export class Produto implements IProduto{
    private codigo: number
    private nome: string
    private preco: number
    private pedidos: Pedido<Cliente>[]

    constructor(){
        this.codigo = 0
        this.nome = ""
        this.preco = 0
        this.pedidos = []
    }

    public getCodigo(): number{
        return this.codigo
    }

    public setCodigo(codigo: number){
        this.codigo = codigo
    }

    public getNome(): string{
        return this.nome
    }

    public setNome(nome: string){
        this.nome = nome
    }

    public getPreco(): number{
        return this.preco
    }

    public setPreco(preco: number){
        if (preco > 0){
            this.preco = preco
        }else{
            throw Error("Preço tem que ser maior que 0")
        }
    }

    public addPedido(pedido: Pedido<Cliente>){
        this.pedidos.push(pedido)
    }

    public calcularImposto(valor: number): number {
        return valor * 0.15
    }

}
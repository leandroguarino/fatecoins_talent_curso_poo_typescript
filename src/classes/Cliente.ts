import type { Pedido } from "./Pedido.js"

export class Cliente{
    private nome: string
    private codigo: number
    private pedidos: Pedido[]

    constructor(){
        this.codigo = 0        
        this.nome = ""
        this.pedidos = []
    }

    public setNome(novoNome: string){
        if (novoNome.indexOf(" ") >= 0){
            this.nome = novoNome
        }else{
            throw Error("Não foi possível setar o nome")
        }
    }

    public getNome(): string{
        return this.nome
    }

    public getCodigo(): number{
        return this.codigo
    }

    public setCodigo(novoCodigo: number){
        if (novoCodigo > 0){
            this.codigo = novoCodigo
        }else{
            throw Error("Código inválido")
        }
    }

    public addPedido(pedido: Pedido){
        this.pedidos.push(pedido)
    }
}
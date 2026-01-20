import type { Pedido } from "./Pedido.js"

export class Cliente{
    protected nome: string
    private codigo: number
    private pedidos: Pedido[]

    constructor(){
        this.codigo = 0        
        this.nome = ""
        this.pedidos = []
    }

    public setNome(novoNome: string){}

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
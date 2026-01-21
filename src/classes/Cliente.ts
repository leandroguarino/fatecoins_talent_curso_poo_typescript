import type { Pedido } from "./Pedido.js"

export abstract class Cliente{
    protected nome: string = ""
    protected codigo: number = 0
    protected pedidos: Pedido[] = []

    public abstract setNome(novoNome: string): void;

    public getNome(): string{
        return this.nome
    }

    public setCodigo(novoCodigo: number): void{
        this.codigo = novoCodigo
    }

    public getCodigo(): number {
        return this.codigo
    }

    public addPedido(pedido: Pedido): void {
        this.pedidos.push(pedido)
    }
}
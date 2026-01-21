import { Cliente } from "./Cliente.js";

export class ClienteVip extends Cliente{

    private codigoVip: number;
    constructor(){
        super()
        this.codigoVip = 0
    }

    public setNome(novoNome: string): void{
        this.nome = novoNome + " (VIP)"
    }
}
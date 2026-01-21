import { Cliente } from "./Cliente.js"
import type { Pedido } from "./Pedido.js"

export class ClientePessoaJuridica extends Cliente{
    private cnpj: string

    constructor(){
        super()
        this.cnpj = ""
    }

    public setNome(novoNome: string){
        if (novoNome.toUpperCase().indexOf("LTDA") >= 0){
            this.nome = novoNome
        }else{
            throw Error("Nome inválido para a empresa")
        }
    }
}
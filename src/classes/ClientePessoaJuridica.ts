import { Cliente } from "./Cliente.js"

export class ClientePessoaJuridica extends Cliente{
    private cnpj: string

    constructor(){
        super()
        this.cnpj = ""
    }
}
import { Cliente } from "./Cliente.js"

export class ClientePessoaFisica extends Cliente{
    private estadoCivil: string

    constructor(){
        super()
        this.estadoCivil = ""
    }
}
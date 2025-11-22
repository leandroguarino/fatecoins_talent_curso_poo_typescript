import { Cliente } from "./Cliente.js"

export class ClientePessoaFisica extends Cliente{
    private estadoCivil: string

    constructor(){
        super()
        this.estadoCivil = ""
    }

    public setEstadoCivil(estadoCivil: string){
        if (estadoCivil?.trim() != ""){
            this.estadoCivil = estadoCivil
        }else{
            throw Error("Estado civil inválido")
        }
    }

    public getEstadoCivil(): string{
        return this.estadoCivil
    }
}
export class Cliente{
    private nome: string
    private codigo: number

    constructor(){
        this.codigo = 0        
        this.nome = ""
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
}
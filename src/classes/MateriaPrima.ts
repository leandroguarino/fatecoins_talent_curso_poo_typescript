import type { IProduto } from "../interfaces/IProduto.js";

export class MateriaPrima implements IProduto{
    public calcularImposto(valor: number): number {
        return valor * 0.05
    }
}
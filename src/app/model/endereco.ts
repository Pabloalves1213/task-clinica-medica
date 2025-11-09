
export class Endereco {
    cep!: string;
    endereco!: string;
    numero!: number;
    bairro!: string;
    cidade!: string;
    uf!: string;
    complemento!: string;

    constructor(endereco?: string, cep?: string, numero?: number, bairro?: string) {
        this.endereco = endereco || "";
        this.cep = cep || "";
        this.numero = numero || 0;
        this.bairro = bairro || "";
    }

}

export class animais {
    nome: string;
    idade: number;
    emiteSom: boolean;
    corre: boolean;
    arvore: boolean;

    constructor(nome: string, idade: number, emiteSom: boolean, corre: boolean, arvore: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.emiteSom = emiteSom;
        this.corre = corre;
        this.arvore = arvore;
    }
    informacaoAnimais(){
       console.log(`Nome do animal: ${this.nome}`)
       console.log(`Idade do animal: ${this.idade}`)
       console.log(`O animal emite som: ${this.emiteSom}`)
       console.log(`O anima corre: ${this.corre}`)
       console.log(`O animal consegue subir em árvore: ${this.arvore}`)
    }
}

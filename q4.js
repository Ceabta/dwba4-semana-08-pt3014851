class Aluno {
    constructor(primeroNome, segundoNome, primeiraNota, segundaNota) {
      this.nome = primeroNome;
      this.sobrenome = segundoNome;
      this.n1 = primeiraNota;
      this.n2 = segundaNota;
    }

    get getCompleto(){
        return this.nomeCompleto()
    }
    nomeCompleto() {
        return this.nome + this.sobrenome;
    }

    get getMedia(){
        return this.media();
    }
    media(){
        return (this.n1*0.6) + (this.n2*0.4)
    }

    get getSitaucao() {
        return this.situacao();
    }

    situacao(){
        return this.getMedia > 6 ? "Aprovado" : "Reprovado";
    }
    
}
var a1 = new Aluno("João"," da Silva",7,8);
var a2 = new Aluno("Leonardo"," Cesário",1,2);
var a3 = new Aluno("Alberto"," dos Santos",3,4);
var a4 = new Aluno("Godofredo"," Pires",9,2);
var a5 = new Aluno("Vinicios"," Oliveira",6,7);

const matriz = [["Nome: "+a1.getCompleto+"\nMédia: "+a1.getMedia+"\nSitaução: "+a1.getSitaucao],
                ["Nome: "+a2.getCompleto+"\nMédia: "+a2.getMedia+"\nSitaução: "+a2.getSitaucao],
                ["Nome: "+a3.getCompleto+"\nMédia: "+a3.getMedia+"\nSitaução: "+a3.getSitaucao],
                ["Nome: "+a4.getCompleto+"\nMédia: "+a4.getMedia+"\nSitaução: "+a4.getSitaucao],
                ["Nome: "+a5.getCompleto+"\nMédia: "+a5.getMedia+"\nSitaução: "+a5.getSitaucao]]

//Linha
for(var i = 0; i<1; i++)
    //Coluna
    for(var j = 0; j<5; j++)
        alert(matriz[i,j]);
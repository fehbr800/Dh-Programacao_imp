// Checkpoint 3 

// FEITO EM GRUPO COM: Anderson Borges, Dylan ToKumoto, Felipe Godoy e Matheus Emanoel

// Passo 1:
function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;

    // Passo 2:
    this.calcularMedia = function () {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma = soma + this.notas[i];

        }
        return soma / this.notas.length
    }

    this.faltasTot = function () {
        return this.faltas++
      }
    /*this.faltasTot = function () {
        let numFaltas = this.faltas
        if (this.faltas >= 0) {
            numFaltas++
        }
        this.faltas = +numFaltas;
        return numFaltas;
        // Incrementar a falta dentro do objeto aluno já criado
    }*/

}

const aluno1 = new Aluno("Linux", 1, [1, 2, 4, 8]);
const aluno2 = new Aluno("Zuckenberg", 1, [8, 7, 7, 9]);
const aluno3 = new Aluno("Steve", 6, [8, 8, 8, 8]);
const aluno4 = new Aluno("Jobs", 1, [6, 5, 5, 8]);
const aluno5 = new Aluno("Bob", 0, [10, 10, 10, 10]);

// console.log(aluno1.calcularMedia());
// console.log(aluno2.calcularMedia());
// console.log(aluno3.calcularMedia());
// console.log(aluno4.calcularMedia());
// console.log(aluno5.calcularMedia());
 console.log(aluno1.faltasTot());
 console.log(aluno1);
// console.log(aluno2.faltasTot());
// console.log(aluno3.faltasTot());
// console.log(aluno4.faltasTot());
// console.log(aluno5.faltasTot());

// Passos 3 e 4
var alunos = [
    aluno1,
    aluno2,
    aluno3,
    aluno4,
    aluno5,
];

let curso = {
    nomeCurso: 'CTD',
    notaAprovacao: 7,
    faltasMax: 2,
    estudantes: alunos,

    criaAluno: function (nome, faltas, notas) {
        alunos.push(new Aluno(nome, faltas, notas))
        return this;
    },

    buscarAluno: function (nome) {
        const porcentagem = ((this.notaAprovacao * 10) / 100)
        if (
            (nome.calcularMedia() >= this.notaAprovacao) &
            (nome.faltasTot() < this.faltasMax)
        ) {
            return true;
        } else if (
            (nome.calcularMedia() > this.notaAprovacao + porcentagem) &
            (nome.faltasTot() == this.faltasMax)
        ) {
            return true;

        }
        return false;
    },

    resultadoAluno: function () {
        var resultado = []
        for (let i = 0; i < this.estudantes.length; i++) {
            var aluno = this.estudantes[i].nome
            resultado.push(aluno)
            resultado.push(this.buscarAluno(this.estudantes[i]))
        }
        return resultado
    }

}



curso.criaAluno("Junin", 0, [10, 7, 8, 9]);


// console.log(curso.estudantes);
/*console.log(curso.buscarAluno(aluno1));
console.log(curso.buscarAluno(aluno2));
console.log(curso.buscarAluno(aluno3));
console.log(curso.buscarAluno(aluno4));
console.log(curso.buscarAluno(aluno5));

console.log(alunos);*/



console.log(curso.estudantes);
console.log(curso.buscarAluno(aluno5));
console.log(curso.resultadoAluno());



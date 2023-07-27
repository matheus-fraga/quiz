class Player {
    nome;
    tema;
    tempo;
    dataQuiz;
    pontuacao;

    

    constructor(nome, tema, tempo, dataQuiz, pontuacao){
        this.nome = nome;
        this.tema = tema;
        this.tempo = tempo;
        this.dataQuiz = dataQuiz ;
        this.pontuacao = pontuacao;
    }

}


function populateResults(user) {
    resultsArray.push(user);

}

let dataAtual = new Date();

let gabriel = new Player("Gabriel Dantas", "CSS", 50.0, dataAtual.getDate() + "/" + (dataAtual.getMonth() + 1) + "/" + dataAtual.getFullYear(), 9)
let resultsArray = [gabriel];

for (let i = 0; i < 10; i++) {
    populateResults(gabriel)  
}

console.log(resultsArray);


function showResults() {
    
    var tabela = document.querySelector(".result-table");
    console.log(tabela);
    tabela.innerHTML = `<tr>
    <th>Nome</th>
    <th>Tema</th>
    <th>Tempo</th>
    <th>Data Quiz</th>
    <th>Pontuação</th>
</tr>`
    for (var i = 0; i < resultsArray.length; i++) {
        var result = resultsArray[i];
        
        tabela.innerHTML += `
        <tr>
        <td>${result.nome}</td>
        <td>${result.tema}</td>
        <td>${result.tempo}</td>
        <td>${result.dataQuiz}</td>
        <td>${result.pontuacao}</td>
    </tr>
        `
    }   
}
export {showResults}

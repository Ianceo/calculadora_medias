const form = document.getElementById('activity-form');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando aprovação" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste reprovado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="aprovado">Aprovado</span>';
const spanReprovado = '<span class="reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima para aprovação:'));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    AdicionaLinha();
    AtualizaTabela();
    AtualizaMediaFinal();
});

function AdicionaLinha() {
    const inputNomeAtividade = document.getElementById('activity-name');
    const inputNotaAtividade = document.getElementById('activity-nota');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`Atividade ${inputNomeAtividade.value} já adicionada!`);
        return;
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
        }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function AtualizaTabela() { 
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function AtualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
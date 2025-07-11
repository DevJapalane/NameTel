const form = document.getElementById('formulario')
let rows = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    const nomeInput = document.getElementById('nomeInputado');
    const telInput = document.getElementById('telInputado');

    let row = '<tr>';
    row += `<td>${nomeInput.value}`;
    row += `<td>${telInput.value}`;
    row += '</tr>';

    rows += row;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = rows;
});
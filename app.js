const name = document.getElementById('name');
const note1 = document.getElementById('note1');
const note2 = document.getElementById('note2');
const note3 = document.getElementById('note3');
const btnCalculate = document.getElementById('btn-calculate');
const btnPredict = document.getElementById('btn-predict');
const result = document.getElementById('result');

btnCalculate.addEventListener('click', calculateNote);
btnPredict.addEventListener('click', predictNote);


function calculateNote(event) {
    event.preventDefault();
    let userName = name.value;
    let data1 = Number(note1.value);
    let data2 = Number(note2.value);
    let data3 = Number(note3.value);
    
    let result1 = ((data1 * 0.3) + (data2 * 0.3) + (data3 * 0.4)).toFixed(1);
    
    if (result1 >= 1 && result1 < 3.5) {

        result.style.color = 'black';
        result.textContent = `${userName} has perdido la materia en ${result1}`;

    } else if (result1 >= 3.5 && result1 < 4.5) {

        result.style.color = 'orange';
        result.textContent = `${userName} has ganado la materia en ${result1}`;

    } else if (result1 >= 4.5 && result1 <= 5) {

        result.style.color = 'green';
        result.textContent = `${userName} has ganado la materia con ${result1} (sobresaliente)`;

    } else {

        alert('Alguna de las notas no concuerda');
    }
}



function predictNote(event) {
    event.preventDefault();
    let userName = name.value;
    let data1 = Number(note1.value);
    let data2 = Number(note2.value);
    let notaMinima = 3.5;

    if (data1 < 1 || data1 > 5 || data2 < 1 || data2 > 5) {
        alert('Alguna de las notas no concuerda');
        return;
    }

    let result2 = (notaMinima - (data1 * 0.3) - (data2 * 0.3)) / 0.4;

    if (result2 > 5.0) {

        note3.placeholder=` ${result2.toFixed(2)}`
        result.style.color = 'black';
        result.textContent = `${userName}, no es posible pasar la materia . `;

    } else if (result2 < 0) {

        note3.placeholder=` ${result2.toFixed(2)}`
        result.style.color = 'green';
        result.textContent = `${userName}, ya tienes suficiente para pasar la materia.`;

    } else {
        note3.placeholder=` ${result2.toFixed(2)}`
        result.style.color = 'blue';
        result.textContent = `${userName},  te falta poco para pasar la materia.`;
    }

}

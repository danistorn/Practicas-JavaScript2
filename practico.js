// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const pclase = document.querySelector('.parrafoConClase');
// const pid = document.querySelector('#parrafoConID');
// const input = document.querySelector('input');


//Me los traigo para poder utilizarlos aquí
const form = document.querySelector('#form');
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


//escuchador de eventos. Cómo funciona "addEventListener":
//el selector/elemento HTML del que estamos hablando es "btn"
//Cuál de todos los eventos queremos escuchar? click en este caso.
//Cuál es la función que mande a llamar al ocurrir ese evento.
form.addEventListener('submit', sumarInputVarios);    //acá indico la función pero SIN los paréntensis.



//debido a que el ultimo boton de un formulario hace algo raro con la url, hace falta indicar que no ocurra ese accion de default 
function sumarInputVarios (event) {
    console.log({event});
    event.preventDefault(); //para que no se ejecute el recargar la pag y cambiar la URL
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value); 
    pResult.innerText = "Resultado: " + sumaInputs; 
}



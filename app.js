// 'use strict';

/*
var gatitaLinda = 'nenu';

function cat() {
  gatitalinda = 'morry';
  alert(gatitaLinda);
}

cat();


function teachers (teacher1, teacher2, teacher1) {
  alert(teacher1);
  alert(teacher2);
}

teachers('Ale', 'Marcia', 'Fabián');


function teachers (teacher1, teacher2, teacher1) {
  alert(arguments[0]);
  alert(arguments[1]);
}

teachers('Ale', 'Marcia', 'Fabián');

function saludar() {
  'use strict';
  saludo = 'Buenos días su señoría';
  alert(saludo);
}
saludar();

const suma = (arreglo) => {
  let resultado = 0;
  if (arreglo.length > 10) {
    throw new Error ('Oe pero oe, demasiados números');
  }
  arreglo.forEach(i => resultado += i);
  return resultado;
}

console.log(suma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

const validatePassword = (password) => {
  if (password.length < 5) {
    throw new Error('contraseña muy corta');
  }
  if (password.length > 10) {
    throw new Error('contraseña muy larga');
  }
  alert('Contraseña validada');
}
console.log(validatePassword('pancito'));


// TRY...CATCH

const suma = (arreglo) => {
  let resultado = 0;
  try {
    if (arreglo.length > 10) {
      throw 'Muchos números';
    }
  } catch(error) {
    if (error === 'Muchos números') {
      alert('Oe pero oe, demasiados números');
    }
  }
  arreglo.forEach(i => resultado += i);
  return resultado;
}
console.log(suma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

const input = document.getElementById('input-password');
input.addEventListener('keypress', (event) => {
  const key = event.which || event.keyCode;
  if (key === 13){
    let password = input.value;
    console.log(password);
    try {
      if (password.length < 5) {
        throw 'Muy corta';
      }
      if (password.length > 10) {
        throw 'Muy larga';
      }
      alert('contraseña validada');
    } catch(err) {
      if (err === 'Muy corta') {
        alert('Contraseña muy corta');
      }
      if (err === 'Muy larga') {
        alert('Contraseña muy larga');
      }
    }
  }
})

const novieFeliz = true;
// Creamos promesa
const tendreNuevoCompu = new Promise((resolve, reject) => {
  if (novieFeliz === true) {
    const compu = {
      marca: 'Apple',
      tipo: 'Macbook pro'
    }
    resolve(compu); // promesa cumplida
  } else {
    const motivo = new Error('La cagaste');
    reject(motivo);
  }
})

const presumir = function(compu) {
  const mensaje = `Mira maldita igualada, tengo un nuevo ${compu.tipo} de ${compu.marca}`;
  return Promise.resolve(mensaje);
}

const preguntarleANovie = function() {
  tendreNuevoCompu
    .then(presumir)
    .then(cumplido => console.log(cumplido))
    .catch(error => console.log(error));
}
preguntarleANovie();

*/

const input = document.getElementById('input-password');
input.addEventListener('keypress', (event) => {
  const key = event.which || event.keyCode;
  if (key === 13) {
    const secreto = new Promise((resolve, reject) => {
      let password = input.value;
      if (password.length > 5 && password.length < 10) {
        const topSecret = 'El secreto está en tu corazón';
        resolve(topSecret);
      } else {
        const motivo = new Error('No te diré nah');
        reject(motivo);
      }
    });
    // Llamamos a la promesa
    const pasaElSecreto = function() {
      secreto
        .then(cumplido => console.log(cumplido))
        .catch(error => console.log(error));
    };
    pasaElSecreto();
  }
});
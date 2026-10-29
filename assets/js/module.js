import {
  saludar,
  rechazo,
  ready,
  otra,
  lanza,
  saldo,
  time,
  reci,
} from "./exerc.js";

saludar().then((resultado) => console.log(resultado));

const answer = await saludar();
console.log(answer);

rechazo().catch((error) => console.log(error));

setTimeout(() => {
  console.log(ready()); //directly "Listo"
}, 2000);

let miIntervalo = setInterval(() => {
  console.log("Tic");
}, 500);

clearInterval(miIntervalo);

otra().then((num) => {
  console.log(num + 5);
});

try {
  await lanza();
} catch (err) {
  let text = err.message;
  console.log(text);
}

saldo()
  .then(() => {
    console.log(" ");
  })
  .catch((error) => {
    console.log(error);
  });

for (let i = 1; i <= 3; ++i) {
  console.log(i);
  await time();
}

try {
  const p = await reci("");
  console.log(p);
} catch (error) {
  console.log(error);
}

reci("Primero imprimo")
  .then((valor) => {
    console.log(valor);
    return valor;
  })
  .then((valor) => {
    console.log(valor.length);
  });

Promise.resolve("Exito")
  .then((valor) => {
    throw "Error inesperado";
  })
  .catch((error) => {
    console.log(error);
  });

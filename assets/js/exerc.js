export async function saludar() {
  return "Hola";
}

export function rechazo() {
  return Promise.reject("Error fatal");
}

export function ready() {
  return "Listo";
}

export function otra() {
  return new Promise((resolve) => {
    resolve(5);
  });
}

export async function lanza() {
  throw new Error("Fallo");
}

export function saldo() {
  return new Promise((resolve, reject) => {
    reject("No hay saldo");
  });
}

export function time() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tiempo terminado");
    }, 1000);
  });
}

export function reci(str) {
  return new Promise((resolve, reject) => {
    if (str === "") {
      reject("El string esta vacio");
    } else {
      resolve(str.toUpperCase());
    }
  });
}

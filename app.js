const encriptar = document.querySelector(".encriptarBoton");
encriptar.innerHTML = "Encriptador";
const desencriptar = document.querySelector(".desencriptarBoton");
desencriptar.innerHTML = "Desencriptar";
const botonCopiaEncriptado = document.querySelector(".copiarTextoEncriptado");
botonCopiaEncriptado.innerHTML = "copiar Encriptado";
const botonCopiaDesencriptado = document.querySelector(
  ".copiarTextoDesencriptado"
);
botonCopiaDesencriptado.innerHTML = "copiar texto";

function encriptador() {
  let parrafoEncriptado = "";
  let parrafo = document.getElementById("encriptando").value;

  for (let i = 0; i < parrafo.length; i++) {
    let letra = parrafo[i];

    if ((letra >= "a" && letra <= "z") || letra === " ") {
      if (letra === "a") {
        parrafoEncriptado += "ai";
      } else if (letra === "e") {
        parrafoEncriptado += "enter";
      } else if (letra === "i") {
        parrafoEncriptado += "imes";
      } else if (letra === "o") {
        parrafoEncriptado += "ober";
      } else if (letra === "u") {
        parrafoEncriptado += "ufat";
      } else {
        parrafoEncriptado += letra;
      }
    } else {
      alert("Solo se aceptan letras minúsculas del alfabeto.");
      return;
    }
  }

  document.getElementById("desencriptando").value = parrafoEncriptado;
}

function desencriptador() {
  let parrafo = document.getElementById("desencriptando").value;

  let parrafoDesencriptado = parrafo
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("encriptando").value = parrafoDesencriptado;
}

function copiarTexto(id) {
  let campoTexto = document.getElementById(id);

  campoTexto.select();
  campoTexto.setSelectionRange(0, 99999);

  navigator.clipboard
    .writeText(campoTexto.value)
    .then(() => {
      alert("Texto copiado al portapapeles.");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}

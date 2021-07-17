const form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getIMC(peso, altura);
  const nivelIMC = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelIMC})`;
  setResultado(msg, true);
});

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

function getIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau I",
    "Obesidade grau II",
    "Obesidade grau III",
  ];

  if (imc > 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

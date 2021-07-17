function meuEscopo() {
  const form = document.querySelector("#formulario");
  const result = document.querySelector("#resultado");
  const peso = document.querySelector("#peso");
  const altura = document.querySelector("#altura");

  function escutaEventoForm(evento) {
    evento.preventDefault();

    if (peso.value === "" && altura.value === "") {
      result.style.cssText =
        "display: block;" + "background-color: red;" + "color: white;";
      result.textContent = `Informe seu peso e sua altura.`;
    } else if (peso.value === "") {
      result.style.cssText =
        "display: block;" + "background-color: red;" + "color: white;";
      result.textContent = `Informe seu peso.`;
    } else if (altura.value === "") {
      result.style.cssText =
        "display: block;" + "background-color: red;" + "color: white;";
      result.textContent = `Informe sua altura.`;
    } else {
      const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
      let classificacao;
      if (imc < 18.5) {
        classificacao = `Abaixo do peso`;
        result.style.cssText =
          "display: block;" + "background-color: #ff5100;" + "color: white;";
        result.textContent = classificacao;
      } else if (imc < 25) {
        classificacao = `Peso normal`;
        result.style.cssText =
          "display: block;" + "background-color: #009b1a;" + "color: white;";
        result.textContent = classificacao;
      } else if (imc < 30) {
        classificacao = `Sobrepeso`;
        result.style.cssText =
          "display: block;" + "background-color: blue;" + "color: white";
        result.textContent = classificacao;
      } else if (imc < 35) {
        classificacao = `Obesidade grau I`;
        result.style.cssText =
          "display: block;" + "background-color: #da0000;" + "color: white";
        result.textContent = classificacao;
      } else if (imc < 40) {
        classificacao = `Obesidade grau II`;
        result.style.cssText =
          "display: block;" + "background-color: #b80000;" + "color: white";
        result.textContent = classificacao;
      } else if (imc >= 40) {
        classificacao = `Obesidade grau III`;
        result.style.cssText =
          "display: block;" + "background-color: #9b0000;" + "color: white";
        result.textContent = classificacao;
      }
    }
  }

  form.addEventListener("submit", escutaEventoForm);
}

meuEscopo();

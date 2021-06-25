const calc = document.getElementById('calcular');

function imc() {
  let name = document.getElementById('nome').value;
  let height = document.getElementById('altura').value;
  let weight = document.getElementById('peso').value;
  let result = document.getElementById('resultado');

  if (name !== '' && height !== '' && weight !== '') {
    const imc = (weight / (height * height)).toFixed(2);
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = `abaixo do peso.`
    } else if (imc < 25) {
      classificacao = `com peso ideal. Parabéns!!!`
    } else if (imc < 30) {
      classificacao = `levemente acima do peso.`
    } else if (imc < 35) {
      classificacao = `com obesidade de grau I.`
    } else if (imc < 40) {
      classificacao = `com obesidade de grau II.`
    } else {
      classificacao = `com obesidade grau III. Cuidado!!!`
    }

    result.textContent = `${name}, seu IMC é ${imc} e você está ${classificacao}`;
  } else {
    result.textContent = `Preencha todos os campos!`;
  }
}

calc.addEventListener('click', imc);
  let calcular = document.querySelector('.calcular');


 calcular.addEventListener('click', function(event) {
    event.preventDefault();
    
    let num1 = parseFloat(document.querySelector('.numero1').value),
        num2 = parseFloat(document.querySelector('.numero2').value),
        operacion = parseFloat(document.querySelector('#operador').value);
    
    let resultado;
  
    switch (operacion) {
      case 1: // Suma
        resultado = calcularSuma(num1, num2);
        break;
      case 2: // Resta
        resultado = calcularResta(num1, num2);
        break;
      case 3: // Multiplicación
        resultado = calcularMultiplicacion(num1, num2);
        break;
      case 4: // División
        resultado = calcularDivision(num1, num2);
        break;
      default:
        resultado = 'Operación inválida';
        break;
    }
    
    resultado = resultado.toFixed(2);
    document.querySelector('.resultado').value = resultado;
  });
  


function calcularSuma (num1, num2){
    return num1 + num2
}

function calcularResta (num1, num2){
    return num1 - num2
}

function calcularMultiplicacion (num1, num2){
    return num1 * num2
}

function calcularDivision (num1, num2){
    return num1 / num2
}
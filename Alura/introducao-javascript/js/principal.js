var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");



for(var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];


    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true; 

    if(peso <= 0 || peso > 400) {
        console.log("Peso invalido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido")
        
    }

    if(altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida");
        alturaEhValida = false; 
        tdImc.textContent = "Altura inválido!";
        paciente.classList.add("paciente-invalido")
    }

    if(alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(1); // com o toFixed podemos definir quantas casas decimais queremos imprimir
    }
}



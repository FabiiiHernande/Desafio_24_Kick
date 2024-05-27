function conversor(){

    let celsius = parseFloat(document.getElementById("celsius").value);

    let conversao = document.getElementById("conversao").value;

    let resultado;

    let text;


    if(conversao == "kelvin"){

        resultado = celsius + 273;

        text = `<p> A temperatura ${celsius}ºC (Celsius) corresponde a ${resultado}ºK (Kelvin) </p>`;

    }else{

        resultado = (celsius * 9/5) + 32;
        
        text = `<p> A temperatura ${celsius}ºC (Celsius) corresponde a ${resultado}ºF (Fahrenheit) </p>`;
    }

    document.getElementById("resultado").innerHTML = text;
}
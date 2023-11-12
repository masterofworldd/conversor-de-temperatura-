function calcular(){
    var number = parseInt(document.getElementById("number").value)
    var result = document.getElementById("result")
    var escala1 = document.getElementById("escala1").value
    var escala2 = document.getElementById("escala2").value
    var body = document.getElementById("body")
    
    
    if(escala1 == "celcius" && escala2 =="fahrenheit"){
        result.innerHTML = "Fahrenheit: " + (number * (9/5) + 32).toFixed(2)
    }else if(escala1 == "celcius" && escala2 =="kelvin"){
        result.innerHTML = " Kelvins: " + (number + 273.15).toFixed(2)
    }else if(escala1 == "celcius" && escala2 =="celcius"){
        result.innerHTML = "Celcius: " + number
    }else if(escala1 == "fahrenheit" && escala2 =="fahrenheit"){
        result.innerHTML = "Fahrenheit: " + number.toFixed(2)
    }else if(escala1 == "fahrenheit" && escala2 =="kelvin"){
        result.innerHTML = "Kelvins: " + (number + 459.67)*(5/9).toFixed(2)
    }else if(escala1 == "fahrenheit" && escala2 =="celcius"){
        result.innerHTML = "Celcius: " + (number - 32) * (5/9).toFixed(2)
    }else if(escala1 == "kelvin" && escala2 =="fahrenheit"){
        result.innerHTML = "Fahrenheit: " + (number *(9/5) - 459.67).toFixed(2)
    }else if(escala1 == "kelvin" && escala2 =="kelvin"){
        result.innerHTML = "Kelvins: " + number.toFixed(2)
    }else if(escala1 == "kelvin" && escala2 =="celcius"){
        result.innerHTML = "Celcius: " + (number - 273.15).toFixed(2)
    }
    if(escala1 === "kelvin" && number < 0){
        alert("Kelvin não pode ter valor negativo")
     }


    if(escala1 == "celcius"){
        if(number <= 15){
            body.style.backgroundColor = 'blue'
        }else if(number >15 && number < 25){
            body.style.backgroundColor = 'yellow'
        }else if( number >= 25){
            body.style.backgroundColor = 'red'
        }
    }else if(escala1 == "fahrenheit"){
        if(number <= 59){
            body.style.backgroundColor = 'blue'
        }else if(number >59 && number < 77){
            body.style.backgroundColor = 'yellow'
        }else if( number >= 77){
            body.style.backgroundColor = 'red'
        }
    }else if(escala1 == "kelvin"){
       
        if(number <= 288.15){
            body.style.backgroundColor = 'blue'
        }else if(number >288.15 && number < 298.15){
            body.style.backgroundColor = 'yellow'
        }else if( number >= 298.15){
            body.style.backgroundColor = 'red'
        }
       
}
}

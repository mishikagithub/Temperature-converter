let celciusInput = document.queryselector('#celcius > input');
let fahrenheitInput = document.queryselector('#fahrenheit > input');
let kelvinInput = document.queryselector('#kelvin > input');

let btn = document.queryselector('.button button');

function roundNumber(number) {
    return Math.round(number * 100) / 100
}
/*celcius to fahrenheit and kelvin*/
celciusInput.addEventListener('input', function() {
    let cTemp = parsefloat(celciusInput.value)
    let fTemp = (cTemp * (9 / 5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)

});
/*fahrenheit to celcius and kelvin*/
fahrenheitInput.addEventListener('input', function() {
    let fTemp = parsefloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5 / 9)
    let kTemp = (fTemp - 32) * (5 / 9) + 273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)

})

kelvinInput.addEventListener('input', function() {
    let kTemp = parsefloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32

    celciusInput.value = roundNumber(cTemp)
    farenheitInput.value = roundNumber(fTemp)

})
btn.addEventListener('click', () => {
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})
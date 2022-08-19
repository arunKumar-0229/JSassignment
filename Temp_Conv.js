"use strict"
let farenheit_temp=45
let celsius=60

function toCelsius(f){
    return (f - 32) * (5/9);
};

function toFarenheit(c){
    return (c * 9/5) + 32;
};

let myTemperature = toCelsius(farenheit_temp);
let myTemp = toFarenheit(celsius);

console.log("Temperature in Celsius is",myTemperature,"°C");
console.log("Temperature in Farenheit is",myTemp,"°F");
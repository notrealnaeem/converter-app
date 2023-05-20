/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let btnEl=document.getElementById("convert-btn")
let inputEl=document.getElementById("input-box")
let resultLen=document.getElementById("r-unit1")
let resultVol=document.getElementById("r-unit2")
let resultMass=document.getElementById("r-unit3")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

// Length>>

btnEl.addEventListener("click", function() {
    
  let  baseValue = inputEl.value
  
  let  meter1=baseValue * meterToFeet
  let  meter2=baseValue/meterToFeet
  
  
  
    
   resultLen.textContent = `
   ${baseValue} meter = ${meter1.toFixed(3)} feet ||
   ${baseValue} feet = ${meter2.toFixed(3)} meters
   
   `
  let  vol1=baseValue * literToGallon
  let  vol2=baseValue/literToGallon
  
  
   
   resultVol.textContent=`
    ${baseValue} liter = ${vol1.toFixed(3)} gallon ||
   ${baseValue} gallon = ${vol2.toFixed(3)} liters
 
   `
   
   let  mass1=baseValue * kiloToPound
  let  mass2=baseValue/kiloToPound
  
   
     resultMass.textContent=`
    ${baseValue} kilo = ${mass1.toFixed(3)} pound ||
   ${baseValue} pound = ${mass2.toFixed(3)} kilos
 
   `
   
   
    
})


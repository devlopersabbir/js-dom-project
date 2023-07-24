/**
 * Requirement
 * Generate hex color and show that color also fill the bg color
 *
 */

const rootDiv = document.getElementById("rootDiv");
const changeBtn = document.getElementById("changeBtn");
const output = document.getElementById("output");

const main = ()=>{
  const btnHandler = ()=>{
    rootDiv.style.backgroundColor = generateHexColorCode();
    output.value = generateHexColorCode();
  }

  const copyHandler = ()=>{
    console.log('copy handler')
  }
  changeBtn.addEventListener("click", btnHandler)
  output.addEventListener("click", copyHandler)
}


const generateHexColorCode = ()=>{
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const yellow = Math.floor(Math.random() * 255);

  const generatedColor = `#${red.toString(16)}${green.toString(16)}${yellow.toString(16)}`;
  return generatedColor;
}
document.addEventListener("DOMContentLoaded", main)

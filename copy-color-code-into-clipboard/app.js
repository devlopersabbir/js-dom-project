/**
 * Requirement
 * Generate hex color and show that color also fill the bg color
 * Also when click on the copy button it should be copy
 */

const rootDiv = document.getElementById("rootDiv");
const changeBtn = document.getElementById("changeBtn");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

const main = ()=>{
  const btnHandler = ()=>{
    rootDiv.style.backgroundColor = generateHexColorCode();
    output.value = generateHexColorCode();
  }

  const copyBtnHandler = async()=>{
    console.log('clicked')
    await window.navigator.clipboard.writeText(output.value)  
  }

  changeBtn.addEventListener("click", btnHandler)
  copyBtn.addEventListener("click", copyBtnHandler)
}


const generateHexColorCode = ()=>{
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const yellow = Math.floor(Math.random() * 255);

  const generatedColor = `#${red.toString(16)}${green.toString(16)}${yellow.toString(16)}`;
  return generatedColor;
}
document.addEventListener("DOMContentLoaded", main)

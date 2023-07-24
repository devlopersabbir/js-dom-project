/**
 * Requirement
 * Generate RGB color 
 */

// dom selection
const rootDiv = document.getElementById("rootDiv");
const changeBtn = document.getElementById("changeBtn");


const generateRgbColor = ()=>{
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const createRBGColor = `rgb(${red},${green},${blue})`;
  
  return createRBGColor;
}


const main = ()=>{
  changeBtn.addEventListener('click', ()=>{
    rootDiv.style.backgroundColor = generateRgbColor();
  })
}


document.addEventListener("DOMContentLoaded", main)

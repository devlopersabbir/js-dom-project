/**
 * Requirement
 * 1. Create a color generator app
 * 2. This app able to fill the generated color into the container color
 * 3. Also show the generated color code
 * 4. Able to copy that color
 * 5. Show a toast message when color code is copet
 */

// dom selection
const rootDiv = document.getElementById("rootDiv");
const changeBtn = document.getElementById("changeBtn");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");
const createToasts = document.querySelector(".createToast");

// change handler
const changeBtnHandler = () => {
  rootDiv.style.backgroundColor = generateHexColorCode();
  output.value = generateHexColorCode();
};

// create toaster
const createToaster = (message, duration) => {
  const createToastElement = document.createElement("div");
  createToastElement.className =
    "toast__message__with__message toast__animation_in";
  createToastElement.innerText = message ?? "Coped";

  document.body.appendChild(createToastElement);

  createToastElement.addEventListener("click", () => {
    createToastElement.classList.remove("toast__animation_in");
    createToastElement.classList.add("toast__animation_out");

    createToastElement.addEventListener("animationend", () => {
      createToastElement.remove();
    });
  });

  // disbaled toaster buy setTimeout
  setTimeout(() => {
    createToastElement.className = "toast__animation_out";

    createToastElement.addEventListener("animationend", () => {
      createToastElement.remove();
    });
  }, duration ?? 3000);
};

// copy button handler
const copyBtnHandler = async () => {
  if (checkHexCodeValid(output.value)) {
    await window.navigator.clipboard
      .writeText(output.value)
      .then(() =>
        createToaster(`${output.value} Color code successfully copied🔥`)
      )
      .catch(() => createToaster("Fail to copy color code😒"));
  } else {
    createToaster(`Invalid Colore code!`);
  }
};

copyBtn.addEventListener("click", copyBtnHandler);
changeBtn.addEventListener("click", changeBtnHandler);

// generate hex color code
const generateHexColorCode = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const hexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(
    16
  )}`;
  return hexColor;
};

// when user change anything on our code input
output.addEventListener("keyup", (event) => {
  const color = event.target.value;
  if (color && checkHexCodeValid(color)) {
    rootDiv.style.backgroundColor = color;
  }
});

// check the user inputed hex code is valid or not
/**
 *
 * @param {string} colorCode
 */
const checkHexCodeValid = (colorCode) => {
  if (colorCode.length !== 7) return false;
  if (colorCode[0] !== "#") return false;

  colorCode = colorCode.substring(1);
  const regexPartern = /^[0-9A-Fa-f]{6}$/i;
  return regexPartern.test(colorCode);
};

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

// globa
let isDivHave = null;

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
  isDivHave = true;
  document.body.appendChild(createToastElement);

  createToastElement.addEventListener("click", () => {
    createToastElement.classList.remove("toast__animation_in");
    createToastElement.classList.add("toast__animation_out");
    createToastElement.addEventListener("animationend", () => {
      createToastElement.remove();
      isDivHave = null;
    });
  });

  // disbaled toaster buy setTimeout
  setTimeout(() => {
    createToastElement.className = "toast__animation_out";
    createToastElement.addEventListener("animationend", () => {
      createToastElement.remove();
      isDivHave = null;
    });
  }, duration ?? 3000);
};

// copy button handler
const copyBtnHandler = async () => {
  await window.navigator.clipboard
    .writeText(output.value)
    .then(() => {
      if (isDivHave !== null) {
        isDivHave = null;
        createToaster(`${output.value} Color code successfully copied🔥`);
      }
    })
    .catch(() => {
      if (isDivHave !== null) {
        isDivHave = null;
        createToaster("Fail to copy color code😒");
      }
    });
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

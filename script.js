const clock = document.getElementById("clock");
const time = document.getElementById("time");
const amPm = document.getElementById("am-pm");
const switchBtn = document.getElementById("switch-btn");
const settingsBtn = document.getElementById("settings-btn");
const settingsModal = document.getElementById("settings-modal");
const closeModalBtn = document.querySelector(".close-btn");
const saveBtn = document.getElementById("save-btn");
const backgroundColorSelect = document.getElementById("background-color");
const fontColorSelect = document.getElementById("font-color");

let is24Hour = false;
let backgroundColor = "#FFFFFF";
let fontColor = "#37352F";

function updateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (!is24Hour) {
    let amPmValue = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    amPm.innerText = amPmValue;
    time.innerText = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  } else {
    amPm.innerText = "";
    time.innerText = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  }

  clock.style.color = fontColor;
  document.body.style.color = fontColor; // Update font color for the body content
  
  // Update font color for the buttons
  switchBtn.style.color = fontColor;
  settingsBtn.style.color = fontColor;
}

function openSettingsModal() {
  settingsModal.style.display = "flex";
}

function closeSettingsModal() {
  settingsModal.style.display = "none";
}

function saveSettings() {
  backgroundColor = backgroundColorSelect.value;
  fontColor = fontColorSelect.value;
  
  // Update the backgroundColor of the body element
  document.body.style.backgroundColor = backgroundColor;
  
  // Update the fontColor of the clock element, body content, and buttons
  clock.style.color = fontColor;
  document.body.style.color = fontColor;
  switchBtn.style.color = fontColor;
  settingsBtn.style.color = fontColor;
  
  // Update the time to reflect the changes immediately
  updateTime();
  
  // Close the settings modal
  closeSettingsModal();
}

switchBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  switchBtn.innerText = is24Hour ? "24" : "12";
  updateTime();
});

settingsBtn.addEventListener("click", openSettingsModal);
closeModalBtn.addEventListener("click", closeSettingsModal);
saveBtn.addEventListener("click", saveSettings);

// Load user preferences on page load (you can modify this part to load from localStorage, for example)
updateTime();
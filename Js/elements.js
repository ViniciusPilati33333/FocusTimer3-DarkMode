const playTimer = document.querySelector(".play");
const pauseTimer = document.querySelector(".pause");
const updateTimer = document.querySelector(".restart");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const buttonAddFiveMinutes = document.querySelector(".sumFive");
const buttonRemoveFiveMinutes = document.querySelector(".decreaseFive");
const soundForest = document.querySelector(".forest-sound");
const soundRain = document.querySelector(".rain-sound");
const soundCoffeShop = document.querySelector(".coffeeshop-sound");
const soundFireplace = document.querySelector(".fireside-sound");
const SunLightMode = document.querySelector(".lightModeSun");
const MoonDarkMode = document.querySelector(".DarkMode");

const soundForestVolume = document.querySelector("#volume-forest")
const soundRainVolume = document.querySelector("#volume-rain")
const soundCoffeShopVolume = document.querySelector("#volume-coffeeshop")
const soundFireplaceVolume = document.querySelector("#volume-fireside")

export {
  playTimer,
  pauseTimer,
  updateTimer,
  minutesDisplay,
  secondsDisplay,
  buttonAddFiveMinutes,
  buttonRemoveFiveMinutes,
  soundForest,
  soundRain,
  soundCoffeShop,
  soundFireplace,
  SunLightMode,
  MoonDarkMode,
  
  soundForestVolume,
  soundRainVolume,
  soundCoffeShopVolume,
  soundFireplaceVolume,
};
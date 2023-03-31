import { Timer } from "./timer.js";
import { Sound } from "./sounds.js";
import {
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

  soundForestVolume,
  soundRainVolume,
  soundCoffeShopVolume,
  soundFireplaceVolume,
} from "./elements.js"

 // ajustando o volume com o input 👇

export default function() {
  soundForestVolume.addEventListener('input', sound.volumeControl)
  soundRainVolume.addEventListener('input', sound.volumeControl)
  soundCoffeShopVolume.addEventListener('input', sound.volumeControl)
  soundFireplaceVolume.addEventListener('input', sound.volumeControl)
}

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  playTimer,
  pauseTimer,
  buttonAddFiveMinutes,
  buttonRemoveFiveMinutes,
});

const sound = Sound();

playTimer.addEventListener('click', function(){
    timer.play();
    sound.pressButton();
})

pauseTimer.addEventListener('click', function() {
   timer.pause();
   sound.pressButton();
})

updateTimer.addEventListener('click', function() {
    timer.BtnUpdateTimer();
    timer.pause();
    sound.pressButton();
})

buttonAddFiveMinutes.addEventListener('click', function(){
  timer.BtnAddFiveMinutes();
  sound.pressButton();
});


buttonRemoveFiveMinutes.addEventListener('click', function(){
  timer.BtnRemoveFiveMinutes();
  sound.pressButton();

});

soundForest.addEventListener('click', function(){
  sound.playForestAudio();
});

soundRain.addEventListener("click", function() {
  sound.playRainAudio();
});

soundCoffeShop.addEventListener("click", function() {
  sound.playSoundCoffeShop();
});

soundFireplace.addEventListener("click", function() {
  sound.playSoundFireplace();
});




















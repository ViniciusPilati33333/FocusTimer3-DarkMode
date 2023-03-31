import { Sound } from "./sounds.js"

let countdownTimeOut;
let newMinutes;

export function Timer({
  minutesDisplay,
  secondsDisplay,
  playTimer,
  pauseTimer,
  BtnAddFiveMinutes,
  BtnRemoveFiveMinutes,
}) {
  function play() {
    playTimer.classList.add("hide")
    pauseTimer.classList.remove("hide")
    countDown()
  }

  function pause() {
    playTimer.classList.remove("hide")
    pauseTimer.classList.add("hide")
    clearTimeout(countdownTimeOut)
  }

  function countDown() {
    countdownTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let finishedTimer = minutes <= 0 && seconds <= 0

      if (finishedTimer) {
        pause()
        Sound().timeEnd()
        BtnUpdateTimer((newMinutes = 25))
        return
      }
      if (seconds <= 0) {
        seconds = 3
        minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
      }
      secondsDisplay.textContent = String(seconds - 1).padStart(2, "0") // atualizando os segundos
      countDown()
    }, 1000)
  }

  function BtnUpdateTimer(resetValue = 25) {
    newMinutes = resetValue
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(0).padStart(2, "0")
    clearTimeout(countdownTimeOut)
  }

  function BtnAddFiveMinutes() {
    newMinutes = Number(minutesDisplay.textContent)
    newMinutes += 5
    BtnUpdateTimer(newMinutes)
    pause()
  }

  function BtnRemoveFiveMinutes() {
    newMinutes = Number(minutesDisplay.textContent)

    if (newMinutes <= 5) {
      newMinutes = newMinutes - newMinutes
      BtnUpdateTimer(newMinutes)
      pause()
      return
    }
    newMinutes -= 5
    BtnUpdateTimer(newMinutes)
    pause()
  }

  return {
    BtnUpdateTimer,
    countDown,
    play,
    pause,
    BtnAddFiveMinutes,
    BtnRemoveFiveMinutes,
  }
}

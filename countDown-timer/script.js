const newYears = '1 Jan 2021'

const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}
const countdown = () => {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date()

  const totalSeconds = (newYearsDate - currentDate) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)

  const hours = Math.floor(totalSeconds / 3600) % 24

  const mins = Math.floor(totalSeconds / 60) % 60

  const seconds = Math.floor(totalSeconds) % 60

  // console.log(days, hours, mins, seconds)

  daysElement.innerHTML = formatTime(days)
  hoursElement.innerHTML = formatTime(hours)
  minutesElement.innerHTML = formatTime(mins)
  secondsElement.innerHTML = formatTime(seconds)
}

//initial call
// countdown()

setInterval(countdown, 1000)

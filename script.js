const newYears = "1 Jan 2024";
let days = document.querySelector(".dayshand");
let hours = document.querySelector(".hourshand");
let minutes = document.querySelector(".minuteshand");
let seconds = document.querySelector(".secondshand");
console.log(days, hours, minutes, seconds)
function countdown(d, h, m, s) {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();
  const timeDiffInMSec = (newYearDate - currentDate);
  const deciDay = timeDiffInMSec / (24 * 60 * 60 * 1000);
  const day = Math.trunc(deciDay);
  const deciHour = ((deciDay - day) * 24)
  const hour = Math.trunc(deciHour);
  const deciMinute = (deciHour - hour) * 60;
  const minute = Math.trunc(deciMinute);
  const deciSeconds = (deciMinute - minute) * 60;
  const second = Math.trunc(deciSeconds);

  days.textContent = day;
  hours.textContent = hour;
  minutes.textContent = minute;
  seconds.textContent = second

}
setInterval(countdown, 1000);



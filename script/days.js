const spanDate = () => {
  let spanActual = moment().format("DD-MM-YYYY HH:mm")
  document.querySelector("#span-actual").innerHTML = ""
  document.querySelector("#span-actual").innerHTML = spanActual
}

const changeDateFormat = (day) => {
  if (day < 10) {
   return day = "0" + day
 } else {
   return day
 }
}

spanDate()
const interval1 = setInterval(spanDate, 60000)

document.querySelector("#input-count-day").value = ""

document.querySelector(".form-count-day").addEventListener("submit", (e) => {
  e.preventDefault()
  document.querySelector(".display-count-day").innerHTML = ""

  let date = e.target.daycount.value
    if (date.includes(".")) {
      dateSplit = date.split(".")
      date = `${dateSplit[2]}-${dateSplit[1]}-${changeDateFormat(dateSplit[0])}`
    }

  let now = moment().diff(date, "days")

  let dayCount = document.createElement("p")
  dayCount.setAttribute("id", "day-count")
  dayCount.textContent = `${now} dni minęło od zakupu`
  let dayLeft = document.createElement("p")
  dayLeft.setAttribute("id", "day-left")
  dayLeft.textContent = `${90 - now} dni pozostało na ocenę transakcji`
  document.querySelector(".display-count-day").appendChild(dayCount)
  document.querySelector(".display-count-day").appendChild(dayLeft)
  document.querySelector("#input-count-day").value = ""
})

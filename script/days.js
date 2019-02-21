document.querySelector("#input-count-day").value = ""

document.querySelector(".form-count-day").addEventListener("submit", (e) => {
  e.preventDefault()
  document.querySelector(".display-count-day").innerHTML = ""

  let date = e.target.daycount.value
  let now = moment().diff(date, "days")

  let newElement = document.createElement("p")
  newElement.setAttribute("id", "day-count")
  newElement.textContent = `${now} days`
  document.querySelector(".display-count-day").appendChild(newElement)
  document.querySelector("#input-count-day").value = ""
})


const days_of_the_week = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]
  
  const male_names = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ]
  
  const female_names = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ]

  function day_of_week_formular(century, year, month, day) {
    const day_of_week = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
    return Math.floor(day_of_week); //make it whole number;
  }

function get_akan_name () {
  let day = document.getElementById("dob").value;
  console.log (day)
  let month = document.getElementById("mob").value;
  let year = document.getElementById("yob").value;

  if ((day <= 0) || (day > 31)) {
    day = prompt("Please add a valid Day of Birth")
  }
  if ((month <= 0) || (month > 12)) {
    month = prompt("Please add a valid Month of Birth")
  }

  let message = "";
if (gender == "male") {
  message = "You were born on " + days_of_the_week[returned_day_of_week] + ". So, your Akan Name is " + male_names[returned_day_of_week]
}
else {
  message = "You were born on " + days_of_the_week[returned_day_of_week] + ". So, your Akan Name is " + female_names[returned_day_of_week]
}
alert(message);
}

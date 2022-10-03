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

function get_akan_name() {
  /** connect DOM to script */
  let gender = document.getElementById("gender").value;
  let day = document.getElementById("dob").value;
  let month = document.getElementById("mob").value;
  let year = document.getElementById("yob").value;

/**check validity */
  if (!gender) {
    gender = prompt("Please add a valid gender")
  }
  if (day <= 0) {
    day = prompt("day is less than 1. Please add a valid day of birth")
  }
  else if (day > 31) {
    day = prompt("day is greater than 31. Please add a valid day of birth")
  }
  else if (month <= 0) {
    month = prompt("month is less than 1. Please add a valid month of birth")
  }
  else if (month > 12) {
    month = prompt("month is greater than 12. Please add a valid month of birth")
  }
  else {


    /** parameters */
    const century = year.substring(0, 2);
    const twoLetterYear = year.substring(2, 4);
    // call day_of_week_formular function;
    const returned_day_of_week = day_of_week_formular(century, twoLetterYear, month, day);


    // print the day the person was born
    let message = "";
    if (gender == "male") {
      message = "You were born on " + days_of_the_week[returned_day_of_week] + ". So, your Akan Name is " + male_names[returned_day_of_week]
    }
    else {
      message = "You were born on " + days_of_the_week[returned_day_of_week] + ". So, your Akan Name is " + female_names[returned_day_of_week]
    }
    alert(message);
  }
}
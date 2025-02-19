function calculateBMI() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let result = document.getElementById("result");

  if (height === "" || weight === "" || height <= 0 || weight <= 0) {
    result.innerHTML = "Please enter valid height and weight!";
    result.style.color = "red";
    return;
  }

  let bmi = (weight / (height / 100) ** 2).toFixed(2);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
    result.style.color = "blue";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal Weight";
    result.style.color = "green";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    result.style.color = "orange";
  } else {
    category = "Obese";
    result.style.color = "red";
  }

  result.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
}

import "bootstrap/dist/css/bootstrap.min.css";
import BMICalculator from "./BMICalculator";

const heightElement = document.getElementById("height");
const ageElement = document.getElementById("age");
const formElement = document.getElementById("form");
const outputElement = document.getElementById("output");

formElement.onsubmit = (event) => {
  event.preventDefault();

  const h = heightElement.value;
  const a = ageElement.value;

  const bmi = BMICalculator.findBMI(h, a);
  const output = BMICalculator.formatOutput(bmi);

  outputElement.innerHTML = output;
};

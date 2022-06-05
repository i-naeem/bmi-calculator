import "bootstrap/dist/css/bootstrap.min.css";
import BMICalculator from "./BMICalculator";

const heightElement = document.getElementById("height");
const weightElement = document.getElementById("weight");

const formElement = document.getElementById("form");
const outputElement = document.getElementById("output");

const heightUnitElement = document.getElementById("height-unit");
const weightUnitElement = document.getElementById("weight-unit");

formElement.onsubmit = (event) => {
  event.preventDefault();

  let h = parseFloat(heightElement.value);
  let w = parseFloat(weightElement.value);

  let hu = heightUnitElement.value;
  let wu = weightUnitElement.value;

  if (hu === "cm") h /= 100;
  if (wu === "lb") w /= 2.2046;

  const bmi = BMICalculator.findBMI(h, w);
  const output = BMICalculator.formatOutput(bmi);

  outputElement.innerHTML = output;
  outputElement.hidden = false;
};

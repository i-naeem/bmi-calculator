const findBMI = (height, weight) => {
  console.log(height, weight);
  return (weight / Math.pow(height, 2)).toFixed(1);
};

const formatOutput = (bmi) => {
  return `<p class="mb-0 fs-5"> Your BMI is <strong> ${bmi} </strong> </p>`;
};

export default { findBMI, formatOutput };

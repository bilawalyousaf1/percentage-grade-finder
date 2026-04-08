function calculate_percentage(event) {
  event.preventDefault();

  const obt = parseFloat(document.getElementById("obt").value);
  const total = parseFloat(document.getElementById("total").value);
  const output = document.getElementById("output");

  if (isNaN(obt) || isNaN(total) || total <= 0 || obt < 0) {
    output.innerText = "Please enter valid marks!";
    output.style.display = "block";
    return;
  }

  if (obt > total) {
    output.innerText = "Obtained marks cannot exceed total marks!";
    output.style.display = "block";
    return;
  }

  const percentage = (obt / total) * 100;
  output.innerText = `Your Percentage: ${percentage.toFixed(2)}%`;
  output.style.display = "block";
}

function calculate_grade(event) {
  event.preventDefault();

  const percentage = parseFloat(document.getElementById("percentage").value);
  const output = document.getElementById("output");

  if (isNaN(percentage) || percentage < 0 || percentage > 100) {
    output.innerText = "Please enter a valid percentage between 0 and 100!";
    output.style.display = "block";
    return;
  }

  let grade = "";

  if (percentage >= 95) grade = "A++";
  else if (percentage >= 90) grade = "A+";
  else if (percentage >= 85) grade = "A";
  else if (percentage >= 80) grade = "B++";
  else if (percentage >= 75) grade = "B+";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";
  else if (percentage >= 40) grade = "E";
  else grade = "Failed";

  output.innerText = `According to 2026 Board Rules, your grade is: "${grade}"`;
  output.style.display = "block";
}

// Add form event listeners
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".percentage-form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      if (this.querySelector("#percentage")) {
        calculate_grade(event);
      } else {
        calculate_percentage(event);
      }
    });
  });
});

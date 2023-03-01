// Add JavaScript code to calculate the required amount of water
const form = document.getElementById("brewingForm");
const resultCell = document.getElementById("resultCell");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Read the values entered by the user
  const people = Number(document.getElementById("peopleInput").value);
  const teacupSize = Number(document.getElementById("teacupSizeInput").value);
  const fill = Number(document.getElementById("fillInput").value);
  const teapotSize = Number(document.getElementById("teapotSizeInput").value);

  // Calculate the required amount of water
  const waterRequired = (people * teacupSize * fill * 0.01);
  const waterRequiredRounded = Math.round(waterRequired);

  // Display the result and apply the appropriate background color
  resultCell.innerText = waterRequiredRounded + " ml";
  resultCell.classList.remove("gray", "red", "yellow", "green");

  if (teapotSize < waterRequired) {
    resultCell.classList.add("gray");
  } else if (waterRequired / teapotSize > 0.9) {
    resultCell.classList.add("red");
  } else if (waterRequired / teapotSize < 0.8) {
    resultCell.classList.add("yellow");
  } else {
    resultCell.classList.add("green");
  }
});
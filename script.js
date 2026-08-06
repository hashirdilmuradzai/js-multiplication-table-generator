function printTable(event) {
  event.preventDefault();

  const tableNumber = document.querySelector("#tableNumber");
  const tableOutput = document.querySelector("#tableOutput");
  const tableLimit = document.querySelector("#tableLimit");
  const tableEnd = Number(tableLimit.value);
  const tableOf = Number(tableNumber.value);

  tableOutput.innerHTML = "";

  for (let i = 1; i <= tableEnd; i++) {
    tableOutput.innerHTML += tableOf + " x " + i + " = " + tableOf * i + "<br>";
  }
}

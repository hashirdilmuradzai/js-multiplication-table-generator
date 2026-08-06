function printTable(event) {
    event.preventDefault();
    const tableNumber = document.querySelector("#tableNumber");

    for (let i = 1; i <= 12; i++) {
        const tableOf = Number(tableNumber.value)

        console.log(tableOf + " x " + i + " = " + tableOf * i);
    }
}
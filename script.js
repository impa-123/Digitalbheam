function calculateCost() {
  const roomRate = document.getElementById("roomType").value === "Delux" ? 2500 : 4000;
  const amenitiesCost = Array.from(document.getElementById("amenities").selectedOptions)
    .reduce((total, option) => total + (option.value === "AC" ? 1000 : 300), 0);
  const totalDays = parseInt(document.getElementById("totalDays").value);
  const totalPersons = parseInt(document.getElementById("totalPersons").value);
  const advanceAmount = parseInt(document.getElementById("advanceAmount").value);
  

  const totalRoomCost = roomRate * totalDays;
  const totalAmenitiesCost = amenitiesCost * totalDays;
  const extraPersonCost = (totalPersons > 2) ? (totalPersons - 2) * 1000 : 0;
  const totalCost = totalRoomCost + totalAmenitiesCost + extraPersonCost;

  document.getElementById("balance").value = totalCost - advanceAmount;
  document.getElementById("totalRoomCost").value = totalRoomCost;
  document.getElementById("totalAmenitiesCost").value = totalAmenitiesCost;
  document.getElementById("extraPersonCost").value = extraPersonCost;
  document.getElementById("totalCost").value = totalCost;
}

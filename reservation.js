document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservationForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const dateInput = document.getElementById("date");
  const timeSelect = document.getElementById("time");
  const confirmationMsg = document.getElementById("confirmation");
  const tableBody = document.querySelector("#reservationTable tbody");
  const searchBox = document.getElementById("searchBox");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const date = dateInput.value;
    const time = timeSelect.value;
    [nameInput, emailInput, dateInput, timeSelect].forEach((input) => {
      input.style.border = "1px solid #ccc";
    });
    let isValid = true;
    if (!name) {
      nameInput.style.border = "2px solid red";
      isValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailInput.style.border = "2px solid red";
      isValid = false;
    }
    if (!date) {
      dateInput.style.border = "2px solid red";
      isValid = false;
    }
    if (!time) {
      timeSelect.style.border = "2px solid red";
      isValid = false;
    }
    if (!isValid) {
      confirmationMsg.textContent = "Please fill in all fields correctly!";
      confirmationMsg.style.color = "red";
      confirmationMsg.style.display = "block";
      setTimeout(() => (confirmationMsg.style.display = "none"), 2000);
      return;
    }
    confirmationMsg.textContent = `Thank you, ${name}! Your visit is booked for ${date} at ${time}.`;
    confirmationMsg.style.color = "green";
    confirmationMsg.style.display = "block";
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${date}</td>
      <td>${time}</td>
      <td>
        <button class="edit-btn btn btn-sm btn-warning">Edit</button>
        <button class="delete-btn btn btn-sm btn-danger">Delete</button>
      </td>
    `;
    newRow.style.display = "none";
    tableBody.appendChild(newRow);
    $(newRow).slideDown(400);
    form.reset();
    setTimeout(() => (confirmationMsg.style.display = "none"), 3000);
  });
  tableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const row = e.target.closest("tr");
      if (confirm("Are you sure you want to delete this reservation?")) {
        $(row).fadeOut(400, () => row.remove());
      }
    }
  });
  tableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
      const row = e.target.closest("tr");
      const cells = row.querySelectorAll("td");
      const [nameCell, emailCell, dateCell, timeCell] = cells;
      nameCell.innerHTML = `<input type="text" value="${nameCell.textContent}" class="form-control form-control-sm">`;
      emailCell.innerHTML = `<input type="email" value="${emailCell.textContent}" class="form-control form-control-sm">`;
      dateCell.innerHTML = `<input type="date" value="${dateCell.textContent}" class="form-control form-control-sm">`;
      timeCell.innerHTML = `<input type="time" value="${timeCell.textContent}" class="form-control form-control-sm">`;
      e.target.textContent = "Save";
      e.target.classList.remove("edit-btn", "btn-warning");
      e.target.classList.add("save-btn", "btn-success");
    }
    else if (e.target.classList.contains("save-btn")) {
      const row = e.target.closest("tr");
      const inputs = row.querySelectorAll("input");
      const [name, email, date, time] = Array.from(inputs).map((i) => i.value);
      row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>
          <button class="edit-btn btn btn-sm btn-warning">Edit</button>
          <button class="delete-btn btn btn-sm btn-danger">Delete</button>
        </td>
      `;
    }
  });
  searchBox.addEventListener("keyup", () => {
    const searchValue = searchBox.value.toLowerCase();
    document.querySelectorAll("#reservationTable tbody tr").forEach((row) => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(searchValue) ? "" : "none";
    });
  });
});

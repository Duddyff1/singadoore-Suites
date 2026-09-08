```javascript
let selectedRoomName = "";
let selectedRoomPrice = 0;

const breakfastMenus = {
  0: ["Sunday", "Pancakes • scrambled eggs • sausage • fruit • orange juice"],
  1: ["Monday", "Waffles • bacon • eggs • yogurt • cereal • apple juice"],
  2: ["Tuesday", "French toast • sausage • hash browns • fruit • milk"],
  3: ["Wednesday", "Pancakes • eggs • turkey sausage • yogurt • orange juice"],
  4: ["Thursday", "Waffles • bacon • fruit • cereal • apple juice"],
  5: ["Friday", "French toast • scrambled eggs • sausage • fruit • milk"],
  6: ["Saturday", "Pancakes • waffles • eggs • bacon • fruit • juice"]
};

function updateBreakfast() {
  const today = new Date().getDay();
  const menu = breakfastMenus[today];

  document.getElementById("breakfastDay").textContent = menu[0] + " Breakfast";
  document.getElementById("breakfastMenu").textContent = menu[1];
}

function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({
    behavior: "smooth"
  });
}

function searchRooms() {
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;

  if (!checkin || !checkout) {
    showToast("Please choose your check-in and check-out dates.");
    return;
  }

  if (new Date(checkout) <= new Date(checkin)) {
    showToast("Check-out must be after check-in.");
    return;
  }

  document.getElementById("rooms").scrollIntoView({
    behavior: "smooth"
  });

  showToast("Rooms available for your fictional stay!");
}

function selectRoom(name, price) {
  selectedRoomName = name;
  selectedRoomPrice = price;

  document.getElementById("selectedRoom").innerHTML =
    `<strong>${name}</strong><br>$${price} per fictional night`;

  document.getElementById("bookingModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

function claimDeal(deal) {
  showToast(`${deal} added to your fictional stay!`);

  setTimeout(() => {
    scrollToBooking();
  }, 700);
}

function confirmBooking() {
  const name = document.getElementById("guestName").value.trim();

  if (!name) {
    showToast("Please enter a guest name.");
    return;
  }

  const bookingNumber =
    "SG-" + Math.floor(100000 + Math.random() * 900000);

  closeModal();

  alert(
    "FICTIONAL BOOKING CONFIRMED\n\n" +
    "Singadoore Suites\n\n" +
    "Guest: " + name + "\n" +
    "Room: " + selectedRoomName + "\n" +
    "Room Rate: $" + selectedRoomPrice + " / night\n" +
    "Booking #: " + bookingNumber +
    "\n\nThis is a roleplay reservation. No real reservation or payment was made."
  );

  showToast("Fictional booking confirmed!");
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.style.display = "block";

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

updateBreakfast();
```

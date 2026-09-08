```javascript
let selectedRoom = "";
let selectedPrice = 0;
let bookings = JSON.parse(localStorage.getItem("singadooreBookings") || "[]");

const breakfastMenus = [
  {
    day: "Sunday",
    food: "Pancakes • scrambled eggs • sausage • fresh fruit"
  },
  {
    day: "Monday",
    food: "Belgian waffles • bacon • eggs • yogurt"
  },
  {
    day: "Tuesday",
    food: "French toast • sausage • hash browns • fruit"
  },
  {
    day: "Wednesday",
    food: "Pancakes • eggs • bacon • cereal • fruit"
  },
  {
    day: "Thursday",
    food: "Waffles • sausage • yogurt • pastries"
  },
  {
    day: "Friday",
    food: "French toast • scrambled eggs • hash browns • fruit"
  },
  {
    day: "Saturday",
    food: "Pancakes • waffles • eggs • bacon • fresh fruit"
  }
];

function showPage(page) {
  document.querySelectorAll(".page").forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById("page-" + page);

  if (target) {
    target.classList.add("active");
  } else {
    document.getElementById("page-home").classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  history.replaceState(null, "", "#" + page);
}

function loadPageFromURL() {
  const hash = window.location.hash.replace("#", "");

  if (hash && document.getElementById("page-" + hash)) {
    showPage(hash);
  } else {
    showPage("home");
  }
}

function closeNotice() {
  document.getElementById("notice").style.display = "none";
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.style.display = "block";

  clearTimeout(window.toastTimeout);

  window.toastTimeout = setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

function quickSearch() {
  const checkin = document.getElementById("homeCheckin").value;
  const checkout = document.getElementById("homeCheckout").value;

  if (!checkin || !checkout) {
    showToast("Choose your check-in and check-out dates first.");
    return;
  }

  if (new Date(checkout) <= new Date(checkin)) {
    showToast("Check-out must be after check-in.");
    return;
  }

  showPage("rooms");
  showToast("Rooms are available for your fictional stay!");
}

function filterRooms(type, button) {
  document.querySelectorAll(".filter").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  document.querySelectorAll(".room-card-item").forEach(room => {
    if (type === "all" || room.dataset.type === type) {
      room.style.display = "block";
    } else {
      room.style.display = "none";
    }
  });
}

function openRoom(name, price, bed, guests) {
  selectedRoom = name;
  selectedPrice = price;

  document.getElementById("modalRoomName").textContent = name;

  document.getElementById("modalRoomDetails").innerHTML =
    "💰 $" + price + " / fictional night<br>" +
    "🛏️ " + bed + "<br>" +
    "👥 " + guests;

  document.getElementById("modalBookButton").onclick = function() {
    closeModal();

    showPage("booking");

    const roomSelect = document.getElementById("bookRoom");

    for (let option of roomSelect.options) {
      if (option.textContent.startsWith(name)) {
        option.selected = true;
        break;
      }
    }
  };

  document.getElementById("roomModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("roomModal").style.display = "none";
}

function openPool(name) {
  const descriptions = {
    "Main Resort Pool":
      "Our largest fictional outdoor pool with lounge chairs, poolside seating and family activities.",

    "Kids Splash Pool":
      "A shallow fictional pool area with splash features and kid-friendly activities.",

    "Indoor Pool":
      "A comfortable indoor fictional pool available when guests want to swim away from the outdoor weather.",

    "Infinity Pool":
      "A premium fictional rooftop pool with an amazing skyline-style view."
  };

  document.getElementById("poolModalName").textContent = name;
  document.getElementById("poolModalText").textContent =
    descriptions[name] || "Fictional hotel pool information.";

  document.getElementById("poolModal").style.display = "flex";
}

function closePoolModal() {
  document.getElementById("poolModal").style.display = "none";
}

function showMenu(menu, button) {
  document.querySelectorAll(".menu-panel").forEach(panel => {
    panel.classList.remove("active");
  });

  document.querySelectorAll(".menu-tab").forEach(tab => {
    tab.classList.remove("active");
  });

  document.getElementById("menu-" + menu).classList.add("active");
  button.classList.add("active");
}

function updateBreakfast() {
  const now = new Date();

  const dayNumber = now.getDay();
  const today = breakfastMenus[dayNumber];

  document.getElementById("todayName").textContent =
    today.day + " Breakfast";

  document.getElementById("todayDate").textContent =
    now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });

  const breakfastStart = new Date(now);
  breakfastStart.setHours(6, 30, 0, 0);

  const breakfastEnd = new Date(now);
  breakfastEnd.setHours(10, 30, 0, 0);

  let target;
  let label;

  if (now < breakfastStart) {
    target = breakfastStart;
    label = "BREAKFAST OPENS IN";
  } else if (now < breakfastEnd) {
    target = breakfastEnd;
    label = "BREAKFAST CLOSES IN";
  } else {
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(6, 30, 0, 0);

    target = tomorrow;
    label = "NEXT BREAKFAST IN";
  }

  const difference = target - now;

  const hours = Math.floor(difference / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  document.getElementById("timerLabel").textContent = label;

  document.getElementById("breakfastTimer").textContent =
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");

  const status = document.getElementById("breakfastStatus");

  if (now >= breakfastStart && now < breakfastEnd) {
    status.textContent = "🟢 Breakfast is OPEN";
  } else {
    status.textContent = "🔴 Breakfast is CLOSED";
  }
}

function updatePoolStatus() {
  const now = new Date();
  const hour = now.getHours();

  const status = document.getElementById("poolStatus");

  if (hour >= 8 && hour < 22) {
    status.textContent = "🟢 OPEN NOW";
  } else {
    status.textContent = "🔴 CLOSED";
  }
}

function claimDeal(deal) {
  localStorage.setItem("singadooreDeal", deal);

  showToast(deal + " added to your fictional stay!");

  setTimeout(() => {
    showPage("booking");
  }, 700);
}

function makeBooking() {
  const checkin = document.getElementById("bookCheckin").value;
  const checkout = document.getElementById("bookCheckout").value;
  const name = document.getElementById("guestName").value.trim();
  const email = document.getElementById("guestEmail").value.trim();

  if (!checkin || !checkout) {
    showToast("Please choose your dates.");
    return;
  }

  if (new Date(checkout) <= new Date(checkin)) {
    showToast("Check-out must be after check-in.");
    return;
  }

  if (!name) {
    showToast("Please enter a guest name.");
    return;
  }

  if (!email) {
    showToast("Please enter an email.");
    return;
  }

  const roomSelect = document.getElementById("bookRoom");
  const roomName = roomSelect.options[roomSelect.selectedIndex].textContent;
  const price = Number(roomSelect.value);

  const bookingNumber =
    "SG-" + Math.floor(100000 + Math.random() * 900000);

  const booking = {
    number: bookingNumber,
    name: name,
    email: email,
    checkin: checkin,
    checkout: checkout,
    room: roomName,
    price: price,
    breakfast: document.getElementById("addBreakfast").checked,
    poolPackage: document.getElementById("poolPackage").checked
  };

  bookings.push(booking);

  localStorage.setItem(
    "singadooreBookings",
    JSON.stringify(bookings)
  );

  document.getElementById("confirmationDetails").innerHTML =
    "<b>Booking #:</b> " + bookingNumber + "<br>" +
    "<b>Guest:</b> " + name + "<br>" +
    "<b>Room:</b> " + roomName + "<br>" +
    "<b>Check-in:</b> " + checkin + "<br>" +
    "<b>Check-out:</b> " + checkout + "<br>" +
    "<b>Breakfast:</b> " +
    (booking.breakfast ? "Included" : "Not included") +
    "<br>" +
    "<b>Pool Package:</b> " +
    (booking.poolPackage ? "Included" : "Not included");

  document.getElementById("successModal").style.display = "flex";

  updateStaffDashboard();
}

function closeSuccess() {
  document.getElementById("successModal").style.display = "none";
}

function lookupBooking() {
  const number =
    document.getElementById("lookupNumber").value.trim().toUpperCase();

  const result = document.getElementById("lookupResult");

  const found = bookings.find(
    booking => booking.number === number
  );

  if (!found) {
    result.innerHTML =
      "<p style='color:#b00020;margin-top:15px;'>No fictional reservation found.</p>";
    return;
  }

  result.innerHTML =
    "<div class='confirmation'>" +
    "<b>Reservation Found</b><br><br>" +
    "Guest: " + found.name + "<br>" +
    "Room: " + found.room + "<br>" +
    "Check-in: " + found.checkin + "<br>" +
    "Check-out: " + found.checkout +
    "</div>";
}

function orderService() {
  const room = document.getElementById("serviceRoom").value;
  const food = document.getElementById("serviceFood").value;

  if (
    room === "Choose your room" ||
    food === "Choose an item"
  ) {
    showToast("Choose a room and menu item first.");
    return;
  }

  showToast(
    "Fictional room service order sent to room " +
    room + "!"
  );
}

function sendServiceRequest() {
  const type = document.getElementById("serviceType").value;
  const room = document.getElementById("serviceRoomNumber").value.trim();

  if (!room) {
    showToast("Enter your fictional room number.");
    return;
  }

  showToast(
    type + " sent for fictional room " + room + "!"
  );
}

function imageMessage(name) {
  showToast(name + " gallery image selected.");
}

function updateStaffDashboard() {
  document.getElementById("staffBookings").textContent =
    bookings.length;

  const breakfastCount =
    bookings.filter(booking => booking.breakfast).length;

  document.getElementById("breakfastGuests").textContent =
    breakfastCount;
}

window.addEventListener("hashchange", loadPageFromURL);

window.addEventListener("click", function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
});

updateBreakfast();
updatePoolStatus();
updateStaffDashboard();

setInterval(updateBreakfast, 1000);
setInterval(updatePoolStatus, 30000);

loadPageFromURL();
```

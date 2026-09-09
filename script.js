// ========================================
// SINGADOORE SUITES
// FICTIONAL ROLEPLAY HOTEL
// ========================================


// ========================================
// FOOTER
// ========================================

const footer = document.querySelector("footer");

if (footer) {

  footer.innerHTML = `

    <div class="footer-grid">

      <div>

        <div class="footer-logo">

          <span class="logo-mark">S</span>

          <strong>Singadoore Suites</strong>

        </div>

        <p>
          A fictional hotel made for roleplay and fun.
        </p>

      </div>


      <div>

        <h3>Explore</h3>

        <a href="rooms.html">Rooms</a>

        <a href="pools.html">Pools</a>

        <a href="breakfast.html">Breakfast</a>

        <a href="deals.html">Deals</a>

      </div>


      <div>

        <h3>Hotel</h3>

        <a href="amenities.html">Amenities</a>

        <a href="gallery.html">Gallery</a>

        <a href="about.html">About</a>

        <a href="contact.html">Contact</a>

      </div>


      <div>

        <h3>Roleplay</h3>

        <p>⭐ Fictional hotel</p>

        <p>🏨 No real reservations</p>

        <p>💳 No real payments</p>

      </div>

    </div>


    <div class="footer-bottom">

      © 2026 Singadoore Suites
      · Fictional Roleplay Website

    </div>

  `;

}


// ========================================
// ROOM DATA
// ========================================

const rooms = {

  standard: {

    name: "Standard King Room",

    price: 129,

    picture: "picture-standard",

    tag: "POPULAR",

    description:
      "A comfortable fictional room with everything you need for a relaxing hotel stay.",

    features: [
      "🛏️ King Bed",
      "📺 Smart TV",
      "📶 Free Wi-Fi",
      "🚿 Private Bathroom",
      "❄️ Air Conditioning",
      "☕ Coffee Station"
    ]

  },


  family: {

    name: "Family Suite",

    price: 189,

    picture: "picture-family",

    tag: "FAMILY FAVORITE",

    description:
      "A larger fictional suite made for families and groups.",

    features: [
      "🛏️ 2 Beds",
      "🛋️ Living Area",
      "📺 2 Smart TVs",
      "📶 Free Wi-Fi",
      "🧊 Mini Fridge",
      "🎮 Game Area"
    ]

  },


  singadoore: {

    name: "Singadoore Suite",

    price: 249,

    picture: "picture-suite",

    tag: "FEATURED",

    description:
      "Our signature suite with extra space and premium fictional hotel features.",

    features: [
      "🛏️ King Bed",
      "🛋️ Large Living Room",
      "🌆 City View",
      "🛁 Large Bathroom",
      "📺 Smart TV",
      "☕ Premium Coffee"
    ]

  },


  presidential: {

    name: "Presidential Suite",

    price: 399,

    picture: "picture-presidential",

    tag: "LUXURY",

    description:
      "The biggest fictional suite at Singadoore Suites.",

    features: [
      "🛏️ Luxury Bed",
      "🛋️ Huge Living Room",
      "🌆 Best View",
      "🛁 Luxury Bathroom",
      "🍿 Movie Room",
      "🎮 Game Room"
    ]

  },


  poolside: {

    name: "Poolside Room",

    price: 169,

    picture: "picture-poolside",

    tag: "POOL ACCESS",

    description:
      "A fictional room located close to the resort pool.",

    features: [
      "🏊 Pool Access",
      "🛏️ King Bed",
      "📺 Smart TV",
      "📶 Free Wi-Fi",
      "🧊 Mini Fridge",
      "☕ Coffee Station"
    ]

  },


  kids: {

    name: "Kids Adventure Suite",

    price: 199,

    picture: "picture-kids",

    tag: "KIDS PICK",

    description:
      "A fun fictional family suite with games and activities.",

    features: [
      "🎮 Game Area",
      "📺 Smart TV",
      "🛏️ 2 Beds",
      "🎨 Activity Table",
      "📶 Free Wi-Fi",
      "🍿 Snack Station"
    ]

  }

};


// ========================================
// ROOM DETAILS PAGE
// ========================================

const roomDetails =
  document.getElementById("roomDetails");


if (roomDetails) {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const roomID =
    params.get("room") || "singadoore";


  const room =
    rooms[roomID];


  if (room) {

    roomDetails.innerHTML = `

      <section class="section">

        <div class="room-detail">

          <div
            class="big-picture ${room.picture}">
          </div>


          <div>

            <span class="tag">
              ${room.tag}
            </span>


            <h1>
              ${room.name}
            </h1>


            <p>
              ${room.description}
            </p>


            <div class="price">

              $${room.price}

              <small>
                / night
              </small>

            </div>


            <div class="feature-list">

              ${room.features.map(feature => `

                <div class="feature">
                  ${feature}
                </div>

              `).join("")}

            </div>


            <a
              href="booking.html?room=${roomID}"
              class="btn btn-primary">

              Book This Room

            </a>


            <a
              href="rooms.html"
              class="btn btn-dark">

              Back to Rooms

            </a>

          </div>

        </div>

      </section>

    `;

  }

}


// ========================================
// BREAKFAST TIMER
// ========================================

const breakfastTimerElement =
  document.getElementById("breakfastTimer");


if (breakfastTimerElement) {

  function updateBreakfastTimer() {

    const now =
      new Date();


    const start =
      new Date();

    start.setHours(7, 0, 0, 0);


    const end =
      new Date();

    end.setHours(11, 0, 0, 0);


    const status =
      document.getElementById(
        "breakfastStatus"
      );


    if (now < start) {

      const difference =
        start - now;


      breakfastTimerElement.textContent =
        formatTime(difference);


      status.textContent =
        "🥞 Breakfast starts soon!";

    }


    else if (
      now >= start &&
      now < end
    ) {

      const difference =
        end - now;


      breakfastTimerElement.textContent =
        formatTime(difference);


      status.textContent =
        "🍳 BREAKFAST IS OPEN!";

    }


    else {

      breakfastTimerElement.textContent =
        "00:00:00";


      status.textContent =
        "Breakfast has ended for today. Come back tomorrow!";

    }

  }


  function formatTime(milliseconds) {

    const totalSeconds =
      Math.floor(
        milliseconds / 1000
      );


    const hours =
      Math.floor(
        totalSeconds / 3600
      );


    const minutes =
      Math.floor(
        (totalSeconds % 3600) / 60
      );


    const seconds =
      totalSeconds % 60;


    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );

  }


  updateBreakfastTimer();


  setInterval(
    updateBreakfastTimer,
    1000
  );

}


// ========================================
// BOOKING FORM
// ========================================

const bookingForm =
  document.getElementById(
    "bookingForm"
  );


if (bookingForm) {

  const roomSelect =
    document.getElementById(
      "bookingRoom"
    );


  const params =
    new URLSearchParams(
      window.location.search
    );


  const selectedRoom =
    params.get("room");


  if (
    selectedRoom &&
    rooms[selectedRoom]
  ) {

    roomSelect.value =
      selectedRoom;

  }


  bookingForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const name =
        document.getElementById(
          "guestName"
        ).value;


      const selected =
        roomSelect.value;


      const room =
        rooms[selected];


      const confirmationCode =
        "SG-" +
        Math.random()
          .toString(36)
          .substring(2, 8)
          .toUpperCase();


      const confirmation =
        document.getElementById(
          "confirmation"
        );


      confirmation.style.display =
        "block";


      confirmation.innerHTML = `

        <h2>
          ✅ Booking Created!
        </h2>

        <br>

        <p>
          Welcome
          <strong>${name}</strong>!
        </p>

        <p>
          Room:
          <strong>${room.name}</strong>
        </p>

        <p>
          Confirmation:
          <strong>${confirmationCode}</strong>
        </p>

        <br>

        <p>
          🎭 This is only a fictional roleplay booking.
        </p>

        <p>
          No real reservation or payment was made.
        </p>

      `;


      confirmation.scrollIntoView({
        behavior: "smooth"
      });

    }

  );

}

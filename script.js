const photos = {
  exterior: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=88',

  lobby: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1800&q=88',

  standard: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=88',

  family: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1800&q=88',

  suite: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1800&q=88',

  presidential: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88',

  pool: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=88',

  kids: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?auto=format&fit=crop&w=1800&q=88',

  mainpool: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1800&q=88',

  indoor: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1800&q=88',

  breakfast: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1800&q=88',

  games: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=88',

  movie: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=88',

  familydeluxe: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=88'
};


const rooms = [
  {
    name: 'Standard Room',
    price: 119,
    guests: 2,
    photo: photos.standard,
    desc: 'A clean modern room for a simple fictional stay.',
    features: [
      '1 king bed',
      'Smart TV',
      'Wi-Fi',
      'City view'
    ]
  },

  {
    name: 'Family Room',
    price: 159,
    guests: 4,
    photo: photos.family,
    desc: 'A roomy family setup made for a fun roleplay vacation.',
    features: [
      '2 beds',
      'Family seating',
      'Smart TV',
      'Pool access'
    ]
  },

  {
    name: 'Deluxe Suite',
    price: 199,
    guests: 3,
    photo: photos.suite,
    desc: 'A stylish suite with extra space and a comfortable lounge.',
    features: [
      'King bed',
      'Lounge area',
      'Mini fridge',
      'Resort view'
    ]
  },

  {
    name: 'Pool View Suite',
    price: 229,
    guests: 3,
    photo: photos.pool,
    desc: 'A premium fictional suite overlooking the resort pool.',
    features: [
      'King bed',
      'Pool view',
      'Sofa',
      'Breakfast option'
    ]
  },

  {
    name: 'Family Deluxe',
    price: 279,
    guests: 5,
    photo: photos.familydeluxe,
    desc: 'A large family suite with room for the whole crew.',
    features: [
      '2 bedrooms',
      'Living area',
      '2 TVs',
      'Pool access'
    ]
  },

  {
    name: 'Presidential Suite',
    price: 399,
    guests: 6,
    photo: photos.presidential,
    desc: 'The biggest fictional suite at Singadoore Suites.',
    features: [
      'Luxury bedroom',
      'Large living room',
      'Dining area',
      'Premium view'
    ]
  }
];


function nav(active = '') {

  return `
    <header class="nav">

      <div class="nav-inner">

        <a class="logo" href="index.html">
          SINGADOORE
          <span>SUITES</span>
        </a>

        <nav class="nav-links">

          ${[
            ['index.html','Home'],
            ['rooms.html','Rooms'],
            ['pools.html','Pools'],
            ['breakfast.html','Breakfast'],
            ['deals.html','Deals'],
            ['amenities.html','Amenities'],
            ['gallery.html','Gallery']
          ].map(x => `
            <a
              class="${active === x[1] ? 'active' : ''}"
              href="${x[0]}"
            >
              ${x[1]}
            </a>
          `).join('')}

          <a class="btn" href="booking.html">
            Book Now
          </a>

        </nav>

        <span class="mobile-toggle">
          ☰
        </span>

      </div>

    </header>
  `;
}


function footer() {

  return `
    <footer class="footer">

      <div class="footer-inner">

        <div>
          <strong>SINGADOORE SUITES</strong>
          <p>
            Fictional family hotel roleplay experience.
          </p>
        </div>

        <div>
          <strong>Explore</strong>
          <p>
            <a href="rooms.html">Rooms</a> ·
            <a href="pools.html">Pools</a> ·
            <a href="breakfast.html">Breakfast</a> ·
            <a href="gallery.html">Gallery</a>
          </p>
        </div>

        <div>
          <strong>Roleplay only</strong>
          <p>
            No real reservations or payments are processed.
          </p>
        </div>

      </div>

    </footer>
  `;
}


function mount(active) {

  document.body.insertAdjacentHTML(
    'afterbegin',
    nav(active)
  );

  document.body.insertAdjacentHTML(
    'beforeend',
    footer()
  );
}


function roomCard(room) {

  return `
    <article class="card">

      <div
        class="photo"
        style="background-image:url('${room.photo}')"
      ></div>

      <div class="card-body">

        <div class="small">
          UP TO ${room.guests} GUESTS
        </div>

        <h3>
          ${room.name}
        </h3>

        <p>
          ${room.desc}
        </p>

        <div class="features">

          ${room.features.map(feature => `
            <span class="tag">
              ${feature}
            </span>
          `).join('')}

        </div>

        <div
          style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:12px
          "
        >

          <div>
            <span class="price">
              $${room.price}
            </span>

            <span class="small">
              / roleplay night
            </span>
          </div>

          <a
            class="btn"
            href="room.html?room=${encodeURIComponent(room.name)}"
          >
            View room
          </a>

        </div>

      </div>

    </article>
  `;
}


function renderRooms() {

  const element = document.querySelector('#roomCards');

  if (!element) return;

  element.innerHTML =
    rooms.map(roomCard).join('');
}


function renderRoom() {

  const element =
    document.querySelector('#roomDetails');

  if (!element) return;

  const params =
    new URLSearchParams(location.search);

  const roomName =
    params.get('room');

  const room =
    rooms.find(r => r.name === roomName)
    || rooms[0];

  element.innerHTML = `

    <div class="room-detail">

      <div
        class="photo"
        style="
          background-image:url('${room.photo}')
        "
      ></div>

      <div>

        <div class="kicker">
          SINGADOORE SUITES
        </div>

        <h1>
          ${room.name}
        </h1>

        <p>
          ${room.desc}
        </p>

        <div class="price">
          $${room.price}

          <span class="small">
            / roleplay night
          </span>
        </div>

        <ul>

          ${room.features.map(feature => `
            <li>${feature}</li>
          `).join('')}

        </ul>

        <a
          class="btn"
          href="booking.html?room=${encodeURIComponent(room.name)}"
        >
          Choose this room
        </a>

      </div>

    </div>

  `;
}


function setupBooking() {

  const form =
    document.querySelector('#bookingForm');

  if (!form) return;

  const roomSelect =
    document.querySelector('#room');

  const params =
    new URLSearchParams(location.search);

  const selectedRoom =
    params.get('room');

  rooms.forEach(room => {

    roomSelect.insertAdjacentHTML(
      'beforeend',

      `
        <option value="${room.name}">
          ${room.name} — $${room.price}
        </option>
      `
    );

  });

  if (selectedRoom) {
    roomSelect.value = selectedRoom;
  }


  form.addEventListener(
    'submit',
    event => {

      event.preventDefault();

      const data =
        new FormData(form);

      const confirmation =
        'SGS-' +
        Math.floor(
          100000 +
          Math.random() * 900000
        );

      document.querySelector(
        '#confirmation'
      ).innerHTML = `

        <div class="success">

          <strong>
            Roleplay booking created!
          </strong>

          <br>

          Guest:
          ${data.get('guest')}

          <br>

          Room:
          ${data.get('room')}

          <br>

          Guests:
          ${data.get('guests')}

          <br>

          Confirmation:
          <strong>
            ${confirmation}
          </strong>

          <br>

          <span class="small">
            This is a fictional confirmation
            for the website roleplay.
          </span>

        </div>

      `;

      form.reset();

    }
  );
}


function breakfastTimer() {

  const element =
    document.querySelector(
      '#breakfastTimer'
    );

  if (!element) return;


  function tick() {

    const now = new Date();

    const end = new Date();

    end.setHours(11, 0, 0, 0);


    if (now >= end) {

      element.textContent =
        'Breakfast is closed for today';

      return;

    }


    let seconds =
      Math.floor(
        (end - now) / 1000
      );


    const hours =
      Math.floor(seconds / 3600);

    seconds %= 3600;


    const minutes =
      Math.floor(seconds / 60);

    seconds %= 60;


    element.textContent =
      `${hours}h ${String(minutes).padStart(2,'0')}m ${String(seconds).padStart(2,'0')}s left`;

  }


  tick();

  setInterval(
    tick,
    1000
  );

}


document.addEventListener(
  'DOMContentLoaded',
  () => {

    const page =
      document.body.dataset.page || '';

    mount(page);

    renderRooms();

    renderRoom();

    setupBooking();

    breakfastTimer();

  }
);

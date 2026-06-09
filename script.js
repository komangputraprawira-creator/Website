const calendar = document.getElementById("calendar");

const months = [5, 6, 7, 8, 9, 10, 11];

// Perubahan: Nama-nama bulan sudah diubah ke bahasa Inggris
const names = [
  "June", "July", "August", "September", "October", "November", "December"
];

const logo = "https://i.ibb.co.com/W4hQtyzB/Whats-App-Image-2026-06-08-at-15-32-02.jpg";
const hatchImage = "https://i.ibb.co.com/9HX38FW0/1.png";
const laBrisaImage = "https://i.ibb.co.com/4RsXf87Z/2.png";

months.forEach((month, index) => {

  let html = `
  <h2 class="month-title">${names[index]} 2026</h2>
  <div class="calendar">
  `;

  const totalDays = new Date(2026, month + 1, 0).getDate();

  for (let d = 1; d <= totalDays; d++) {

    const date = new Date(2026, month, d);

    // SATURDAY
    if (date.getDay() === 6) {
      html += `
      <div class="card">
        <div class="image" style="background-image:url('${hatchImage}')">
          <div class="badge">SATURDAY EVENT</div>
          <img src="${logo}" class="logo">
        </div>

        <div class="content">
          <div class="date">Saturday, ${d} ${names[index]} 2026</div>
          <div class="title">HATCH ULUWATU BALI</div>
          <div class="location">Jl. Labuansait No.54, Pecatu, Bali</div>

          <div class="buttons">
            <a class="btn wa" href="https://wa.me/6282236606485" target="_blank">WhatsApp</a>
            <a class="btn map" href="https://maps.google.com/?q=Hatch+Uluwatu+Bali" target="_blank">Maps</a>
          </div>
        </div>
      </div>
      `;
    }

    // SUNDAY
    if (date.getDay() === 0) {
      html += `
      <div class="card">
        <div class="image" style="background-image:url('${laBrisaImage}')">
          <div class="badge">SUNDAY EVENT</div>
          <img src="${logo}" class="logo">
        </div>

        <div class="content">
          <div class="date">Sunday, ${d} ${names[index]} 2026</div>
          <div class="title">LA BRISA BALI</div>
          <div class="location">Jl. Pantai Batu Mejan, Canggu, Bali</div>

          <div class="buttons">
            <a class="btn wa" href="https://wa.me/6282236606485" target="_blank">WhatsApp</a>
            <a class="btn map" href="https://maps.google.com/?q=La+Brisa+Bali" target="_blank">Maps</a>
          </div>
        </div>
      </div>
      `;
    }

  }

  html += "</div>";
  calendar.innerHTML += html;

});
// 1. nst mhs = {
//   nama: 'Muhammad Dwi Susanto',
//   umur: 21,
//   nrp: '202210044',
//   email: 'dwisusanto784@gmail.com',
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. looping
// const mhs = [
//   {
//     nama: 'Muhammad Dwi Susanto',
//     email: 'dwisusanto784@gmail.com',
//   },
//   {
//     nama: 'Intan Permatasari',
//     email: 'intanpermatasari784@gmail.com',
//   },
//   {
//     nama: 'saha Ieu',
//     email: 'sahaieu784@gmail.com',
//   },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(
//       (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`
//     ).join('')}
// </div>`;

// 3. conditiionals
// ternary
// const lagu = {
//   judul: 'Tetap dalam jiwa',
//   penyanyi: 'Isyana saraswati',
//   // feat: 'Rayi putra'
// }

// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//   </ul>
// </div>`

// 4. nested
// HTML fragment bersarang
const mhs = {
  nama: 'Muhammad Dwi Susanto',
  semester: 5,
  mataKuliah: ['Rekayasa Web', 'apsi', 'pemrograman sistem interaktif'],
  umur: 21,
  nrp: '202210044',
  email: 'dwisusanto784@gmail.com',
};

function cetakMataKuliah(mataKuliah) {
  return `
  <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
  </ol>
  `;
}
const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester"> semester : ${mhs.semester}</span>
  <h4>Mata Kuliah:</h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;

// tagged Templates
const nama = 'Dwi';
const umur = 21;

function coba(strings, ...values) {
  return nama;
}

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun`;

console.log(str);
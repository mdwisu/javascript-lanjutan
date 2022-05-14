// function init() {
//     let nama = 'dwi';
//     return function(nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('dwi');
// panggilNama('asu');

// 2

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Hallo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// console.dir(selamatPagi);

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  }
})();
console.log(add());
console.log(add());
console.log(add());

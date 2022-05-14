// objek literal
// let mahasiswa = {
//     nama: 'dwi',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }

// function declaration

// const methodMahasiswa = {
//     makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, selamat makan!`);
//     },
//     main: function main(jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain`);
//     },
//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// }
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let sandika = Mahasiswa('sandika', 10);
// let dwi = Mahasiswa('dwi', 10);

// function Mahasiswa(nama, energi) {
// this.nama = nama;
// this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat main`;
//  }
// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur`;
//  }

// let dwi = new Mahasiswa('dwi', 10)

// versi kelas dari contoh di atas
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//   }
//   main(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat main`;
//   }
//   tidur(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur`;
//   }
// }
// let dwi = new Mahasiswa('dwi', 10);

// // constructor function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//       this.energi += porsi;
//       console.log(`Hallo ${this.nama}, selamat makan!`);
//     };
//     this.main = function main(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }
//   }

// let dwi = new Mahasiswa('dwi', 10)

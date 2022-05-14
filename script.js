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
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, selamat makan!`);
//   };
//   mahasiswa.main = function main(jam) {
//       this.energi -= jam;
//       console.log(`Halo ${this.nama}, selamat bermain`);
//   }
//   return mahasiswa;
// }

// let sandika = Mahasiswa('sandika', 10);
// let dwi = Mahasiswa('dwi', 10);

// constructor function
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  
    this.makan = function (porsi) {
      this.energi += porsi;
      console.log(`Hallo ${this.nama}, selamat makan!`);
    };
    this.main = function main(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    }
  }
  
let dwi = new Mahasiswa('dwi', 10)
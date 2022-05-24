// destructuring

// function kalkulasi(a,b) {
//   return [a + b, a-b, a * b, a/b];
// } 

// const jumlah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2,3);

// console.log(kali);



// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3);
// console.log(bagi);


// function kalkulasi(a,b) {
//   return {
//     tambah: a+b,
//     kurang: a-b,
//     kali: a*b,
//     bagi: a/b
//   }
// }

// const { bagi, tambah,kali,kurang} = kalkulasi(2,3);
// console.log(kurang);


// destructuring function argument
const mhs1 = {
  nama: 'dwi',
  umur: 21,
  email:'dwi@yaho.com',
  nilai: {
    tugas: 80,
    uts: 95,
    uas:100
  }
}

// function cetakMhs(mhs) {
//   return `halo, nama sata ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }
// console.log(cetakMhs(mhs1));


function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
  return `halo, nama sata ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));
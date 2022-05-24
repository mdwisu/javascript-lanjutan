// for ... of

// const mhs = ['dwi','intan'];

// for (let i = 0; i < mhs.length; i++) {
//   const asu = mhs[i];
//   console.log(asu);

// }

// mhs.forEach(m => {
//   console.log(m);
// });

// for (const m of mhs) {
//   console.log(m);
// }

// for (const i in mhs) {
//   if (Object.hasOwnProperty.call(mhs, i)) {
//     const a = mhs[i];
//     console.log(a);
//   }
// }

// string
// const nama ='dwi';

// for(const n of nama) {
//   console.log(n);
// }

// const mhs = ['dwi', 'intan'];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i}`);
// }


// NodeList
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.textContent));
// for (const n of liNama) {
//   console.log(n.innerHTML);
// }


// argument
// function jumlahkanAnggka() {
//   return arguments.reduce((a,i) => a+i);
//   let jumlah = 0;
//   for (const a of arguments) {
//     jumlah += a;
//   }
//     return jumlah;
// }

// console.log(jumlahkanAnggka(1,2,3,4,5));



// for .. in
// const mhs = {
//   nama: 'dwi',
//   umur: 21,
//   email: 'dwi.yaho.com'
// }
// for (const m in mhs) {
//   console.log(mhs[m]);
// }
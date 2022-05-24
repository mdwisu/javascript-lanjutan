// destructuring variable / assignment

// destructuring array

// const perkenalan = ['halo', 'nama', 'saya', 'dwi'];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log( );

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// [a, b] = [b, a];
// console.log(a);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a,b] = coba();
// console.log(a);

// rest parameter
// const [a, ...values] = [1,2,3];
// console.log(a);
// console.log(values);

// descruturing object
// const mhs = {
//   nama: 'dwi',
//   umur: 20
// }

// const {nama, umur} = mhs;
// console.log(nama);

// assigenment tanpa object

// ({ nama, umur } = {
//   nama: 'dwi',
//   umur: 20,
// });
// console.log(nama);


// assignmnet ke variable baru
// const mhs = {
//   nama: 'dwi',
//   umur: 20
// }

// const {nama: n, umur: u} = mhs;
// console.log(n);


// memberikan default value
// const mhs = {
//   nama: 'dwi',
//   umur: 20,
//   email: 'dwi'
// }

// const {nama, umur, email = 'default'} = mhs;
// console.log(email);


// memberi nilai default dan assign ke variable baru
// const mhs = {
//   nama: 'dwi',
//   umur: 20,
//   email: 'dwi'
// }

// const {nama: n, umur: u, email: e = 'default'} = mhs;
// console.log(e);



// rest parameter
// const mhs = {
//   nama: 'dwi',
//   umur: 20,
//   email: 'dwi'
// }

// const {nama: n, ...values} = mhs;
// console.log(values->umur);


// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: 'dwi',
  umur: 20,
  email: 'dwi@gmail.com'
}
function getIdMhs({id}) {
  return id;
}

console.log(getIdMhs(mhs));

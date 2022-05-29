// fetch('http://www.omdbapi.com/?apikey=dca61bcc&i=tt0848228')
//     .then(response => response.json())
//     .then(response => console.log(response));

// promise
// sebuah objek yang merepresentasikan keberhasilan / kegagalah sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// di pakai ketika mau request ke sebuah api

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati')
//     } else {
//         reject('Ingkar janji');
//     }
// });

// janji1
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('NOT OK : ' + response));


// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberpa waktu')
//         }, 2000);
//     }else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberpa waktu')
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('selesai menunggu')) // biasanya buat animasi loading
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('NOT OK : ' + response));
// console.log('selesai');

// Promise.all()

const film = new Promise ( resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Dwi',
            pemeran: 'Sandhika'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bogor',
            temp: 26,
            kondisi: 'cerah berawan'
        }])
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(r => console.log(r));
    .then(r => {
        const [film, cuaca] = r;
        console.log(film);
        console.log(cuaca);
        console.log(cuaca[0].kota);
    });
// callback
// function yang dikirimkan sebagai parameter untuk function lain

// syncronous callback
// function halo(nama) {
//     alert(`halo, ${nama}`);
// }
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama : ');
//     callback(nama);
// }
// tampilkanPesan(nama => alert(`halo, ${nama}`));


// const mhs = [
//     {
//         "nama": "dwi susanto",
//         "nrp": "202210044",
//         "email": "dwisusanto@gmail.com",
//         "jurusan": "Sistem Informasi",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "dwi susanto",
//         "nrp": "202210044",
//         "email": "dwisusanto@gmail.com",
//         "jurusan": "Sistem Informasi",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "dwi susanto",
//         "nrp": "202210044",
//         "email": "dwisusanto@gmail.com",
//         "jurusan": "Sistem Informasi",
//         "idDosenWali": 1
//     }
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 100000000; i++) {
//         let date = new Date();
        
//     }
//     console.log(m.nama)
// });
// console.log('selesai');


// asynchronous callback

// function GetDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }


// GetDataMahasiswa('mahasiswa.json', result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => {
//         console.log(m.nama);
//     });

// }, () => {});


// jquery
console.log('mulai');
$.ajax({
    
    url: "mahasiswa.json",

    success: function (response) {
        response.forEach(r => {
            console.log(r.nama);
        });
 
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');
// spread operator
// memecah iterables menjadi single element

// const mhs = ['dwi', 'intan'];
// console.log(...mhs[0]);

// menggabungkan 2 array
// const mhs = ['dwi', 'intan'];
// const dosen = ['dwi2', 'intan2'];
// const orang = [...mhs, 'aji', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);



// mengcopy array

// const mhs = ['dwi', 'intan'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'susanto';
// console.log(mhs);


// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     const mhs1 = liMhs[i].textContent;
//     mhs.push(mhs1);
    
// }
// console.log(mhs);
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(liMhs);

const namas = document.querySelector('.namas');
const huruf = [...namas.textContent].map(h => `<span>${h}</span>`).join('');
namas.innerHTML = huruf;


// Rest Parameter

// function myFunc() {
    // return `a = ${a}, b = ${b}, myArgs = ${args}`;
    // return args;
    // return Array.from(arguments);
    // return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5));


// function jumlahkan(...angka) {
//     let total = 0;
//     for (const i of angka) {
//         total += i;
//     } return total;
    // return angka.reduce((a,b) => a+b);
// }

// console.log(jumlahkan(1,2,3,4,5));


// array distructuring
// const kelompok1 = ['dwi', 'intan', 'adu', 'babi'];
// const [ketua, wakit, ...anggota] = kelompok1;
// console.log(anggota);


// object destructuring
// const team = {
//     pm: 'dwi',
//     fe: 'intan',
//     be: 'sari',
//     ux: 'permata',
//     ui: 'muhammad',
//     do: 'susanto'
// }

// const { pm, ...myTeam} = team;
// console.log(myTeam);


// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('string', 1,2,'dwi', false, 10, true, 'sandhika'));
const arrDev1 = [
   { id: 1, data: ['Luis Alberto'] },
   { id: 2, data: ['Leydi Lima']   },
   { id: 3, data: ['USER 3']       },
   { id: 4, data: ['USER 4']       },
   { id: 5, data: ['USER 5']       },
   { id: 6, data: ['USER 6']       },
];


const dataFilter = arrDev1.filter(element => element.id % 2 === 0);

console.log('data', dataFilter);
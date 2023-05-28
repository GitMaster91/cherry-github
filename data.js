const arrDev1 = [
   { id: 1, data: ['Luis Alberto'] },
   { id: 2, data: ['Leydi Lima']   },
   { id: 3, data: ['USER 3']       },
   { id: 4, data: ['USER 4']       },
];


const dataFilter = arrDev1.filter((element) => {
   return element.id % 2 === 0;
});

console.log('data', dataFilter);
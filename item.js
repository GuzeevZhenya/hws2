const newArray = [1, 6, 24, 76, 234, 612, 65, 3, 1];

// const arrFunction = (item) => {
//   let maxValue = item[0];
//   for (let i = 0; i <= newArray.length; i++) {
//     if (maxValue > newArray[i]) {
//       maxValue = newArray[i];
//     }
//   }
//   return maxValue;
// };

//
const arrFunction = (item) => {
  const max = Math.max(...item);
  return max;
};
console.log(arrFunction(newArray));

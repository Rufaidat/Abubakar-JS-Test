// TEST 1
const nums1 = [1, 3];
const nums2 = [2];
const median = (arr1, arr2) => {
  const arr = [...arr1, ...arr2];
  arr.sort((a, b) => {
    return a - b;
  });
  if (arr.length % 2 === 1) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  }
};
console.log(median(nums1, nums2));

// TEST 2
function romanNumerals(num) {
  let romanNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNumerals = "";
  for (let key in romanNum) {
    while (num >= romanNum[key]) {
      romanNumerals += key;
      num -= romanNum[key];
    }
  }
  return romanNumerals;
}
console.log(romanNumerals(53));

// TEST 3
function mergeAndSort(arr1, arr2) {
  const arr = [...arr1, ...arr2];
  return arr.sort((a, b) => {
    return a - b;
  });
}
console.log(mergeAndSort([1, 2, 4], [1, 3, 4]));

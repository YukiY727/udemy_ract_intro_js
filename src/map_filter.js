// mapやfilterを使った配列の処理
const nameArr = ["鈴木", "山田", "吉田"];
// 従来 for
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です。`)
// }

// map
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2)

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// filtter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) =>{
//   return num % 2 === 1
// })
// console.log(newNumArr)

const newNameArr = nameArr.map((name) => {
  if (name === "山田") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

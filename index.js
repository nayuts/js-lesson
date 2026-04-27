// //文字列型の変数
// const str = "Hello World!!!!!";
// console.log(str);

// //数字型の変数
// const num = 1234;
// console.log(num);

// //真偽値の変数
// const bool = false;
// console.log(false);


// const hoge = "ほげ";
// const fuge = "ふが";
// console.log(hoge + fuge);

// const a = 10;
// const b = 14;
// console.log

// //文字列型の変数
// //const sei = "";
// //const mei = "ばあ";
// //const moji= `${foo} : ${bar}`;
// //console.log(moji);

// //  数字型配列の定義
// const arreyNum = [1,2,3];
// console.log(arreyNum[0]);
// console.log(arreyNum[1]);
// console.log(arreyNum[2]);

// arreyNum.push(4);
// console.log(arreyNum[3]);

// //  文字列型配列の定義
// const arreyStr = ["りんご","ごりら","らっぱ"]
// console.log(arreyStr[0]);
// console.log(arreyStr[1]);
// console.log(arreyStr[2]);
// console.log(arreyStr);
// console.log(arreyStr.length);

// arreyStr.push("ぱせり");
// console.log(arreyNum[3]);

// //オブジェクト型（連想配列）
// const obj = {
//     name: "田中太郎",
//     age: 25,
//     email:"ushd@gmail.com",
// };
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.email);
// console.log(obj);

// //条件分岐
// const num = 2;

// if (num == 2) {
//     console.log("numは2です。");
// } else {
//     console.log("numは2ではない数値です。")
// }

// // if, else if
// const num = 1;
// if (num == 1) {
//     console.log("numは1です。");
// } else if (num == 2) {
//     console.log("numは2です。")
// } else {
//     console.log("numは2ではない数字です。")
// }

// const num = 5;


// // 複数条件
// const str1 = "ほげほげ";
// const str2 = "ふがふがx";

// if (str1 == "ほげほげ") {
//     console.log("str1はほげほげです。");
// }
// if (str2 == "ふがふが") {
//     console.log("str2はふがふがです。");
// }

// // && 演算子 AND
// if (str1 == "ほげほげ" && str2 == "ふがふが") {
//     console.log("str1はほげほげ かつ str2は ふがふがです。");
// }

// // && 演算子 OR
// if (str1 == "ほげほげ" || str2 == "ふがふが") {
//     console.log("str1はほげほげ もしくは、 str2は ふがふがです。");
// }


// const city = "岡山"

// switch (city) {
//     case "東京都":
//         console.log("tokyo");
//         break;
//     case "大阪":
//         console.log("ßoosaka");
//         break;
//     case "神奈川":
//         console.log("kanagawa");
//         break;
//     default:
//         console.log("知らない県です。");
//         break;
// }


//繰り返し処理
// for (let i = 0; i < 9; i++) {
//     const foo = i * 2;
//     console.log(foo);
// }

const numRange = [1,2,3,4,5];

// for (let i = 0; i < numRange.length; i++) {
//     const value = numRange[i];
//     console.log(value);
// }

// for (const num of numRange) {
//     console.log(num);
// }

// const newNumrange = [];
// for (const num of numRange) {
//     newNumrange.push(num * 2);
// }
// console.log(newNumrange);

const foo = numRange.map((num) => {
    return num * 2;
});

console.log(foo);

//関数
// function samoleFunc() {
//     const str = "sample";
//     console.log(str);
// }

// for (let index = 0; index <  5 ; i++) {
//     samoleFunc();
// }

//引数あり
function samoleFunc2(num, num2, num3) {
    const result = num + num2 + num3;
    console.log(result);
}

//引数あり & 返り値あり
function samoleFunc3(num1,num2) {
    const result = num1 * num2;
    return result;
}
const res = samoleFunc3(2, 4)
console.log(res);


// const str = "sample";
// console.log(str);
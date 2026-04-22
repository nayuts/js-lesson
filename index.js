//文字列型の変数
const str = "Hello World!!!!!";
console.log(str);

//数字型の変数
const num = 1234;
console.log(num);

//真偽値の変数
const bool = false;
console.log(false);


const hoge = "ほげ";
const fuge = "ふが";
console.log(hoge + fuge);

const a = 10;
const b = 14;
console.log

//文字列型の変数
//const sei = "";
//const mei = "ばあ";
//const moji= `${foo} : ${bar}`;
//console.log(moji);

//  数字型配列の定義
const arreyNum = [1,2,3];
console.log(arreyNum[0]);
console.log(arreyNum[1]);
console.log(arreyNum[2]);

arreyNum.push(4);
console.log(arreyNum[3]);

//  文字列型配列の定義
const arreyStr = ["りんご","ごりら","らっぱ"]
console.log(arreyStr[0]);
console.log(arreyStr[1]);
console.log(arreyStr[2]);
console.log(arreyStr);
console.log(arreyStr.length);

arreyStr.push("ぱせり");
console.log(arreyNum[3]);

//オブジェクト型（連想配列）
const obj = {
    name: "田中太郎",
    age: 25,
    email:"ushd@gmail.com",
};
console.log(obj.name);
console.log(obj.age);
console.log(obj.email);
console.log(obj);

// //条件分岐
// const num = 2;

// if (num == 2) {
//     console.log("numは2です。");
// } else {
//     console.log("numは2ではない数値です。")
// }

// // if, else if
// if (num == 1) {
//     console.log("numは1です。");
// } else if (num == 2) {
//     console.log("numは2ではない数値です。")
// }

// 複数条件
const str1 = "ほげほげ";
const str2 = "ふがふがx";

if (str1 == "ほげほげ") {
    console.log("str1はほげほげです。");
}
if (str2 == "ふがふが") {
    console.log("str2はふがふがです。");
}

// && 演算子 AND
if (str1 == "ほげほげ" && str2 == "ふがふが") {
    console.log("str1はほげほげ かつ str2は ふがふがです。");
}

// && 演算子 OR
if (str1 == "ほげほげ" || str2 == "ふがふが") {
    console.log("str1はほげほげ もしくは、 str2は ふがふがです。");
}


const city = "岡山"

switch (city) {
    case "東京都":
        console.log("tokyo");
        break;
    case "大阪":
        console.log("oosaka");
        break;
    case "神奈川":
        console.log("kanagawa");
        break;
    default:
        console.log("知らない県です。");
        break;
}
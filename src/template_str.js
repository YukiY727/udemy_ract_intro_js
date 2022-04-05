const name = "yuki";
const age = 28;
// 「私の名前はyukiです。年齢は28歳です。

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレートを用いら方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

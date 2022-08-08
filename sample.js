var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)
//再宣言、varのみ可



var nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)
//再代入、var,letで可



var str = "webcamp"
//グローバルスコープ,どこからでも参照できる変数

function foo(){
  console.log(str)
  var y = "hello"
  //関数スコープ,関数の中で(varのみ)宣言された変数
  //この中だけ
}

//foo()
//console.log(y)
//関数の外からyを参照しようとしても有効範囲外となりエラー
//Uncaught ReferenceError: y is not defined



function foo() {
  let x = "webcamp"
  {
    let y = "hello webcamp"
  }
  console.log(x)
  console.log(y)
}

//foo()
//ブロック外から参照したためエラー
//Uncaught ReferenceError: y is not defined




for (let i = 0; i < 10; i++) {     
  console.log(i) 
}

//console.log(i)
//ブロック外から参照したためエラー
//Uncaught ReferenceError: i is not defined



var str = "webcamp"

function foo() { 
  console.log(str)//関数スコープのstrが参照されundefined
  var str = "dmm webcamp"
  console.log(str)
}

foo()



for (let i = 0; i < 10; i++) {
  console.log(i);//繰り返しで再代入するためletを使う
}
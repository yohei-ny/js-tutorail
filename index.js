let test = "hello word";

// test ="hello World23"

// 定数
const name1 ="hello"


let inoki=["1","2","3","4"]

console.log(test);

console.log(name1);
// console.log(inoki[1]);

let index=0
// while(index < 5){

//   // 繰り返し処理
//    index++;
//    console.log(index)

// }

// for (let index = 0; index < inoki.length; index++) {
//   const practice = inoki[index];
//   console.log(practice)
  
// }






// const fun = (num) => {
//   if(inoki.length >num){
//     console.log("盆梅や＝")

//   }else{
//     console.log("unntimann")
//   }
// }

function add() {
  
}


// オブジェクトって何
const test2 = {
  color: "pink",
  size: "large",
  purfume: "mint",
  goTotest: () =>{
    console.log("saikyou");
  }
};

console.log(test2.goTotest())

// 関数には()が必須

// defaultオブジェクト
// console.log(window)
// 全体のアプローチ
// console.log(document)
// 要素へのアプローチ

console.log(document.getElementsByTagName("button")[0].addEventListener("click" ,()=>{
  window.alert("trernrner")
  // addEventListener引数に際に行えるオブジェクト, 次が関数になる
}))


const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// 方法1
// function test(aliceTiming,aliceTumbling,callback){
//   setTimeout(() => {
//     alice1.animate(aliceTumbling, aliceTiming);
//     callback(aliceTiming,aliceTumbling,test3);
//   }, 1000);
// }

// function test2(aliceTiming,aliceTumbling,callback){
//   setTimeout(() => {
//     alice2.animate(aliceTumbling, aliceTiming);
//     callback(aliceTiming,aliceTumbling);
//   }, 1000);
  
// }

// function test3(aliceTiming,aliceTumbling){
//   setTimeout(() => {
//     alice3.animate(aliceTumbling, aliceTiming);
//   }, 1000);
  
// }

// test(aliceTiming,aliceTumbling,test2);



//方法2
// alice1.animate(aliceTumbling, aliceTiming).finished.then(() => 
//   {
//     alice2.animate(aliceTumbling, aliceTiming).finished.then(() =>
//       { 
//         alice3.animate(aliceTumbling, aliceTiming)
//       }
//     )
//   }
// )


// // 方法3
// async function test(){
//   try{
//     await alice1.animate(aliceTumbling, aliceTiming).finished
//     await alice2.animate(aliceTumbling, aliceTiming).finished
//     await alice3.animate(aliceTumbling, aliceTiming).finished
//   }
//   catch(e){
//     console.log(e)
//   }
// }

// test()

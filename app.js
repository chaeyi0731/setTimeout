// setTimeout(function () {
//   console.log("첫번째 소사"),
//     setTimeout(function () {
//       console.log("두번째 뭉기");

//       setTimeout(function () {
//         console.log("세번째 밍구");
//       }, 1000);
//     }, 2000);
// }, 3000);
//*setTimeout은 스크립트를 무시한다.
function sosa() {
  setTimeout(function () {
    console.log("소사");
    sosa();
  }, 1000);
}
sosa();
//* 인터벌을 직접 만든 것

setInterval(function () {}, 1000);
setInterval(function () {
  console.log("소사 이따 향마루 ㄱ");
}, 1000);

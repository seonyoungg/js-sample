// const lines = document.querySelectorAll('.conversation-box .line');
// const girlTalk = document.querySelector('.conversation-wrap'); // 캐릭터 대화
// const selectBox = document.querySelector('.user-select'); // 사용자 선택지

// let index = 0;

// // 처음엔 모든 대사 숨기기
// lines.forEach((line) => (line.style.display = 'none'));

// // 첫 줄만 보여주기
// if (lines.length > 0) {
//   lines[0].style.display = 'block';
// }

// // 클릭 시 한 줄씩 교체하기
// document.addEventListener('click', () => {
//   if (index < lines.length - 1) {
//     // 현재 줄 숨기고 다음 줄 보여줌
//     lines[index].style.display = 'none';
//     index++;
//     lines[index].style.display = 'block';
//   } else {
//     // 마지막 줄 보여준 후 → 대사 숨기고 선택지 보여줌
//     lines[index].style.display = 'none';
//     girlTalk.style.display = 'none';
//     selectBox.style.display = 'block';
//   }
// });

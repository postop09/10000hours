function calc() {
  const input = document.querySelector('#content_input');
  const goal = input.querySelector('.input_goal');
  const time = input.querySelector('.input_time');
  const result = document.querySelector('#content_result');
  const resultGoal = result.querySelector('.output_goal');
  const resultTime = result.querySelector('.output_time');

  // 예외 처리
  // 값이 입력되지 않았을 경우
  // 24시간을 초과한 경우
  if(goal.value == '') {
    alert('목표를 입력해주세요!');
    return false;
  } else if(time.value == '') {
    alert('시간을 입력해주세요!');
    return false;
  } else if(time.value > 24) {
    alert('올바른 시간을 입력해주세요.');
    return false;
  }
  resultGoal.innerHTML = goal.value;
  calcTime = parseInt(10000/time.value); // 시간을 날짜로 계산 & 소수점 자리
  resultTime.innerHTML = calcTime; // 계산한 값을 넣어줘야 한다.

  result.style.display = 'block';
}

const startBtn = document.querySelector('.btn_calc');
startBtn.addEventListener('click', calc);
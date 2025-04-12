// 예시용 학생 계정 데이터
const accountData = [
  { id: '202301', name: '김민수', email: '202301@schoolmail.com', password: 'pw1234' },
  { id: '202302', name: '이지은', email: '202302@schoolmail.com', password: 'pw5678' },
  { id: '202303', name: '박서준', email: '202303@schoolmail.com', password: 'pw9999' },
  { id: '202304', name: '이지수', email: '202304@schoolmail.com', password: 'pw5678' },
  // 여기에 더 추가 가능
];

// DOM 요소 가져오기
const form = document.getElementById('searchForm');
const resultBox = document.getElementById('result');

// 폼 제출 이벤트 처리
form.addEventListener('submit', function (e) {
  e.preventDefault(); // 새로고침 방지

  const inputId = document.getElementById('studentId').value.trim();
  const inputName = document.getElementById('studentName').value.trim();

  // 입력값 검증
  if (!inputId || !inputName) {
    resultBox.innerText = '학번과 이름을 모두 입력해주세요.';
    return;
  }

  // 계정 검색
  const user = accountData.find(
    (account) => account.id === inputId && account.name === inputName
  );

  if (user) {
    resultBox.innerText = `✅ 구글 계정 정보\n\n📧 ID: ${user.email}\n🔒 PW: ${user.password}`;
  } else {
    resultBox.innerText = '일치하는 계정 정보가 없습니다.';
  }
});

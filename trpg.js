const start = document.querySelector("#jsStartGame"), // 배경 박스
  jsSetting = document.querySelector("#jsSetting"), //  플레이어 인원수 적는 박스
  playingNum = document.querySelector("#playingNum"), // 플레이어 인원수 form
  playingNumValue = document.querySelector("#playingNum input"),  // 플레이어 인원수 적는 박스
  jsPlaySetting = document.querySelector("#jsPlaySetting"), // 플레이어 셋팅 박스
  entpContainer = document.querySelectorAll(".entpContainer"),  // 종족 박스
  entpMainTitle = document.querySelectorAll(".entpMainTitle"),  // 종족 타이틀
  explanationBtn = document.querySelector("#explanation"),  // 설명 버튼
  ExplanationContainer = document.querySelector("#Explanation"),  // 설명 박스
  characterNextSet = document.querySelectorAll(".characterNextSet"),
  jsChartSet = document.querySelector("#jsChartSet"); // 캐릭터 상세 시트 박스

let GAME_SETTING = "GAME_SETTING",  // 셋팅에 대한 키 값
  gameSet = [], // 셋팅에 대한 키 값을 넣을 입력 값
  playing = "", // 플레이 하는 인원수를 넣을 값
  classCheck = false, // ?...
  setRollDiceValue = [],  // 다이스 값 넣어놓는 변수
  dicePlusValue = 0,  // 다이스 +값을 위한 변수
  setLocalKeyValue = [], // 로컬 스토리지에 넣을 변수 값
  checkRightChartBox = 0, // 캐릭터 시트 토글 버튼을 위한 값
  totalDiceValue = 0; // 토탈 주사위 굴리는 값

function handlePlayingNum(event) {  // 인원수 셋팅
  event.preventDefault(); // submit의 이벤트를 막음

  playing = playingNumValue.value;  // 플레이 하는 인원의 수를 변수에 입력

  settingGame(playing); // 셋팅 게임에 보냄
}

function settingGame(playNum) { // 게임 셋팅
  jsSetting.style.display = "none"; // 인원수 셋팅 창 숨김
  jsPlaySetting.style.display = "block";  // 캐릭터를 생성하는 메인창을 보이게 함

  setTimeout(() => {
    jsPlaySetting.className = "opacity" // 자연스럽게 보이게 하기 위한 css
  },300 );
  

  for(adcht = 1; adcht <= playNum ; adcht++)  { // 인원수만큼 차트 생성
    addChart(adcht);  //차트 생성에 차트마다 이름을 주기위해 횟수값을 넘김
  }

  addChartSet();  // 생성 후 차트 설정
}

function addChartSet()  { // 생성 후 차트 설정
  let playNumChack = gameSet.length+1;  // 현재 입력된 셋탱값. default는 한개도 없기에 0 +1인 1

  let lookJsCrtSet = document.querySelector(`.jsCrtSet${playNumChack}`);  //  default는 모든 차트에서 맨 처음 차트

  lookJsCrtSet.style.display = "block"; // 맨 처음 차트를 보이도록 설정

  setTimeout(() => {
    lookJsCrtSet.className += " opacity"; // 보인 후 인터렉션을 위한 클래스 입력
  }, 100);
}

function startGame() {  // 게임 시작
  start.style.display = "block";  // 배경화면 자연스럽게 올라오게 하기
  jsSetting.style.display = "block";  // 위와 같음

  setTimeout(() => {  // 보이게한 창을 자연스럽게 하기위한 값
    start.className = "opacity";  // 바탕이 올라온 후
    setTimeout(() => {
      jsSetting.className = "opacity";  // 0.5초후 셋팅창도 올라와라
    }, 500);
  }, 500);
}

function handleEntpMainTitle(event) {   // 종족 설명을 위한 토글
  const selectEntp = event.target,
  selectEntppre = selectEntp.parentNode;
  selectEntppre.classList.toggle("displayOn");
}

function handleEntpContainer(event) {  // 종족 설명을 위한 토글
  const seletEntp = event.target;
  seletEntp.classList.toggle("displayOn");
}

function handleExplanationBtn() { // 종족 설명을 위한 토글
  ExplanationContainer.classList.toggle("displayOn");
}

function init() { // 게임시작 전체 컨트롤

  const loadGameSet = localStorage.getItem("chartKey"); // 저장된 값을 가져옴 없다면 null

    let leadLoadGameSet = JSON.parse(loadGameSet);  // 저장된 값을 읽을 수 있도록 가공

    if(leadLoadGameSet !== null)    { // 만약 저장된 값이 있다면
      loadGame(leadLoadGameSet);
    } else  {
      startGame();
    }
}

playingNum.addEventListener("submit", handlePlayingNum);  // 인원수 확인 변수

for (const checkClickEntpContainer of entpContainer) {  // 종족설명 토글 버튼
  checkClickEntpContainer.addEventListener("click", handleEntpContainer);
}

for (const checkClickEntpMainTitle of entpMainTitle) {  // 종족설명 토글 버튼
  checkClickEntpMainTitle.addEventListener("click", handleEntpMainTitle);
}

explanationBtn.addEventListener("click", handleExplanationBtn); // 설명을 눌러 종족 설명 토글

init();

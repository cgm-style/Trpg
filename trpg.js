const start = document.querySelector("#jsStartGame"),
  jsSetting = document.querySelector("#jsSetting"),
  playingNum = document.querySelector("#playingNum"),
  playingNumValue = document.querySelector("#playingNum input"),
  jsPlaySetting = document.querySelector("#jsPlaySetting"),
  entpContainer = document.querySelectorAll(".entpContainer"),
  entpMainTitle = document.querySelectorAll(".entpMainTitle"),
  explanationBtn = document.querySelector("#explanation"),
  ExplanationContainer = document.querySelector("#Explanation"),
  characterNextSet = document.querySelectorAll(".characterNextSet");

let GAME_SETTING = "GAME_SETTING",  // 셋팅에 대한 키 값
  gameSet = [], // 셋팅에 대한 키 값을 넣을 입력 값
  playing = "", // 플레이 하는 인원수를 넣을 값
  classCheck = false, // ?...
  setRollDiceValue = [],  // 다이스 값 넣어놓는 변수
  dicePlusValue = 0;  // 다이스 +값을 위한 변수

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

  addChartSet();
}

function addChartSet()  {
  let playNumChack = gameSet.length+1;

  let lookJsCrtSet = document.querySelector(`.jsCrtSet${playNumChack}`);

  lookJsCrtSet.style.display = "block";

  let clickCharacterNextSet1 = document.querySelectorAll(".characterNextSet1");

  for (const clickCheckNext of clickCharacterNextSet1) {  // 첫번째 다음 버튼 클릭 이벤트
    clickCheckNext.addEventListener("click", FirstNextButton);
  }
}

function FirstNextButton(event)  {  // 첫번째 다음 버튼 클릭
  event.preventDefault(); // 이벤트 막음

  const firstNextBtn = event.target,
        nowNoneDiv = firstNextBtn.parentNode.parentNode;
        nextblockDiv = firstNextBtn.parentNode.parentNode.parentNode.lastChild;

  nowNoneDiv.style.display = "none";
  nextblockDiv.style.display = "block";
}
console.dir(start);

function startGame() {  // 게임 시작
  start.style.display = "block";  // 첫 시작화면 인원수 창을 보이기 위한창
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
  startGame();
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

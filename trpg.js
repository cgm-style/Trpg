const start = document.querySelector("#jsStartGame"),
  jsSetting = document.querySelector("#jsSetting"),
  playingNum = document.querySelector("#playingNum"),
  playingNumValue = document.querySelector("#playingNum input"),
  jsPlaySetting = document.querySelector("#jsPlaySetting"),
  entpContainer = document.querySelectorAll(".entpContainer"),
  entpMainTitle = document.querySelectorAll(".entpMainTitle"),
  explanationBtn = document.querySelector("#explanation"),
  ExplanationContainer = document.querySelector("#Explanation");

let GAME_SETTING = "GAME_SETTING",
  gameSet = [],
  playing = "",
  classCheck = false;

function handlePlayingNum(event) {
  // 인원수 셋팅
  event.preventDefault(); // submit의 이벤트를 막음

  playing = playingNumValue.value;

  settingGame(playing);
}

function settingGame(playNum) {
  // 게임 셋팅
  jsSetting.style.display = "none"; // 인원수 셋팅 창 숨김
}

function startGame() {
  // 게임 시작
  start.style.display = "block";
  jsSetting.style.display = "block";

  setTimeout(() => {
    start.className = "opacity";
    setTimeout(() => {
      jsSetting.className = "opacity";
    }, 500);
  }, 500);
}

function handleEntpMainTitle(event) {
  const selectEntp = event.target,
  selectEntppre = selectEntp.parentNode;
  selectEntppre.classList.toggle("displayOn");
}

function handleEntpContainer(event) {
  const seletEntp = event.target;
  seletEntp.classList.toggle("displayOn");
}

function handleExplanationBtn() {
  console.log(ExplanationContainer);
  ExplanationContainer.classList.toggle("displayOn");
}

function init() {
  startGame();
}

playingNum.addEventListener("submit", handlePlayingNum);
for (const checkClickEntpContainer of entpContainer) {
  checkClickEntpContainer.addEventListener("click", handleEntpContainer);
}
for (const checkClickEntpMainTitle of entpMainTitle) {
  checkClickEntpMainTitle.addEventListener("click", handleEntpMainTitle);
}
explanationBtn.addEventListener("click", handleExplanationBtn);

init();

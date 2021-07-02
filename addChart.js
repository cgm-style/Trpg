function addChart(num) {
    let chkMoney = 0;

    const jsCharacterSetting = document.createElement("div"), // 생성을 위한 정의 시트 박스

        characterSetBox1 = document.createElement("div"), //  첫번째 - 이름,나이,종족,클래스 선택 박스

        characterSetBox1Form = document.createElement("form"),  //  첫번째 박스 form

        characterSetBox1P1 = document.createElement("p"), // 종족 선택 title
        characterSetBox1Select = document.createElement("select"),  // 종적 선택 셀렉트 박스
        characterSetBox1Option1 = document.createElement("option"),
        characterSetBox1Option2 = document.createElement("option"),
        characterSetBox1Option3 = document.createElement("option"),
        characterSetBox1Option4 = document.createElement("option"),
        characterSetBox1Option5 = document.createElement("option"),
        characterSetBox1Option6 = document.createElement("option"),
        characterSetBox1Option7 = document.createElement("option"),
        characterSetBox1Option8 = document.createElement("option"),
        characterSetBox1Option9 = document.createElement("option"),
        characterSetBox1Option10 = document.createElement("option"),
        characterSetBox1Option11 = document.createElement("option"),
        characterSetBox1Option12 = document.createElement("option"),
        characterSetBox1Option13 = document.createElement("option"),
        characterSetBox1Option14 = document.createElement("option"),

        characterSetBox1P2 = document.createElement("p"), // 이름 title
        characterSetBox1Input1 = document.createElement("input"), // 이름 입력

        characterSetBox1P3 = document.createElement("p"), // 나이 title
        characterSetBox1Input2 = document.createElement("input"), // 나이 입력

        characterSetBox1P4 = document.createElement("p"), // 직업 title
        characterSetBox1JobSelect = document.createElement("select"), // 직업 선택 셀렉트 박스
        characterSetBox1JobOption1 = document.createElement("option"),
        characterSetBox1JobOption2 = document.createElement("option"),
        characterSetBox1JobOption3 = document.createElement("option"),
        characterSetBox1JobOption4 = document.createElement("option"),
        characterSetBox1JobOption5 = document.createElement("option"),
        characterSetBox1JobOption6 = document.createElement("option"),
        characterSetBox1JobOption7 = document.createElement("option"),
        characterSetBox1JobOption8 = document.createElement("option"),
        characterSetBox1JobOption9 = document.createElement("option"),
        characterSetBox1JobOption10 = document.createElement("option"),
        characterSetBox1JobOption11 = document.createElement("option"),
        characterSetBox1JobOption12 = document.createElement("option"),
        characterSetBox1JobOption13 = document.createElement("option"),
        characterSetBox1JobOption14 = document.createElement("option"),
        characterSetBox1JobOption15 = document.createElement("option"),

        characterSetBox1Submit = document.createElement("input"), // submit 버튼

        characterSetBox2 = document.createElement("div"), // 첫번째 박스 완료 후 실행되는 두번째 박스 스텟 관련

        characterSetBox2Form = document.createElement("form"),  // 두번째 박스 form

          characterSetBox2SelectSet = document.createElement("div"),  //  dice or point 방식 선택하는 단
            characterSetBox2SelectSetP = document.createElement("p"), // 방식 선택 title
            characterSetBox2SelectSetBtn1 = document.createElement("button"), //  dice 선택
            characterSetBox2SelectSetBtn2 = document.createElement("button"), //  point 선택
          
          characterSetBox2Dice4D6 = document.createElement("div"),  //  dice 박스

            characterSetBox2Dice4D6P1 = document.createElement("p"),  // 스텟1
            characterSetBox2Dice4D6Input1 = document.createElement("input"),

            characterSetBox2Dice4D6P2 = document.createElement("p"),  // 스텟2
            characterSetBox2Dice4D6Input2 = document.createElement("input"),

            characterSetBox2Dice4D6P3 = document.createElement("p"),  // 스텟3
            characterSetBox2Dice4D6Input3 = document.createElement("input"),

            characterSetBox2Dice4D6P4 = document.createElement("p"),  // 스텟4
            characterSetBox2Dice4D6Input4 = document.createElement("input"),

            characterSetBox2Dice4D6P5 = document.createElement("p"),  // 스텟5
            characterSetBox2Dice4D6Input5 = document.createElement("input"),

            characterSetBox2Dice4D6P6 = document.createElement("p"),  // 스텟6
            characterSetBox2Dice4D6Input6 = document.createElement("input"),

            characterSetBox2Dice4D6DiceBox = document.createElement("div"), //  주사위 결과값 box
              characterSetBox2Dice4D6P1DiceBoxValue = document.createElement("p"),  // 결과 값 text

            characterSetBox2Dice4D6DiceRollBtn = document.createElement("button"),  // 주사위 roll 버튼

            characterSetBox2Dice4D6Submit = document.createElement("input"),  // dice 방식 submiy


          characterSetBox2PointBuy = document.createElement("div"), // 포인트 선택방식 box

            characterSetBox2PointBuyP1 = document.createElement("p"),  // 스텟1
            characterSetBox2PointBuyInput1 = document.createElement("input"),

            characterSetBox2PointBuyP2 = document.createElement("p"),  // 스텟2
            characterSetBox2PointBuyInput2 = document.createElement("input"),

            characterSetBox2PointBuyP3 = document.createElement("p"),  // 스텟3
            characterSetBox2PointBuyInput3 = document.createElement("input"),

            characterSetBox2PointBuyP4 = document.createElement("p"),  // 스텟4
            characterSetBox2PointBuyInput4 = document.createElement("input"),

            characterSetBox2PointBuyP5 = document.createElement("p"),  // 스텟5
            characterSetBox2PointBuyInput5 = document.createElement("input"),

            characterSetBox2PointBuyP6 = document.createElement("p"),  // 스텟6
            characterSetBox2PointBuyInput6 = document.createElement("input"),

            characterSetBox2PointBuyPointBox = document.createElement("div"), // 포인트 설정 box
              characterSetBox2PointBuyPointBoxP = document.createElement("p"),  // 설명 text
                characterSetBox2PointBuyPointBoxPInput = document.createElement("input"), // 포인트 입력 input

            characterSetBox2PointBuySubmit = document.createElement("input"); // point 방식 submit


  /*  생성하는 단  */

  jsPlaySetting.appendChild(jsCharacterSetting);  // 시트 박스 생성

    jsCharacterSetting.appendChild(characterSetBox1); // 1차 입력 box

      characterSetBox1.appendChild(characterSetBox1Form); // 1차 입력 form

        characterSetBox1Form.appendChild(characterSetBox1P1); //  종족 선택 생성
        characterSetBox1Form.appendChild(characterSetBox1Select);
          characterSetBox1Select.appendChild(characterSetBox1Option1);
          characterSetBox1Select.appendChild(characterSetBox1Option2);
          characterSetBox1Select.appendChild(characterSetBox1Option3);
          characterSetBox1Select.appendChild(characterSetBox1Option4);
          characterSetBox1Select.appendChild(characterSetBox1Option5);
          characterSetBox1Select.appendChild(characterSetBox1Option6);
          characterSetBox1Select.appendChild(characterSetBox1Option7);
          characterSetBox1Select.appendChild(characterSetBox1Option8);
          characterSetBox1Select.appendChild(characterSetBox1Option9);
          characterSetBox1Select.appendChild(characterSetBox1Option10);
          characterSetBox1Select.appendChild(characterSetBox1Option11);
          characterSetBox1Select.appendChild(characterSetBox1Option12);
          characterSetBox1Select.appendChild(characterSetBox1Option13);
          characterSetBox1Select.appendChild(characterSetBox1Option14);

        characterSetBox1Form.appendChild(characterSetBox1P2); //  이름 입력 생성
        characterSetBox1Form.appendChild(characterSetBox1Input1);

        characterSetBox1Form.appendChild(characterSetBox1P3); //  나이 입력 생성
        characterSetBox1Form.appendChild(characterSetBox1Input2);

        characterSetBox1Form.appendChild(characterSetBox1P4); // 직업 선택 생성
        characterSetBox1Form.appendChild(characterSetBox1JobSelect);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption1);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption2);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption3);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption4);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption5);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption6);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption7);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption9);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption10);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption11);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption12);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption13);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption14);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption15);

        characterSetBox1Form.appendChild(characterSetBox1Submit); // 첫번째 입력값 submit


    jsCharacterSetting.appendChild(characterSetBox2); // 두번째 스텟 입력 div 생성

      characterSetBox2.appendChild(characterSetBox2Form); // 두번째 입력 form 생성
        characterSetBox2Form.appendChild(characterSetBox2SelectSet);  // 스텟 입력 방식 설정
          characterSetBox2SelectSet.appendChild(characterSetBox2SelectSetP);
          characterSetBox2SelectSet.appendChild(characterSetBox2SelectSetBtn1); //  dice 방식
          characterSetBox2SelectSet.appendChild(characterSetBox2SelectSetBtn2); //  poinr 방식
      
          
    /* 셋팅을 위한 단 */

    let setLocalKeyName = `jsCrtSet${num}`;

    jsCharacterSetting.className = `jsCharacterSetting jsCrtSet${num}`;
      characterSetBox1.className = "characterSetBox characterSetBox1";
        characterSetBox1P1.innerText = "종족";
        characterSetBox1Select.className = "Entp";
        characterSetBox1Select.required = true;
          characterSetBox1Option1.innerText = "휴먼";
          characterSetBox1Option2.innerText = "바위 노움";
          characterSetBox1Option3.innerText = "숲 노움";
          characterSetBox1Option4.innerText = "언덕 드워프";
          characterSetBox1Option5.innerText = "산 드워프";
          characterSetBox1Option6.innerText = "하이 엘프";
          characterSetBox1Option7.innerText = "우드 엘프";
          characterSetBox1Option8.innerText = "다크 엘프";
          characterSetBox1Option9.innerText = "하프 엘프";
          characterSetBox1Option10.innerText = "하프 오크";
          characterSetBox1Option11.innerText = "라이트 풋";
          characterSetBox1Option12.innerText = "스타우트";
          characterSetBox1Option13.innerText = "드래곤본";
          characterSetBox1Option14.innerText = "티플링";
        
        characterSetBox1P2.innerText = "이름";
        characterSetBox1P2.className = "setName";
        characterSetBox1Input1.type = "text";
        characterSetBox1Input1.required = true;

        characterSetBox1P3.innerText = "나이";
        characterSetBox1P3.className = "setAge";
        characterSetBox1Input2.type = "number";
        characterSetBox1Input2.required = true;

        characterSetBox1P4.innerText = "직업";
        characterSetBox1P4.className = "setJob";
        characterSetBox1JobSelect.className = "selectJob";
        characterSetBox1JobSelect.required = true;
          characterSetBox1JobOption1.innerText = "파이터";
          characterSetBox1JobOption2.innerText = "바바리안";
          characterSetBox1JobOption3.innerText = "팔라딘";
          characterSetBox1JobOption4.innerText = "뭉크";
          characterSetBox1JobOption5.innerText = "소서러";
          characterSetBox1JobOption6.innerText = "위자드";
          characterSetBox1JobOption7.innerText = "클레릭";
          characterSetBox1JobOption9.innerText = "드루이드";
          characterSetBox1JobOption10.innerText = "워락";
          characterSetBox1JobOption11.innerText = "로그";
          characterSetBox1JobOption12.innerText = "레인저";
          characterSetBox1JobOption13.innerText = "바드";
          characterSetBox1JobOption14.innerText = "-추가예정-";
          characterSetBox1JobOption15.innerText = "선택해주세요";

          characterSetBox1JobOption15.selected = true;
          

        characterSetBox1JobSelect.addEventListener("change",function(event)  {
          let checkAddBox = event.target;

          let checkJobSet = characterSetBox1JobSelect.value,
              checkJobSetBox = document.createElement("form"),
              checkJobSetBoxdiv1 = document.createElement("div"),
                checkJobSetBoxdiv1input1 = document.createElement("input"),
                checkJobSetBoxdiv1p1 = document.createElement("p"),
                checkJobSetBoxdiv1input2 = document.createElement("input"),
                checkJobSetBoxdiv1p2 = document.createElement("p"),
              checkJobSetBoxdiv2 = document.createElement("div"),
                checkJobSetBoxdiv2input1 = document.createElement("input"),
                checkJobSetBoxdiv2p1 = document.createElement("p"),
                checkJobSetBoxdiv2input2 = document.createElement("input"),
                checkJobSetBoxdiv2p2 = document.createElement("p"),
              checkJobSetBoxdiv3 = document.createElement("div"),
                checkJobSetBoxdiv3input1 = document.createElement("input"),
                checkJobSetBoxdiv3p1 = document.createElement("p"),
                checkJobSetBoxdiv3input2 = document.createElement("input"),
                checkJobSetBoxdiv3p2 = document.createElement("p"),
              checkJobSetBoxdiv4 = document.createElement("div"),
                checkJobSetBoxdiv4input1 = document.createElement("input"),
                checkJobSetBoxdiv4p1 = document.createElement("p"),
                checkJobSetBoxdiv4input2 = document.createElement("input"),
                checkJobSetBoxdiv4p2 = document.createElement("p"),
              checkJobSetBoxMoneyRolling = document.createElement("div"),
              checkJobSetBoxMoneyRollingValue = document.createElement("p"),
              checkJobSetBoxsubmit = document.createElement("input");


          checkAddBox.parentNode.appendChild(checkJobSetBox);
            checkJobSetBox.appendChild(checkJobSetBoxdiv1);
              checkJobSetBoxdiv1.appendChild(checkJobSetBoxdiv1input1);
              checkJobSetBoxdiv1.appendChild(checkJobSetBoxdiv1p1);
              checkJobSetBoxdiv1.appendChild(checkJobSetBoxdiv1input2);
              checkJobSetBoxdiv1.appendChild(checkJobSetBoxdiv1p2);
            checkJobSetBox.appendChild(checkJobSetBoxdiv2);
              checkJobSetBoxdiv2.appendChild(checkJobSetBoxdiv2input1);
              checkJobSetBoxdiv2.appendChild(checkJobSetBoxdiv2p1);
              checkJobSetBoxdiv2.appendChild(checkJobSetBoxdiv2input2);
              checkJobSetBoxdiv2.appendChild(checkJobSetBoxdiv2p2);
            checkJobSetBox.appendChild(checkJobSetBoxdiv3);
              checkJobSetBoxdiv3.appendChild(checkJobSetBoxdiv3input1);
              checkJobSetBoxdiv3.appendChild(checkJobSetBoxdiv3p1);
              checkJobSetBoxdiv3.appendChild(checkJobSetBoxdiv3input2);
              checkJobSetBoxdiv3.appendChild(checkJobSetBoxdiv3p2);
            checkJobSetBox.appendChild(checkJobSetBoxdiv4);
              checkJobSetBoxdiv4.appendChild(checkJobSetBoxdiv4input1);
              checkJobSetBoxdiv4.appendChild(checkJobSetBoxdiv4p1);
              checkJobSetBoxdiv4.appendChild(checkJobSetBoxdiv4input2);
              checkJobSetBoxdiv4.appendChild(checkJobSetBoxdiv4p2);
            checkJobSetBox.appendChild(checkJobSetBoxMoneyRolling);
            checkJobSetBox.appendChild(checkJobSetBoxMoneyRollingValue);
            checkJobSetBox.appendChild(checkJobSetBoxsubmit);

            checkJobSetBoxMoneyRolling.className = "firstMoneyDice";
            checkJobSetBoxMoneyRolling.value = "초기 자금 주사위";
            checkJobSetBoxMoneyRolling.innerText = "초기 자금 주사위!";
            checkJobSetBoxMoneyRollingValue.className = "checkSaveMoney";

            if(checkJobSet === "파이터")  {
              checkJobSetBoxdiv1input1.name = "jobItemArmor";
              checkJobSetBoxdiv1input1.value = "체인 메일,";
              checkJobSetBoxdiv1p1.innerText = "체인 메일,";
              checkJobSetBoxdiv1input2.name = "jobItemArmor";
              checkJobSetBoxdiv1input2.value = "레더아머,롱보우,화살 20개,";
              checkJobSetBoxdiv1p2.innerText = "레더아머,롱보우,화살 20개,";
              
  
              checkJobSetBoxdiv2input1.name = "jobItemWeapon";
              checkJobSetBoxdiv2input1.value = "군용 무기,방패,";
              checkJobSetBoxdiv2p1.innerText = "군용 무기,방패,";
              checkJobSetBoxdiv2input2.name = "jobItemWeapon";
              checkJobSetBoxdiv2input2.value = "군용 무기 2개,";
              checkJobSetBoxdiv2p2.innerText = "군용 무기 2개,";
              
              checkJobSetBoxdiv3input1.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input1.value = "라이트 크로스보우,볼트 20개,";
              checkJobSetBoxdiv3p1.innerText = "라이트 크로스보우,볼트 20개,";
              checkJobSetBoxdiv3input2.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input2.value = "핸드액스 2개,";
              checkJobSetBoxdiv3p2.innerText = "핸드액스 2개,";
  
              checkJobSetBoxdiv4input1.name = "jobItemTool";
              checkJobSetBoxdiv4input1.value = "던전 탐색자 꾸러미,";
              checkJobSetBoxdiv4p1.innerText = "던전 탐색자 꾸러미,";
              checkJobSetBoxdiv4input2.name = "jobItemTool";
              checkJobSetBoxdiv4input2.value = "탐험가 꾸러미,";
              checkJobSetBoxdiv4p2.innerText = "탐험가 꾸러미,";

              checkJobSetBoxMoneyRolling.addEventListener("click",function()  {
                checkJobSetBoxMoneyRollingValue.innerText = `${totalDiceTool(5,4)+10}`;
                chkMoney = checkJobSetBoxMoneyRollingValue.innerText;
              })

            }else if (checkJobSet === "팔라딘") {
              checkJobSetBoxdiv1input1.name = "jobItemArmor";
              checkJobSetBoxdiv1input1.value = "체인메일,성표,";
              checkJobSetBoxdiv1p1.innerText = "체인메일,성표,";
              checkJobSetBoxdiv1input2.name = "jobItemArmor";
              checkJobSetBoxdiv1input2.disabled = true;
              checkJobSetBoxdiv1p2.innerText = "";

              checkJobSetBoxdiv2input1.name = "jobItemWeapon";
              checkJobSetBoxdiv2input1.value = "군용 무기,방패,";
              checkJobSetBoxdiv2p1.innerText = "군용 무기,방패,";
              checkJobSetBoxdiv2input2.name = "jobItemWeapon";
              checkJobSetBoxdiv2input2.value = "군용 무기 2개,";
              checkJobSetBoxdiv2p2.innerText = "군용 무기 2개,";
  
              checkJobSetBoxdiv3input1.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input1.value = "자벨린 5개,";
              checkJobSetBoxdiv3p1.innerText = "자벨린 5개,";
              checkJobSetBoxdiv3input2.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input2.value = "단순 근접 무기,";
              checkJobSetBoxdiv3p2.innerText = "단순 근접 무기,";
  
              checkJobSetBoxdiv4input1.name = "jobItemTool";
              checkJobSetBoxdiv4input1.value = "사제 꾸러미,";
              checkJobSetBoxdiv4p1.innerText = "사제 꾸러미,";
              checkJobSetBoxdiv4input2.name = "jobItemTool";
              checkJobSetBoxdiv4input2.value = "탐험가 꾸러미,";
              checkJobSetBoxdiv4p2.innerText = "탐험가 꾸러미,";

              checkJobSetBoxMoneyRolling.addEventListener("click",function(event)  {
                checkJobSetBoxMoneyRollingValue.innerText = `${totalDiceTool(5,4)+10}`
                chkMoney = checkJobSetBoxMoneyRollingValue.innerText;
              })

            }else if(checkJobSet === "바바리안")  {
              checkJobSetBoxdiv1input1.name = "jobItemWeapon";
              checkJobSetBoxdiv1input1.value = "그레이트 액스,";
              checkJobSetBoxdiv1p1.innerText = "그레이트 액스,";
              checkJobSetBoxdiv1input2.name = "jobItemWeapon";
              checkJobSetBoxdiv1input2.value = "군용 근접 무기,";
              checkJobSetBoxdiv1p2.innerText = "군용 근접 무기,";

              checkJobSetBoxdiv2input1.name = "jobItemSubWeapon";
              checkJobSetBoxdiv2input1.value = "핸드 액스 2개,";
              checkJobSetBoxdiv2p1.innerText = "핸드 액스 2개,";
              checkJobSetBoxdiv2input2.name = "jobItemSubWeapon";
              checkJobSetBoxdiv2input2.value = "단순 무기,";
              checkJobSetBoxdiv2p2.innerText = "단순 무기,";
  
              checkJobSetBoxdiv3input1.name = "jobItemTool";
              checkJobSetBoxdiv3input1.value = "탐험가 꾸러미,자벨린 4개,";
              checkJobSetBoxdiv3p1.innerText = "탐험가 꾸러미,자벨린 4개,";
              checkJobSetBoxdiv3input2.name = "jobItemTool";
              checkJobSetBoxdiv3input2.disabled = true;
              checkJobSetBoxdiv3p2.innerText = "";
  
              checkJobSetBoxdiv4input1.name = "jobItemArmor";
              checkJobSetBoxdiv4input1.value = "";
              checkJobSetBoxdiv4input1.checked = true;
              checkJobSetBoxdiv4input1.disabled = true;
              checkJobSetBoxdiv4input2.name = "jobItemArmor";
              checkJobSetBoxdiv4input2.disabled = true;

              checkJobSetBoxMoneyRolling.addEventListener("click",function(event)  {
                checkJobSetBoxMoneyRollingValue.innerText = `${totalDiceTool(2,4)+10}`
                chkMoney = checkJobSetBoxMoneyRollingValue.innerText;
              })

            }else if(checkJobSet === "클레릭")  {
              let checkJobSetBoxdiv1input3 = document.createElement("input"),
                  checkJobSetBoxdiv1p3 = document.createElement("p");

                  checkJobSetBoxdiv1.appendChild(checkJobSetBoxdiv1input3);
                  checkJobSetBoxdiv1.appendChild(checkJobSetBoxdiv1p3);

              checkJobSetBoxdiv1input1.name = "jobItemArmor";
              checkJobSetBoxdiv1input1.value = "스케일 메일,";
              checkJobSetBoxdiv1p1.innerText = "스케일 메일,";
              checkJobSetBoxdiv1input2.name = "jobItemArmor";
              checkJobSetBoxdiv1input2.value = "레더 아머,";
              checkJobSetBoxdiv1p2.innerText = "레더 아머,";
              checkJobSetBoxdiv1input3.type = "radio";
              checkJobSetBoxdiv1input3.name = "jobItemArmor";
              checkJobSetBoxdiv1input3.value = "(숙련시) 체인 메일,";
              checkJobSetBoxdiv1p3.innerText = "(숙련시) 체인 메일,";

  
              checkJobSetBoxdiv2input1.name = "jobItemWeapon";
              checkJobSetBoxdiv2input1.value = "메이스,";
              checkJobSetBoxdiv2p1.innerText = "메이스,";
              checkJobSetBoxdiv2input2.name = "jobItemWeapon";
              checkJobSetBoxdiv2input2.value = "(숙련시) 워해머,";
              checkJobSetBoxdiv2p2.innerText = "(숙련시) 워해머,";
              
              checkJobSetBoxdiv3input1.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input1.value = "라이트 크로스보우,볼트 20개,";
              checkJobSetBoxdiv3p1.innerText = "라이트 크로스보우,볼트 20개,";
              checkJobSetBoxdiv3input2.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input2.value = "단순무기 1개,";
              checkJobSetBoxdiv3p2.innerText = "단순무기 1개,";
  
              checkJobSetBoxdiv4input1.name = "jobItemTool";
              checkJobSetBoxdiv4input1.value = "사제 꾸러미,방패,성표,";
              checkJobSetBoxdiv4p1.innerText = "사제 꾸러미,방패,성표,";
              checkJobSetBoxdiv4input2.name = "jobItemTool";
              checkJobSetBoxdiv4input2.value = "탐험가 꾸러미,방패,성표,";
              checkJobSetBoxdiv4p2.innerText = "탐험가 꾸러미,방패,성표,";

              checkJobSetBoxMoneyRolling.addEventListener("click",function(event)  {
                checkJobSetBoxMoneyRollingValue.innerText = `${totalDiceTool(5,4)+10}`
                chkMoney = checkJobSetBoxMoneyRollingValue.innerText;
              })

            }else if(checkJobSet === "뭉크")  {
              checkJobSetBoxdiv1input1.name = "jobItemArmor";
              checkJobSetBoxdiv1input1.value = "";
              checkJobSetBoxdiv1input1.checked = true;
              checkJobSetBoxdiv1input1.disabled = true;
              checkJobSetBoxdiv1input2.name = "jobItemArmor";
              checkJobSetBoxdiv1input2.disabled = true;
  
              checkJobSetBoxdiv2input1.name = "jobItemWeapon";
              checkJobSetBoxdiv2input1.value = "숏소드,";
              checkJobSetBoxdiv2p1.innerText = "숏소드,";
              checkJobSetBoxdiv2input2.name = "jobItemWeapon";
              checkJobSetBoxdiv2input2.value = "단순무기,";
              checkJobSetBoxdiv2p2.innerText = "단순무기,";
              
              checkJobSetBoxdiv3input1.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input1.value = "";
              checkJobSetBoxdiv3input1.checked = true;
              checkJobSetBoxdiv3input1.disabled = true;
              checkJobSetBoxdiv3input2.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input2.disabled = true;
  
              checkJobSetBoxdiv4input1.name = "jobItemTool";
              checkJobSetBoxdiv4input1.value = "던전탐색자 꾸러미,다트 10개,";
              checkJobSetBoxdiv4p1.innerText = "던전탐색자 꾸러미,다트 10개,";
              checkJobSetBoxdiv4input2.name = "jobItemTool";
              checkJobSetBoxdiv4input2.value = "탐험가 꾸러미,다트 10개,";
              checkJobSetBoxdiv4p2.innerText = "탐험가 꾸러미,다트 10개,";

              checkJobSetBoxMoneyRolling.addEventListener("click",function(event)  {
                checkJobSetBoxMoneyRollingValue.innerText = `${totalDiceTool(5,4)}`
                chkMoney = checkJobSetBoxMoneyRollingValue.innerText;
              })

            }else if(checkJobSet === "로그")  {
              let checkJobSetBoxdiv4input3 = document.createElement("input"),
                  checkJobSetBoxdiv4p3 = document.createElement("p");

                  checkJobSetBoxdiv4.appendChild(checkJobSetBoxdiv4input3);
                  checkJobSetBoxdiv4.appendChild(checkJobSetBoxdiv4p3);

              checkJobSetBoxdiv1input1.name = "jobItemArmor";
              checkJobSetBoxdiv1input1.value = "레더 아머,";
              checkJobSetBoxdiv1p1.innerText = "레더 아머,";
              checkJobSetBoxdiv1input2.name = "jobItemArmor";
              checkJobSetBoxdiv1input2.disabled = true;
  
              checkJobSetBoxdiv2input1.name = "jobItemWeapon";
              checkJobSetBoxdiv2input1.value = "레이피어,";
              checkJobSetBoxdiv2p1.innerText = "레이피어,";
              checkJobSetBoxdiv2input2.name = "jobItemWeapon";
              checkJobSetBoxdiv2input2.value = "숏소드,";
              checkJobSetBoxdiv2p2.innerText = "숏소드,";
              
              checkJobSetBoxdiv3input1.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input1.value = "숏보우,화살20개,";
              checkJobSetBoxdiv3p1.innerText = "숏보우,화살20개,";
              checkJobSetBoxdiv3input2.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input2.value = "숏소드,";
              checkJobSetBoxdiv3p2.innerText = "숏소드,";
  
              checkJobSetBoxdiv4input1.name = "jobItemTool";
              checkJobSetBoxdiv4input1.value = "도둑 꾸러미,대거 2개,도둑 도구,";
              checkJobSetBoxdiv4p1.innerText = "도둑 꾸러미,대거 2개,도둑 도구,";
              checkJobSetBoxdiv4input2.name = "jobItemTool";
              checkJobSetBoxdiv4input2.value = "던전 탐색자 꾸러미,대거 2개,도둑 도구,";
              checkJobSetBoxdiv4p2.innerText = "던전 탐색자 꾸러미,대거 2개,도둑 도구,";
              checkJobSetBoxdiv4input3.type = "radio";
              checkJobSetBoxdiv4input3.name = "jobItemTool";
              checkJobSetBoxdiv4input3.value = "탐험가 꾸러미,대거 2개,도둑 도구,";
              checkJobSetBoxdiv4p3.innerText = "탐험가 꾸러미,대거 2개,도둑 도구,";

              checkJobSetBoxMoneyRolling.addEventListener("click",function(event)  {
                checkJobSetBoxMoneyRollingValue.innerText = `${totalDiceTool(4,4)+10}`
                chkMoney = checkJobSetBoxMoneyRollingValue.innerText;
              })

            }else if(checkJobSet === "바드")  {
              let checkJobSetBoxdiv2input3 = document.createElement("input"),
                  checkJobSetBoxdiv2p3 = document.createElement("p");

                  checkJobSetBoxdiv2.appendChild(checkJobSetBoxdiv2input3);
                  checkJobSetBoxdiv2.appendChild(checkJobSetBoxdiv2p3);


              checkJobSetBoxdiv1input1.name = "jobItemArmor";
              checkJobSetBoxdiv1input1.value = "레더 아머,";
              checkJobSetBoxdiv1p1.innerText = "레더 아머,";
              checkJobSetBoxdiv1input2.name = "jobItemArmor";
              checkJobSetBoxdiv1input2.disabled = true;
  
              checkJobSetBoxdiv2input1.name = "jobItemWeapon";
              checkJobSetBoxdiv2input1.value = "레이피어,";
              checkJobSetBoxdiv2p1.innerText = "레이피어,";
              checkJobSetBoxdiv2input2.name = "jobItemWeapon";
              checkJobSetBoxdiv2input2.value = "롱소드,";
              checkJobSetBoxdiv2p2.innerText = "롱소드,";
              checkJobSetBoxdiv2input3.type = "radio";
              checkJobSetBoxdiv2input3.name = "jobItemWeapon";
              checkJobSetBoxdiv2input3.value = "단순 무기 중 하나,";
              checkJobSetBoxdiv2p3.innerText = "단순 무기 중 하나,";
              
              checkJobSetBoxdiv3input1.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input1.value = "류트,";
              checkJobSetBoxdiv3p1.innerText = "류트,";
              checkJobSetBoxdiv3input2.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input2.value = "악기 중 하나,";
              checkJobSetBoxdiv3p2.innerText = "악기 중 하나,";
  
              checkJobSetBoxdiv4input1.name = "jobItemTool";
              checkJobSetBoxdiv4input1.value = "외교관 꾸러미,대거,";
              checkJobSetBoxdiv4p1.innerText = "외교관 꾸러미,대거,";
              checkJobSetBoxdiv4input2.name = "jobItemTool";
              checkJobSetBoxdiv4input2.value = "예능인 꾸러미,대거,";
              checkJobSetBoxdiv4p2.innerText = "예능인 꾸러미,대거,";

              checkJobSetBoxMoneyRolling.addEventListener("click",function(event)  {
                checkJobSetBoxMoneyRollingValue.innerText = `${totalDiceTool(5,4)+10}`
                chkMoney = checkJobSetBoxMoneyRollingValue.innerText;
              })

            }else if(checkJobSet === "레인저")  {
              checkJobSetBoxdiv1input1.name = "jobItemArmor";
              checkJobSetBoxdiv1input1.value = "스케일 메일,";
              checkJobSetBoxdiv1p1.innerText = "스케일 메일,";
              checkJobSetBoxdiv1input2.name = "jobItemArmor";
              checkJobSetBoxdiv1input2.value = "레더 아머,";
              checkJobSetBoxdiv1p2.innerText = "레더 아머,";
  
              checkJobSetBoxdiv2input1.name = "jobItemWeapon";
              checkJobSetBoxdiv2input1.value = "숏 소드 2개,";
              checkJobSetBoxdiv2p1.innerText = "숏 소드 2개,";
              checkJobSetBoxdiv2input2.name = "jobItemWeapon";
              checkJobSetBoxdiv2input2.value = "단순 근접 무기 2개,";
              checkJobSetBoxdiv2p2.innerText = "단순 근접 무기 2개,";
              
              checkJobSetBoxdiv3input1.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input1.value = "롱 보우,화살 20개,";
              checkJobSetBoxdiv3p1.innerText = "롱 보우,화살 20개,";
              checkJobSetBoxdiv3input2.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input2.disabled = true;
  
              checkJobSetBoxdiv4input1.name = "jobItemTool";
              checkJobSetBoxdiv4input1.value = "던전 탐색자 꾸러미,";
              checkJobSetBoxdiv4p1.innerText = "던전 탐색자 꾸러미,";
              checkJobSetBoxdiv4input2.name = "jobItemTool";
              checkJobSetBoxdiv4input2.value = "탐험가 꾸러미,";
              checkJobSetBoxdiv4p2.innerText = "탐험가 꾸러미,";

              checkJobSetBoxMoneyRolling.addEventListener("click",function(event)  {
                checkJobSetBoxMoneyRollingValue.innerText = `${totalDiceTool(5,4)+10}`
                chkMoney = checkJobSetBoxMoneyRollingValue.innerText;
              })

            }else if(checkJobSet === "위자드")  {
              checkJobSetBoxdiv1input1.name = "jobItemArmor";
              checkJobSetBoxdiv1input1.value = "";
              checkJobSetBoxdiv1input1.checked = true;
              checkJobSetBoxdiv1input1.disabled = true;
              checkJobSetBoxdiv1input2.name = "jobItemArmor";
              checkJobSetBoxdiv1input2.disabled = true;
  
              checkJobSetBoxdiv2input1.name = "jobItemWeapon";
              checkJobSetBoxdiv2input1.value = "쿼터 스태프,";
              checkJobSetBoxdiv2p1.innerText = "쿼터 스태프,";
              checkJobSetBoxdiv2input2.name = "jobItemWeapon";
              checkJobSetBoxdiv2input2.value = "대거,";
              checkJobSetBoxdiv2p2.innerText = "대거,";
              
              checkJobSetBoxdiv3input1.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input1.value = "구성 요소 주머니,";
              checkJobSetBoxdiv3p1.innerText = "구성 요소 주머니,";
              checkJobSetBoxdiv3input2.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input2.value = "비전 매개체,";
              checkJobSetBoxdiv3p2.innerText = "비전 매개체,";
  
              checkJobSetBoxdiv4input1.name = "jobItemTool";
              checkJobSetBoxdiv4input1.value = "학자 꾸러미,주문책,";
              checkJobSetBoxdiv4p1.innerText = "학자 꾸러미,주문책,";
              checkJobSetBoxdiv4input2.name = "jobItemTool";
              checkJobSetBoxdiv4input2.value = "탐험가 꾸러미,주문책,";
              checkJobSetBoxdiv4p2.innerText = "탐험가 꾸러미,주문책,";

              checkJobSetBoxMoneyRolling.addEventListener("click",function(event)  {
                checkJobSetBoxMoneyRollingValue.innerText = `${totalDiceTool(4,4)+10}`
                chkMoney = checkJobSetBoxMoneyRollingValue.innerText;
              })

            }else if(checkJobSet === "소서러")  {
              checkJobSetBoxdiv1input1.name = "jobItemArmor";
              checkJobSetBoxdiv1input1.value = "";
              checkJobSetBoxdiv1input1.checked = true;
              checkJobSetBoxdiv1input1.disabled = true;
              checkJobSetBoxdiv1input2.name = "jobItemArmor";
              checkJobSetBoxdiv1input2.disabled = true;
  
              checkJobSetBoxdiv2input1.name = "jobItemWeapon";
              checkJobSetBoxdiv2input1.value = "라이트 크로스 보우,볼트 20개,";
              checkJobSetBoxdiv2p1.innerText = "라이트 크로스 보우,볼트 20개,";
              checkJobSetBoxdiv2input2.name = "jobItemWeapon";
              checkJobSetBoxdiv2input2.value = "단순 무기,";
              checkJobSetBoxdiv2p2.innerText = "단순 무기,";
              
              checkJobSetBoxdiv3input1.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input1.value = "구성 요소 주머니,";
              checkJobSetBoxdiv3p1.innerText = "구성 요소 주머니,";
              checkJobSetBoxdiv3input2.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input2.value = "비전 매개체,";
              checkJobSetBoxdiv3p2.innerText = "비전 매개체,";
  
              checkJobSetBoxdiv4input1.name = "jobItemTool";
              checkJobSetBoxdiv4input1.value = "던전 탐색자 꾸러미,대거 2개,";
              checkJobSetBoxdiv4p1.innerText = "던전 탐색자 꾸러미,대거 2개,";
              checkJobSetBoxdiv4input2.name = "jobItemTool";
              checkJobSetBoxdiv4input2.value = "탐험가 꾸러미,대거 2개,";
              checkJobSetBoxdiv4p2.innerText = "탐험가 꾸러미,대거 2개,";

              checkJobSetBoxMoneyRolling.addEventListener("click",function(event)  {
                checkJobSetBoxMoneyRollingValue.innerText = `${totalDiceTool(3,4)+10}`
                chkMoney = checkJobSetBoxMoneyRollingValue.innerText;
              })

            }else if(checkJobSet === "워락")  {
              checkJobSetBoxdiv1input1.name = "jobItemArmor";
              checkJobSetBoxdiv1input1.value = "레더 아머,";
              checkJobSetBoxdiv1p1.innerText = "레더 아머,";
              checkJobSetBoxdiv1input2.name = "jobItemArmor";
              checkJobSetBoxdiv1input2.disabled = true;
  
              checkJobSetBoxdiv2input1.name = "jobItemWeapon";
              checkJobSetBoxdiv2input1.value = "라이트 크로스 보우,볼트 20개,";
              checkJobSetBoxdiv2p1.innerText = "라이트 크로스 보우,볼트 20개,";
              checkJobSetBoxdiv2input2.name = "jobItemWeapon";
              checkJobSetBoxdiv2input2.value = "단순 무기,";
              checkJobSetBoxdiv2p2.innerText = "단순 무기,";
              
              checkJobSetBoxdiv3input1.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input1.value = "구성 요소 주머니,";
              checkJobSetBoxdiv3p1.innerText = "구성 요소 주머니,";
              checkJobSetBoxdiv3input2.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input2.value = "비전 매개체,";
              checkJobSetBoxdiv3p2.innerText = "비전 매개체,";
  
              checkJobSetBoxdiv4input1.name = "jobItemTool";
              checkJobSetBoxdiv4input1.value = "학자 꾸러미,단순 무기,대거 2개,";
              checkJobSetBoxdiv4p1.innerText = "학자 꾸러미,단순 무기,대거 2개,";
              checkJobSetBoxdiv4input2.name = "jobItemTool";
              checkJobSetBoxdiv4input2.value = "던전 탐색자 꾸러미,단순 무기,대거 2개,";
              checkJobSetBoxdiv4p2.innerText = "던전 탐색자 꾸러미,단순 무기,대거 2개,";

              checkJobSetBoxMoneyRolling.addEventListener("click",function(event)  {
                checkJobSetBoxMoneyRollingValue.innerText = `${totalDiceTool(4,4)+10}`
                chkMoney = checkJobSetBoxMoneyRollingValue.innerText;
              })

            }else if(checkJobSet === "드루이드")  {
              checkJobSetBoxdiv1input1.name = "jobItemArmor";
              checkJobSetBoxdiv1input1.value = "레더 아머,";
              checkJobSetBoxdiv1p1.innerText = "레더 아머,";
              checkJobSetBoxdiv1input2.name = "jobItemArmor";
              checkJobSetBoxdiv1input2.disabled = true;
  
              checkJobSetBoxdiv2input1.name = "jobItemWeapon";
              checkJobSetBoxdiv2input1.value = "시미터,";
              checkJobSetBoxdiv2p1.innerText = "시미터,";
              checkJobSetBoxdiv2input2.name = "jobItemWeapon";
              checkJobSetBoxdiv2input2.value = "단순 근접 무기,";
              checkJobSetBoxdiv2p2.innerText = "단순 근접 무기,";
              
              checkJobSetBoxdiv3input1.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input1.value = "목제 방패,";
              checkJobSetBoxdiv3p1.innerText = "목제 방패,";
              checkJobSetBoxdiv3input2.name = "jobItemSubWeapon";
              checkJobSetBoxdiv3input2.value = "단순 무기,";
              checkJobSetBoxdiv3p2.innerText = "단순 무기,";
  
              checkJobSetBoxdiv4input1.name = "jobItemTool";
              checkJobSetBoxdiv4input1.value = "탐험가 꾸러미,드루이드 매개체,";
              checkJobSetBoxdiv4p1.innerText = "탐험가 꾸러미,드루이드 매개체,";
              checkJobSetBoxdiv4input2.name = "jobItemTool";
              checkJobSetBoxdiv4input2.disabled = true;

              checkJobSetBoxMoneyRolling.addEventListener("click",function(event)  {
                checkJobSetBoxMoneyRollingValue.innerText = `${totalDiceTool(2,4)+10}`
                chkMoney = checkJobSetBoxMoneyRollingValue.innerText;
              })

            }

            checkJobSetBoxdiv1input1.required = true;
            checkJobSetBoxdiv1input2.required = true;

            checkJobSetBoxdiv2input1.required = true;
            checkJobSetBoxdiv2input2.required = true;

            checkJobSetBoxdiv3input1.required = true;
            checkJobSetBoxdiv3input2.required = true;

            checkJobSetBoxdiv4input1.required = true;
            checkJobSetBoxdiv4input2.required = true;

          checkJobSetBox.className = "checkJobSetBox";

          checkJobSetBoxdiv1.className = "checkJobSetBoxdiv1";
            checkJobSetBoxdiv1input1.type = "radio";
            checkJobSetBoxdiv1input2.type = "radio";
          checkJobSetBoxdiv2.className = "checkJobSetBoxdiv2";
            checkJobSetBoxdiv2input1.type = "radio";
            checkJobSetBoxdiv2input2.type = "radio";
          checkJobSetBoxdiv3.className = "checkJobSetBoxdiv3";
            checkJobSetBoxdiv3input1.type = "radio";
            checkJobSetBoxdiv3input2.type = "radio";
          checkJobSetBoxdiv4.className = "checkJobSetBoxdiv4";
            checkJobSetBoxdiv4input1.type = "radio";
            checkJobSetBoxdiv4input2.type = "radio";
          checkJobSetBoxsubmit.type = "submit";
          checkJobSetBoxsubmit.value = "(박스당 하나씩)장비선택 완료"

          checkJobSetBoxsubmit.addEventListener("click",function(event) {
            event.preventDefault();

            event.target.parentNode.style.display = "none";
          })
        })
        
        characterSetBox1Submit.type = "submit";
        characterSetBox1Submit.className = "characterNextSet1";
        characterSetBox1Submit.value = "다음";


        characterSetBox1Submit.addEventListener("click", firstSetCharacter);

        function firstSetCharacter(event)    {
            event.preventDefault(); // 이벤트 막음

            const firstNextBtn = event.target,
                  nowNoneDiv = firstNextBtn.parentNode.parentNode;

            nextblockDiv = firstNextBtn.parentNode.parentNode.parentNode.lastChild;

            nowNoneDiv.style.display = "none";
            nextblockDiv.style.display = "block";
        }

      characterSetBox2.className = "characterSetBox characterSetBox2";
        characterSetBox2SelectSet.className = "selectSet";
          characterSetBox2SelectSetP.innerText = "포인트 분배 방식";
          characterSetBox2SelectSetBtn1.className = "diceSelectBtn";
          characterSetBox2SelectSetBtn1.innerText = "4D6(6면체 주사위를 4번 더한 합)";
          characterSetBox2SelectSetBtn2.className = "pointBuyBtn";
          characterSetBox2SelectSetBtn2.innerText = "Point-buy 주어진 포인트를 사용하여 올리는 방법or 임의 조작";


          characterSetBox2SelectSetBtn1.addEventListener("click", addDice4D6);
          characterSetBox2SelectSetBtn2.addEventListener("click", addPointBuy);

        
        function addDice4D6(event)  {    // 주사위 셋팅으로 결정했을때
            event.preventDefault(); // submit 중지
            event.target.parentNode.style.display = "none"; // 주사위 / 포인트 설정하는 div hidden 처리

            characterSetBox2Form.appendChild(characterSetBox2Dice4D6);  // 주사위 스탯 생성하는 단
          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6P1);
          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6Input1);
          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6P2);
          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6Input2);
          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6P3);
          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6Input3);
          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6P4);
          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6Input4);
          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6P5);
          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6Input5);
          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6P6);
          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6Input6);

          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6DiceBox);
            characterSetBox2Dice4D6DiceBox.appendChild(characterSetBox2Dice4D6P1DiceBoxValue);

          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6DiceRollBtn);
          characterSetBox2Dice4D6.appendChild(characterSetBox2Dice4D6Submit);


            characterSetBox2Dice4D6.className = "dice4D6";  //  주사위 스탯 설정하는 단
          characterSetBox2Dice4D6P1.innerText = "스텟 분배 : 근력";
          characterSetBox2Dice4D6Input1.type = "number";
          characterSetBox2Dice4D6Input1.className = "str";
          characterSetBox2Dice4D6P2.innerText = "스텟 분배 : 재주";
          characterSetBox2Dice4D6Input2.type = "number";
          characterSetBox2Dice4D6Input2.className = "dex";
          characterSetBox2Dice4D6P3.innerText = "스텟 분배 : 건강";
          characterSetBox2Dice4D6Input3.type = "number";
          characterSetBox2Dice4D6Input3.className = "con";
          characterSetBox2Dice4D6P4.innerText = "스텟 분배 : 지식";
          characterSetBox2Dice4D6Input4.type = "number";
          characterSetBox2Dice4D6Input4.className = "int";
          characterSetBox2Dice4D6P5.innerText = "스텟 분배 : 지혜";
          characterSetBox2Dice4D6Input5.type = "number";
          characterSetBox2Dice4D6Input5.className = "wis";
          characterSetBox2Dice4D6P6.innerText = "스텟 분배 : 매력";
          characterSetBox2Dice4D6Input6.type = "number";
          characterSetBox2Dice4D6Input6.className = "cha";

          characterSetBox2Dice4D6DiceBox.className= "diceBox";
            characterSetBox2Dice4D6P1DiceBoxValue.className = "diceValue";
            characterSetBox2Dice4D6P1DiceBoxValue.innerText = "최소 값 제외 합계 : 0";

          characterSetBox2Dice4D6DiceRollBtn.className = "diceRoll";
          characterSetBox2Dice4D6DiceRollBtn.value = "DICE";
          characterSetBox2Dice4D6DiceRollBtn.innerText = "DICE";

          characterSetBox2Dice4D6DiceRollBtn.addEventListener("click", diceRollBtnClick);   // 주사위 롤 클릭

          function diceRollBtnClick(event)   {  // 주사위 클릭 이벤트
            event.preventDefault(); // submit 중지

            let randomDice6D =  Math.floor(Math.random() * 6)+1,
                setRandomDiceRoll6D = document.createElement("p");

            if(setRollDiceValue.length <= 3)    {
                setRollDiceValue.push(randomDice6D);
                dicePlusValue = 0;

                characterSetBox2Dice4D6DiceBox.appendChild(setRandomDiceRoll6D);

                setRandomDiceRoll6D.innerText = `${randomDice6D}`;

                const minDiceValue = Math.min(...setRollDiceValue);

                for(chkDiceValue = 0; chkDiceValue <= setRollDiceValue.length-1; chkDiceValue++)   {
                    let chackAllDiceValue = setRollDiceValue[chkDiceValue];

                    dicePlusValue = Number(dicePlusValue) + Number(chackAllDiceValue);
                }

                let  finalDiceValue = 0;
                     finalDiceValue = dicePlusValue - Number(minDiceValue);

                characterSetBox2Dice4D6P1DiceBoxValue.innerText = `최소 값 제외 합계 : ${finalDiceValue}`;

            } else  {
                setRollDiceValue = [];
                characterSetBox2Dice4D6DiceBox.innerHTML = "";
                characterSetBox2Dice4D6DiceBox.appendChild(characterSetBox2Dice4D6P1DiceBoxValue);
                characterSetBox2Dice4D6P1DiceBoxValue.className = "diceValue";
                characterSetBox2Dice4D6P1DiceBoxValue.innerText = "최소 값 제외 합계 : 0";
            }
          }

          characterSetBox2Dice4D6Submit.className = "characterNextSet2";
          characterSetBox2Dice4D6Submit.type= "submit";
          characterSetBox2Dice4D6Submit.value = "다음";

          characterSetBox2Dice4D6Submit.addEventListener("click",selectDiceNextSubmit);

            function selectDiceNextSubmit(event) {  // submit 버튼 클릭 이벤트  (dice 방식)
                event.preventDefault(); // 이벤트 막음
                let myJobArmor = characterSetBox1Form.querySelector('input[name="jobItemArmor"]:checked').value,  // 직업에 따른 방어구
                myJobWeapon = characterSetBox1Form.querySelector('input[name="jobItemWeapon"]:checked').value,  // 직업에 따른 무기
                myJobSubWeapon = characterSetBox1Form.querySelector('input[name="jobItemSubWeapon"]:checked').value, // 직업에 따른 서브 무기
                myJobTool = characterSetBox1Form.querySelector('input[name="jobItemTool"]:checked').value;   // 직업에 따른 도구

                let checkd = {  
                    level : 0,  // 레벨
                    exp : 0,  // 경험치
                    inspiration : 0, // 고양감 점수
                    leftHand : null, // 왼손
                    rightHand : null, // 오른손
                    armor : null, // 갑옷
                    Entp : characterSetBox1Select.value,  // 종족
                    name : characterSetBox1Input1.value,  // 이름
                    age : characterSetBox1Input2.value,   // 나이
                    job : characterSetBox1JobSelect.value,  // 직업
                    CP : 0, // 동화
                    SP : 0, // 은화
                    EP : 0, // 호박금화
                    GP : chkMoney, // 금화
                    PP : 0, // 백금화
                    jobArmor : myJobArmor,  // 직업에 따른 방어구
                    jobWeapon : myJobWeapon,  // 직업에 따른 무기
                    jobSubWeapon : myJobSubWeapon, // 직업에 따른 서브 무기
                    jobTool : myJobTool,   // 직업에 따른 도구
                    rang : null,   // 종족에 따른 언어
                    speed : 0,  // 스피드
                    movement : 0, // 이동속도
                    jsMaxHitPoint : 0,  // 최대 히트 포인트
                    subHitPoint : 0,  // 임시 히트 포인트
                    nowHitPoint : 0,  // 현재 히트 포인트
                    str : characterSetBox2Dice4D6Input1.value,  // 스텟 1
                    dex : characterSetBox2Dice4D6Input2.value,  // 스텟 2
                    con : characterSetBox2Dice4D6Input3.value,  // 스텟 3
                    int : characterSetBox2Dice4D6Input4.value,  // 스텟 4
                    wis : characterSetBox2Dice4D6Input5.value,  // 스텟 5
                    cha : characterSetBox2Dice4D6Input6.value,  // 스텟 6
                }

                setLocalKeyValue.push(checkd);

                localStorage.setItem(`chartKey`,JSON.stringify(setLocalKeyValue))

                let hiddenSetBox = event.target.parentNode.parentNode.parentNode.parentNode;
                hiddenSetBox.style.display = "none";

                if(hiddenSetBox.parentNode.childNodes[setLocalKeyValue.length] !== undefined)  {
                  hiddenSetBox.parentNode.childNodes[setLocalKeyValue.length].style.display = "block";
                  setTimeout(() => {
                    hiddenSetBox.parentNode.childNodes[setLocalKeyValue.length].className += " opacity";
                  }, 300);
                } else  {
                  chartSetting();
                }
            }
        
        }
        
        function addPointBuy(event)  {   // 포인트 셋팅으로 결정했을때
            event.preventDefault(); // submit 중지
            event.target.parentNode.style.display = "none"; // 주사위 / 포인트 설정하는 div hidden 처리

            characterSetBox2Form.appendChild(characterSetBox2PointBuy); // 포인트 방식 생성하는 단
          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuyP1);
          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuyInput1);
          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuyP2);
          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuyInput2);
          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuyP3);
          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuyInput3);
          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuyP4);
          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuyInput4);
          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuyP5);
          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuyInput5);
          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuyP6);
          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuyInput6);

          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuyPointBox);
            characterSetBox2PointBuyPointBox.appendChild(characterSetBox2PointBuyPointBoxP);
            characterSetBox2PointBuyPointBox.appendChild(characterSetBox2PointBuyPointBoxPInput);

          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuySubmit);


            characterSetBox2PointBuy.className = "pointBuy";    // 포인트 방식 설정하는 단
          characterSetBox2PointBuyP1.innerText = "스텟 분배 : 근력";
          characterSetBox2PointBuyInput1.type = "number";
          characterSetBox2PointBuyInput1.className = "str";
          characterSetBox2PointBuyInput1.value = "8";
          characterSetBox2PointBuyInput1.min = "8";
          characterSetBox2PointBuyP2.innerText = "스텟 분배 : 재주";
          characterSetBox2PointBuyInput2.type = "number";
          characterSetBox2PointBuyInput2.className = "dex";
          characterSetBox2PointBuyInput2.value = "8";
          characterSetBox2PointBuyInput2.min = "8";
          characterSetBox2PointBuyP3.innerText = "스텟 분배 : 건강";
          characterSetBox2PointBuyInput3.type = "number";
          characterSetBox2PointBuyInput3.className = "con";
          characterSetBox2PointBuyInput3.value = "8";
          characterSetBox2PointBuyInput3.min = "8";
          characterSetBox2PointBuyP4.innerText = "스텟 분배 : 지식";
          characterSetBox2PointBuyInput4.type = "number";
          characterSetBox2PointBuyInput4.className = "int";
          characterSetBox2PointBuyInput4.value = "8";
          characterSetBox2PointBuyInput4.min = "8";
          characterSetBox2PointBuyP5.innerText = "스텟 분배 : 지혜";
          characterSetBox2PointBuyInput5.type = "number";
          characterSetBox2PointBuyInput5.className = "wis";
          characterSetBox2PointBuyInput5.value = "8";
          characterSetBox2PointBuyInput5.min = "8";
          characterSetBox2PointBuyP6.innerText = "스텟 분배 : 매력";
          characterSetBox2PointBuyInput6.type = "number";
          characterSetBox2PointBuyInput6.className = "cha";
          characterSetBox2PointBuyInput6.value = "8";
          characterSetBox2PointBuyInput6.min = "8";
        
        characterSetBox2PointBuyPointBox.className = "PointBox";
          characterSetBox2PointBuyPointBoxP.innerText = "남은 포인트 : "
            characterSetBox2PointBuyPointBoxPInput.className = "buyPointNum";
            characterSetBox2PointBuyPointBoxPInput.type = "text";
            characterSetBox2PointBuyPointBoxPInput.placeholder = "원하시는 포인트를 입력하세요";

        characterSetBox2PointBuySubmit.className = "characterNextSet2";
        characterSetBox2PointBuySubmit.type = "submit";
        characterSetBox2PointBuySubmit.value = "다음";


        characterSetBox2Form.addEventListener("change", handlerChangePoint);

        let pointNowStr = characterSetBox2PointBuyInput1.value,  // 1번스텟
            pointNowDex = characterSetBox2PointBuyInput2.value,  // 2번스텟
            pointNowCon = characterSetBox2PointBuyInput3.value,  // 3번스텟
            pointNowInt = characterSetBox2PointBuyInput4.value,  // 4번스텟
            pointNowWis = characterSetBox2PointBuyInput5.value,  // 5번스텟
            pointNowCha = characterSetBox2PointBuyInput6.value,  // 6번스텟
            totalPrevPoint = 48;  // 기본 스텟 총합
            totalNowPoint = Number(pointNowStr) + Number(pointNowDex) + Number(pointNowCon) + Number(pointNowInt) + Number(pointNowWis) + Number(pointNowCha);  //  기본 스탯의 총합


        function handlerChangePoint() { // 포인트 계산 단.
          let totalChangePoint = Number(characterSetBox2PointBuyInput1.value) + Number(characterSetBox2PointBuyInput2.value) + Number(characterSetBox2PointBuyInput3.value) + Number(characterSetBox2PointBuyInput4.value) + Number(characterSetBox2PointBuyInput5.value) + Number(characterSetBox2PointBuyInput6.value),   //  49 
              // 현재 변경된 스탯값의 총합
              MyPoint = characterSetBox2PointBuyPointBoxPInput.value, //  남은 나의 포인트 값
              savePoint = Number(totalChangePoint) - Number(totalNowPoint), //  변경 후 스탯의 총합 - 변경 전 스탯의 총합
              totalSavePoint = savePoint; //  남은 포인트에서 - 혹은 + 될 포인트

              MyPoint = Number(MyPoint) - Number(totalSavePoint); // 남은 포인트를 계산
              characterSetBox2PointBuyPointBoxPInput.value = `${MyPoint}`; // 계산된 값을 입력

              totalNowPoint = totalChangePoint; // 변경된 총합 값을 저장
          }

          characterSetBox2PointBuySubmit.addEventListener("click",selectPointNextSubmit);

            function selectPointNextSubmit(event) {  // submit 버튼 클릭 이벤트 (point 방식)
                event.preventDefault(); // 이벤트 막음
                let myJobArmor = characterSetBox1Form.querySelector('input[name="jobItemArmor"]:checked').value,  // 직업에 따른 방어구
                myJobWeapon = characterSetBox1Form.querySelector('input[name="jobItemWeapon"]:checked').value,  // 직업에 따른 무기
                myJobSubWeapon = characterSetBox1Form.querySelector('input[name="jobItemSubWeapon"]:checked').value, // 직업에 따른 서브 무기
                myJobTool = characterSetBox1Form.querySelector('input[name="jobItemTool"]:checked').value;   // 직업에 따른 도구

                console.dir(characterSetBox1JobSelect.querySelector(".checkSaveMoney"));

                let checkd = {  // 오브젝트로 저장
                    level : 1,  // 레벨
                    exp : 0,  // 경험치
                    inspiration : 0, // 고양감 점수
                    leftHand : null, // 왼손
                    rightHand : null, // 오른손
                    armor : null, // 갑옷
                    Entp : characterSetBox1Select.value,    // 종족
                    name : characterSetBox1Input1.value,    // 이름
                    age : characterSetBox1Input2.value,     // 나이
                    job : characterSetBox1JobSelect.value,  // 직업
                    CP : 0, // 동화
                    SP : 0, // 은화
                    EP : 0, // 호박금화
                    GP : chkMoney, // 금화
                    PP : 0, // 백금화
                    jobArmor : myJobArmor,  // 직업에 따른 방어구
                    jobWeapon : myJobWeapon,  // 직업에 따른 무기
                    jobSubWeapon : myJobSubWeapon, // 직업에 따른 서브 무기
                    jobTool : myJobTool,   // 직업에 따른 도구
                    rang : null,   // 종족에 따른 언어
                    speed : 0,  // 스피드
                    movement : 0, // 이동속도
                    jsMaxHitPoint : 0,  // 최대 히트 포인트
                    subHitPoint : 0,  // 임시 히트 포인트
                    nowHitPoint : 0,  // 현재 히트 포인트
                    str : characterSetBox2PointBuyInput1.value, //  스텟1
                    dex : characterSetBox2PointBuyInput2.value, //  스텟2
                    con : characterSetBox2PointBuyInput3.value, //  스텟3
                    int : characterSetBox2PointBuyInput4.value, //  스텟4
                    wis : characterSetBox2PointBuyInput5.value, //  스텟5
                    cha : characterSetBox2PointBuyInput6.value, //  스텟6
                }
                setLocalKeyValue.push(checkd);

                localStorage.setItem(`chartKey`,JSON.stringify(setLocalKeyValue));

                let hiddenSetBox = event.target.parentNode.parentNode.parentNode.parentNode;
                hiddenSetBox.style.display = "none";

                if(hiddenSetBox.parentNode.childNodes[setLocalKeyValue.length] !== undefined)  {
                  hiddenSetBox.parentNode.childNodes[setLocalKeyValue.length].style.display = "block";
                  setTimeout(() => {
                    hiddenSetBox.parentNode.childNodes[setLocalKeyValue.length].className += " opacity";
                  }, 300);
                } else  {
                  chartSetting();
                }
            }
        }
}
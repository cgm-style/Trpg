function addChart(num) {
    const jsCharacterSetting = document.createElement("div"), // 생성을 위한 정의

        characterSetBox1 = document.createElement("div"),

        characterSetBox1Form = document.createElement("form"),

        characterSetBox1P1 = document.createElement("p"),
        characterSetBox1Select = document.createElement("select"),
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

        characterSetBox1P2 = document.createElement("p"),
        characterSetBox1Input1 = document.createElement("input"),

        characterSetBox1P3 = document.createElement("p"),
        characterSetBox1Input2 = document.createElement("input"),

        characterSetBox1P4 = document.createElement("p"),
        characterSetBox1JobSelect = document.createElement("select"),
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

        characterSetBox1Submit = document.createElement("input"),

        characterSetBox2 = document.createElement("div"),

        characterSetBox2Form = document.createElement("form"),

          characterSetBox2SelectSet = document.createElement("div"),
            characterSetBox2SelectSetP = document.createElement("p"),
            characterSetBox2SelectSetBtn1 = document.createElement("button"),
            characterSetBox2SelectSetBtn2 = document.createElement("button"),
          
          characterSetBox2Dice4D6 = document.createElement("div"),

            characterSetBox2Dice4D6P1 = document.createElement("p"),
            characterSetBox2Dice4D6Input1 = document.createElement("input"),

            characterSetBox2Dice4D6P2 = document.createElement("p"),
            characterSetBox2Dice4D6Input2 = document.createElement("input"),

            characterSetBox2Dice4D6P3 = document.createElement("p"),
            characterSetBox2Dice4D6Input3 = document.createElement("input"),

            characterSetBox2Dice4D6P4 = document.createElement("p"),
            characterSetBox2Dice4D6Input4 = document.createElement("input"),

            characterSetBox2Dice4D6P5 = document.createElement("p"),
            characterSetBox2Dice4D6Input5 = document.createElement("input"),

            characterSetBox2Dice4D6P6 = document.createElement("p"),
            characterSetBox2Dice4D6Input6 = document.createElement("input"),

            characterSetBox2Dice4D6DiceBox = document.createElement("div"),
              characterSetBox2Dice4D6P1DiceBoxValue = document.createElement("p"),

            characterSetBox2Dice4D6DiceRollBtn = document.createElement("button"),

            characterSetBox2Dice4D6Submit = document.createElement("input"),


          characterSetBox2PointBuy = document.createElement("div"),

            characterSetBox2PointBuyP1 = document.createElement("p"),
            characterSetBox2PointBuyInput1 = document.createElement("input"),

            characterSetBox2PointBuyP2 = document.createElement("p"),
            characterSetBox2PointBuyInput2 = document.createElement("input"),

            characterSetBox2PointBuyP3 = document.createElement("p"),
            characterSetBox2PointBuyInput3 = document.createElement("input"),

            characterSetBox2PointBuyP4 = document.createElement("p"),
            characterSetBox2PointBuyInput4 = document.createElement("input"),

            characterSetBox2PointBuyP5 = document.createElement("p"),
            characterSetBox2PointBuyInput5 = document.createElement("input"),

            characterSetBox2PointBuyP6 = document.createElement("p"),
            characterSetBox2PointBuyInput6 = document.createElement("input"),

            characterSetBox2PointBuyPointBox = document.createElement("div"),
              characterSetBox2PointBuyPointBoxP = document.createElement("p"),
                characterSetBox2PointBuyPointBoxPInput = document.createElement("input"),

            characterSetBox2PointBuySubmit = document.createElement("input");


  /*  생성하는 단  */

  jsPlaySetting.appendChild(jsCharacterSetting);

    jsCharacterSetting.appendChild(characterSetBox1);

      characterSetBox1.appendChild(characterSetBox1Form);

        characterSetBox1Form.appendChild(characterSetBox1P1);
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

        characterSetBox1Form.appendChild(characterSetBox1P2);
        characterSetBox1Form.appendChild(characterSetBox1Input1);

        characterSetBox1Form.appendChild(characterSetBox1P3);
        characterSetBox1Form.appendChild(characterSetBox1Input2);

        characterSetBox1Form.appendChild(characterSetBox1P4);
        characterSetBox1Form.appendChild(characterSetBox1JobSelect);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption1);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption2);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption3);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption4);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption5);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption6);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption7);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption8);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption9);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption10);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption11);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption12);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption13);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption14);
          characterSetBox1JobSelect.appendChild(characterSetBox1JobOption15);

        characterSetBox1Form.appendChild(characterSetBox1Submit);


    jsCharacterSetting.appendChild(characterSetBox2);

      characterSetBox2.appendChild(characterSetBox2Form);
        characterSetBox2Form.appendChild(characterSetBox2SelectSet);
          characterSetBox2SelectSet.appendChild(characterSetBox2SelectSetP);
          characterSetBox2SelectSet.appendChild(characterSetBox2SelectSetBtn1);
          characterSetBox2SelectSet.appendChild(characterSetBox2SelectSetBtn2);
      
          
    /* 셋팅을 위한 단 */

    let setLocalKeyName = `jsCrtSet${num}`,
        setLocalKeyValue = [];
    

    jsCharacterSetting.className = `jsCharacterSetting jsCrtSet${num}`;
    console.dir(jsCharacterSetting);
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
          characterSetBox1JobOption7.innerText = "클래릭";
          characterSetBox1JobOption8.innerText = "페이버드 소울";
          characterSetBox1JobOption9.innerText = "드루이드";
          characterSetBox1JobOption10.innerText = "워락";
          characterSetBox1JobOption11.innerText = "로그";
          characterSetBox1JobOption12.innerText = "레인저";
          characterSetBox1JobOption13.innerText = "바드";
          characterSetBox1JobOption14.innerText = "아티피서";
          characterSetBox1JobOption15.innerText = "알케미스트";
        
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

            console.dir(characterSetBox1Select);
        }

      characterSetBox2.className = "characterSetBox characterSetBox2";
        characterSetBox2SelectSet.className = "selectSet";
          characterSetBox2SelectSetP.innerText = "포인트 분배 방식";
          characterSetBox2SelectSetBtn1.className = "diceSelectBtn";
          characterSetBox2SelectSetBtn1.innerText = "4D6(6면체 주사위를 4번 더한 합)";
          characterSetBox2SelectSetBtn2.className = "pointBuyBtn";
          characterSetBox2SelectSetBtn2.innerText = "Point-buy 주어진 포인트를 사용하여 올리는 방법";


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
          characterSetBox2Dice4D6Input1.type = "text";
          characterSetBox2Dice4D6Input1.className = "str";
          characterSetBox2Dice4D6P2.innerText = "스텟 분배 : 재주";
          characterSetBox2Dice4D6Input2.type = "text";
          characterSetBox2Dice4D6Input2.className = "dex";
          characterSetBox2Dice4D6P3.innerText = "스텟 분배 : 건강";
          characterSetBox2Dice4D6Input3.type = "text";
          characterSetBox2Dice4D6Input3.className = "con";
          characterSetBox2Dice4D6P4.innerText = "스텟 분배 : 지식";
          characterSetBox2Dice4D6Input4.type = "text";
          characterSetBox2Dice4D6Input4.className = "int";
          characterSetBox2Dice4D6P5.innerText = "스텟 분배 : 지혜";
          characterSetBox2Dice4D6Input5.type = "text";
          characterSetBox2Dice4D6Input5.className = "wis";
          characterSetBox2Dice4D6P6.innerText = "스텟 분배 : 매력";
          characterSetBox2Dice4D6Input6.type = "text";
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

            function selectDiceNextSubmit(event) {  // submit 버튼 클릭 이벤트
                event.preventDefault(); // 이벤트 막음

                let checkd = {
                    Entp : characterSetBox1Select.value,
                    name : characterSetBox1Input1.value,
                    age : characterSetBox1Input2.value,
                    job : characterSetBox1JobSelect.value,
                    str : characterSetBox2Dice4D6Input1.value,
                    dex : characterSetBox2Dice4D6Input2.value,
                    con : characterSetBox2Dice4D6Input3.value,
                    int : characterSetBox2Dice4D6Input4.value,
                    wis : characterSetBox2Dice4D6Input5.value,
                    cha : characterSetBox2Dice4D6Input6.value,
                }

                setLocalKeyValue.push(checkd);
                console.dir(setLocalKeyValue);
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
              characterSetBox2PointBuyPointBoxP.appendChild(characterSetBox2PointBuyPointBoxPInput);

          characterSetBox2PointBuy.appendChild(characterSetBox2PointBuySubmit);


            characterSetBox2PointBuy.className = "pointBuy";    // 포인트 방식 설정하는 단
          characterSetBox2PointBuyP1.innerText = "스텟 분배 : 근력";
          characterSetBox2PointBuyInput1.type = "number";
          characterSetBox2PointBuyInput1.className = "str";
          characterSetBox2PointBuyInput1.min = "8";
          characterSetBox2PointBuyP2.innerText = "스텟 분배 : 재주";
          characterSetBox2PointBuyInput2.type = "number";
          characterSetBox2PointBuyInput2.className = "dex";
          characterSetBox2PointBuyInput2.min = "8";
          characterSetBox2PointBuyP3.innerText = "스텟 분배 : 건강";
          characterSetBox2PointBuyInput3.type = "number";
          characterSetBox2PointBuyInput3.className = "con";
          characterSetBox2PointBuyInput3.min = "8";
          characterSetBox2PointBuyP4.innerText = "스텟 분배 : 지식";
          characterSetBox2PointBuyInput4.type = "number";
          characterSetBox2PointBuyInput4.className = "int";
          characterSetBox2PointBuyInput4.min = "8";
          characterSetBox2PointBuyP5.innerText = "스텟 분배 : 지혜";
          characterSetBox2PointBuyInput5.type = "number";
          characterSetBox2PointBuyInput5.className = "wis";
          characterSetBox2PointBuyInput5.min = "8";
          characterSetBox2PointBuyP6.innerText = "스텟 분배 : 매력";
          characterSetBox2PointBuyInput6.type = "number";
          characterSetBox2PointBuyInput6.className = "cha";
          characterSetBox2PointBuyInput6.min = "8";
        
        characterSetBox2PointBuyPointBox.className = "PointBox";
          characterSetBox2PointBuyPointBoxP.innerText = "남은 포인트 : "
            characterSetBox2PointBuyPointBoxPInput.className = "buyPointNum";
            characterSetBox2PointBuyPointBoxPInput.type = "text";
            characterSetBox2PointBuyPointBoxPInput.placeholder = "원하시는 포인트를 입력하세요";

        characterSetBox2PointBuySubmit.className = "characterNextSet2";
        characterSetBox2PointBuySubmit.type = "submit";
        characterSetBox2PointBuySubmit.value = "다음";
        }
}
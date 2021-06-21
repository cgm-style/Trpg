function addSheet(num,leadLoadGameSet) {
    let myStr = leadLoadGameSet[num].str,   // 힘
        myDex =  leadLoadGameSet[num].dex,  // 민첩
        myCon = leadLoadGameSet[num].con,   // 건강
        myInt = leadLoadGameSet[num].int,   // 지능
        myWis = leadLoadGameSet[num].wis,   // 지혜
        myCha = leadLoadGameSet[num].cha,   // 매력
        myAge = leadLoadGameSet[num].age,   // 나이
        myJob = leadLoadGameSet[num].job,   // 직업
        myName = leadLoadGameSet[num].name, // 이름
        myEntp = leadLoadGameSet[num].Entp, // 종족
        mySpeed = leadLoadGameSet[num].speed,   // 이동속도
        myLevel = leadLoadGameSet[num].level,   // 레벨
        myInspiration = leadLoadGameSet[num].inspiration,   // 고양감
        myjsMaxHitPoint = leadLoadGameSet[num].jsMaxHitPoint,  // 최대 히트 포인트
        myNowHitPoint = leadLoadGameSet[num].nowHitPoint,   // 현재 히트 포인트
        mySubHitPoint = leadLoadGameSet[num].subHitPoint,   // 임시 히트 포인트
        jobArmor = 0,  // 직업에 따른 방어구
        jobWapon = 0,  // 직업에 따른 무기
        jobTool = 0,   // 직업에 따른 도구
        jobrang = 0,   // 직업에 따른 언어
        setJobHitPoint = 0, // 직업에 따른 기본 히트 포인트
        myHitDice = 0,  //  히트 다이스
        fixset = 0, // 수정치 입력할 변수
        entpStr = 0, // 힘 종족 수정치
        entpDex = 0, // 민첩 종족 수정치
        entpCon = 0, // 건강 종족 수정치
        entpInt = 0, // 지능 종족 수정치
        entpWis = 0, // 지혜 종족 수정치
        entpCha = 0, // 매력 종족 수정치
        fixstateStr = 0,    // 최종 힘 수정치
        fixstateDex = 0,    // 최종 민첩 수정치
        fixstateCon = 0,    // 최종 건강 수정치
        fixstateInt = 0,    // 최종 지능 수정치
        fixstateWis = 0,    // 최종 지혜 수정치
        fixstateCha = 0,    // 최종 매력 수정치
        proficiency = 0,    // 능숙도 보너스
        savincStateStr = 0, // 내성 굴림 힘
        savincStateDex = 0, // 내성 굴림 민첩
        savincStateCon = 0, // 내성 굴림 건강
        savincStateInt = 0, // 내성 굴림 지능
        savincStateWis = 0, // 내성 굴림 지혜
        savincStateCha = 0; // 내성 굴림 매력


        if(myEntp === "휴먼")   {   // 종족에 따른 수치 입력
            entpStr = 1;
            entpDex = 1;
            entpCon = 1;
            entpInt = 1;
            entpWis = 1;
            entpCha = 1;
            movement = 30;
        }else if(myEntp === "바위 노움")  {
            entpInt = 2;
            entpCon = 1;
            movement = 25;
        }else if(myEntp === "숲 노움")  {
            entpInt = 2;
            entpDex = 1;
            movement = 25;
        }else if(myEntp === "언덕 드워프")  {
            entpCon = 2;
            entpWis = 1;
            movement = 25;
        }else if(myEntp === "산 드워프")  {
            entpCon = 2;
            entpStr = 2;
            movement = 25;
        }else if(myEntp === "하이 엘프")  {
            entpDex = 2;
            entpInt = 1;
            movement = 30;
        }else if(myEntp === "우드 엘프")  {
            entpDex = 2;
            entpWis = 1;
            movement = 35;
        }else if(myEntp === "다크 엘프")  {
            entpDex = 2;
            entpCha = 1;
            movement = 30;
        }else if(myEntp === "하프 엘프")  {
            entpCha = 2;
            movement = 30;
        }else if(myEntp === "하프 오크")  {
            entpStr = 2;
            entpCon = 1;
            movement = 30;
        }else if(myEntp === "라이트 풋")  {
            entpDex = 2;
            movement = 25;
        }else if(myEntp === "드래곤본")  {
            entpStr = 2;
            entpCha = 1;
            movement = 30;
        }else if(myEntp === "티플링")  {
            entpInt = 1;
            entpCha = 2;
            movement = 30;
        };

        if(myJob === "파이터")    { // 직업에 따른 수치들
            myHitDice = "1d10"
            setJobHitPoint = 10;
            jobArmor = ""
        }else if(myJob === "바바리안")  {   
            myHitDice = "1d12"
            setJobHitPoint = 12;
        }else if(myJob === "팔라딘")  {
            myHitDice = "1d10"
            setJobHitPoint = 10;
        }else if(myJob === "뭉크")  {

        }else if(myJob === "소서러")  {
            myHitDice = "1d6"
            setJobHitPoint = 6;
        }else if(myJob === "위자드")  {
            myHitDice = "1d6"
            setJobHitPoint = 6;
        }else if(myJob === "클레릭")  {
            myHitDice = "1d8"
            setJobHitPoint = 8;
        }else if(myJob === "페이버드 소울")  {
            myHitDice = "1d8"
            setJobHitPoint = 8;
        }else if(myJob === "드루이드")  {
            myHitDice = "1d8"
            setJobHitPoint = 8;
        }else if(myJob === "워락")  {
            myHitDice = "1d8"
            setJobHitPoint = 8;
        }else if(myJob === "로그")  {
            myHitDice = "1d8"
            setJobHitPoint = 8;
        }else if(myJob === "레인저")  {
            myHitDice = "1d10"
            setJobHitPoint = 10;
        }else if(myJob === "바드")  {
            myHitDice = "1d8"
            setJobHitPoint = 8;
        }else if(myJob === "아티피서")  {

        }else if(myJob === "알케미스트")  {

        }

        if(myLevel <= 4){
            proficiency = 2;
        }else if (myLevel >= 5 && myLevel <= 8) {
            proficiency = 3;
        }else if (myLevel >= 9 && myLevel <= 12) {
            proficiency = 4;
        }else if (myLevel >= 13 && myLevel <= 16) {
            proficiency = 5;
        }else if (myLevel >= 17 && myLevel <= 20) {
            proficiency = 6;
        }

        function fixState(state) {  //  스탯에 따른 수정치를 구하는 단
            if(state <= 3)  {   // 순수 스탯에 의한 수정치
                fixset = "-3"
            }else if (state >= 4 && state <= 5)  {
                fixset = "-2"
            }else if (state >= 6 && state <= 8)  {
                fixset = "-1"
            }else if (state >= 9 && state <= 12)  {
                fixset = "0"
            }else if (state >= 13 && state <= 15)  {
                fixset = "+1"
            }else if (state >= 16 && state <= 17)  {
                fixset = "+2"
            }else if (state >= 17)  {
                fixset = "+3"
            }

            fixstateStr = Number(fixset) +  entpStr;    // 종족치 + 스탯 수정치 합산
            fixstateDex = Number(fixset) +  entpDex;
            fixstateCon = Number(fixset) +  entpCon;
            fixstateInt = Number(fixset) +  entpInt;
            fixstateWis = Number(fixset) +  entpWis;
            fixstateCha = Number(fixset) +  entpCha;


            if(fixstateStr >= 0)    {    // 양수라면 +를 붙여 가독성을 올려줌
                savincStateStr = `+${fixstateStr + proficiency}`;
                fixstateStr = `+${fixstateStr}`;
            }
            if(fixstateDex >= 0)  {
                savincStateDex = `+${fixstateDex + proficiency}`;
                fixstateDex = `+${fixstateDex}`;
            }
            if(fixstateCon >= 0)  {
                savincStateCon = `+${fixstateCon + proficiency}`;
                fixstateCon = `+${fixstateCon}`;
            }
            if(fixstateInt >= 0)  {
                savincStateInt = `+${fixstateInt + proficiency}`;
                fixstateInt = `+${fixstateInt}`;
            }
            if(fixstateWis >= 0)  {
                savincStateWis = `+${fixstateWis + proficiency}`;
                fixstateWis = `+${fixstateWis}`;
            }
            if(fixstateCha >= 0)  {
                savincStateCha = `+${fixstateCha + proficiency}`;
                fixstateCha = `+${fixstateCha}`;
            };

            myNowHitPoint = Number(savincStateCon) + Number(setJobHitPoint);
            
        }




    /* 생성 정의 하는 단 */
    const chartBox = document.createElement("div"),
          
        chartControl = document.createElement("div"),

        chartContainer = document.createElement("div"),
            main_text = document.createElement("p"),
            main_title = document.createElement("div"),
                main_titleP1 = document.createElement("p"),
                main_titleP2 = document.createElement("p"),
            setBox1  = document.createElement("div"),
                setBox1p1 = document.createElement("p"),
                    setBox1p1span1 = document.createElement("span"),
                    setBox1p1span2 = document.createElement("span"),
                setBox1p2 = document.createElement("p"),
            setBox2  = document.createElement("div"),
                setBox2p1 = document.createElement("p"),
                    setBox2p1span = document.createElement("span"),
                setBox2p2 = document.createElement("p"),
            setBox3  = document.createElement("div"),
                setBox3p1 = document.createElement("p"),
                    setBox3p1span = document.createElement("span"),
                setBox3p2 = document.createElement("p"),
            setBox4  = document.createElement("div"),
                setBox4p1 = document.createElement("p"),
                    setBox4p1span = document.createElement("span"),
                setBox4p2 = document.createElement("p"),
            stateBox1 = document.createElement("div"),
                stateBox1p1 = document.createElement("p"),
                stateBox1p2 = document.createElement("p"),
                stateBox1p3 = document.createElement("p"),
            stateBox2 = document.createElement("div"),
                stateBox2p1 = document.createElement("p"),
                stateBox2p2 = document.createElement("p"),
                stateBox2p3 = document.createElement("p"),
            stateBox3 = document.createElement("div"),
                stateBox3p1 = document.createElement("p"),
                stateBox3p2 = document.createElement("p"),
                stateBox3p3 = document.createElement("p"),
            stateBox4 = document.createElement("div"),
                stateBox4p1 = document.createElement("p"),
                stateBox4p2 = document.createElement("p"),
                stateBox4p3 = document.createElement("p"),
            stateBox5 = document.createElement("div"),
                stateBox5p1 = document.createElement("p"),
                stateBox5p2 = document.createElement("p"),
                stateBox5p3 = document.createElement("p"),
            stateBox6 = document.createElement("div"),
                stateBox6p1 = document.createElement("p"),
                stateBox6p2 = document.createElement("p"),
                stateBox6p3 = document.createElement("p"),
            GuardBox = document.createElement("div"),
                GuardBoxp1 = document.createElement("p"),
                GuardBoxp2 = document.createElement("p"),
            inttBox = document.createElement("div"),
                inttBoxinput = document.createElement("input"),
                inttBoxp = document.createElement("p"),
            speedBox = document.createElement("div"),
                speedBoxp1 = document.createElement("p"),
                speedBoxp2 = document.createElement("p"),
            insPoint = document.createElement("div"),
                insPointp1 = document.createElement("p"),
                insPointp2 = document.createElement("p"),
            propBonusPoint = document.createElement("div"),
                propBonusPointp1 = document.createElement("p"),
                propBonusPointp2 = document.createElement("p"),
            myTextArea1 = document.createElement("div"),
                myTextArea1textarea = document.createElement("textarea"),
                myTextArea1p = document.createElement("p"),
            myTextArea2 = document.createElement("div"),
                myTextArea2textarea = document.createElement("textarea"),
                myTextArea2p = document.createElement("p"),
            myTextArea3 = document.createElement("div"),
                myTextArea3textarea = document.createElement("textarea"),
                myTextArea3p = document.createElement("p"),
            myTextArea4 = document.createElement("div"),
                myTextArea4textarea = document.createElement("textarea"),
                myTextArea4p = document.createElement("p"),
            hitPointsBox = document.createElement("div"),
                hitPointsBoxp1  = document.createElement("p"),
                hitPointsBoxp2  = document.createElement("p"),
                hitPointsBoxp3  = document.createElement("p"),
            hitPointsBox1 = document.createElement("div"),
                hitPointsBox1p1 = document.createElement("p"),
                hitPointsBox1p2 = document.createElement("p"),
                hitPointsBox1p3 = document.createElement("p"),
            hitDiceBox = document.createElement("div"),
                hitDiceBoxp1 = document.createElement("p"),
                hitDiceBoxp2 = document.createElement("p"),
                hitDiceBoxp3 = document.createElement("p"),
            deathBox = document.createElement("div"),
                deathBoxform = document.createElement("form"),
                    deathBoxformdiv1 = document.createElement("div"),
                        deathBoxformdiv1p = document.createElement("p"),
                        deathBoxformdiv1input = document.createElement("input"),
                    deathBoxformdiv2 = document.createElement("div"),
                        deathBoxformdiv2p = document.createElement("p"),
                        deathBoxformdiv2input = document.createElement("input"),
                    deathBoxformdiv3 = document.createElement("div"),
                        deathBoxformdiv3p = document.createElement("p"),
            savincBox = document.createElement("form"),
                savincBoxdiv1 = document.createElement("div"),
                    savincBoxdiv1input = document.createElement("input"),
                    savincBoxdiv1p1 = document.createElement("p"),
                    savincBoxdiv1p2 = document.createElement("p"),
                    savincBoxdiv1p3 = document.createElement("p"),
                savincBoxdiv2 = document.createElement("div"),
                    savincBoxdiv2input = document.createElement("input"),
                    savincBoxdiv2p1 = document.createElement("p"),
                    savincBoxdiv2p2 = document.createElement("p"),
                    savincBoxdiv2p3 = document.createElement("p"),
                savincBoxdiv3 = document.createElement("div"),
                    savincBoxdiv3input = document.createElement("input"),
                    savincBoxdiv3p1 = document.createElement("p"),
                    savincBoxdiv3p2 = document.createElement("p"),
                    savincBoxdiv3p3 = document.createElement("p"),
                savincBoxdiv4 = document.createElement("div"),
                    savincBoxdiv4input = document.createElement("input"),
                    savincBoxdiv4p1 = document.createElement("p"),
                    savincBoxdiv4p2 = document.createElement("p"),
                    savincBoxdiv4p3 = document.createElement("p"),
                savincBoxdiv5 = document.createElement("div"),
                    savincBoxdiv5input = document.createElement("input"),
                    savincBoxdiv5p1 = document.createElement("p"),
                    savincBoxdiv5p2 = document.createElement("p"),
                    savincBoxdiv5p3 = document.createElement("p"),
                savincBoxdiv6 = document.createElement("div"),
                    savincBoxdiv6input = document.createElement("input"),
                    savincBoxdiv6p1 = document.createElement("p"),
                    savincBoxdiv6p2 = document.createElement("p"),
                    savincBoxdiv6p3 = document.createElement("p"),
                savincBoxp = document.createElement("p"),
            skillBox = document.createElement("form"),
                skillBoxdiv1 = document.createElement("div"),
                    skillBoxdiv1input = document.createElement("input"),
                    skillBoxdiv1p1 = document.createElement("p"),
                    skillBoxdiv1p2 = document.createElement("p"),
                skillBoxdiv2 = document.createElement("div"),
                    skillBoxdiv2input = document.createElement("input"),
                    skillBoxdiv2p1 = document.createElement("p"),
                    skillBoxdiv2p2 = document.createElement("p"),
                skillBoxdiv3 = document.createElement("div"),
                    skillBoxdiv3input = document.createElement("input"),
                    skillBoxdiv3p1 = document.createElement("p"),
                    skillBoxdiv3p2 = document.createElement("p"),
                skillBoxdiv4 = document.createElement("div"),
                    skillBoxdiv4input = document.createElement("input"),
                    skillBoxdiv4p1 = document.createElement("p"),
                    skillBoxdiv4p2 = document.createElement("p"),
                skillBoxdiv5 = document.createElement("div"),
                    skillBoxdiv5input = document.createElement("input"),
                    skillBoxdiv5p1 = document.createElement("p"),
                    skillBoxdiv5p2 = document.createElement("p"),
                skillBoxdiv6 = document.createElement("div"),
                    skillBoxdiv6input = document.createElement("input"),
                    skillBoxdiv6p1 = document.createElement("p"),
                    skillBoxdiv6p2 = document.createElement("p"),
                skillBoxdiv7 = document.createElement("div"),
                    skillBoxdiv7input = document.createElement("input"),
                    skillBoxdiv7p1 = document.createElement("p"),
                    skillBoxdiv7p2 = document.createElement("p"),
                skillBoxdiv8 = document.createElement("div"),
                    skillBoxdiv8input = document.createElement("input"),
                    skillBoxdiv8p1 = document.createElement("p"),
                    skillBoxdiv8p2 = document.createElement("p"),
                skillBoxdiv9 = document.createElement("div"),
                    skillBoxdiv9input = document.createElement("input"),
                    skillBoxdiv9p1 = document.createElement("p"),
                    skillBoxdiv9p2 = document.createElement("p"),
                skillBoxdiv10 = document.createElement("div"),
                    skillBoxdiv10input = document.createElement("input"),
                    skillBoxdiv10p1 = document.createElement("p"),
                    skillBoxdiv10p2 = document.createElement("p"),
                skillBoxdiv11 = document.createElement("div"),
                    skillBoxdiv11input = document.createElement("input"),
                    skillBoxdiv11p1 = document.createElement("p"),
                    skillBoxdiv11p2 = document.createElement("p"),
                skillBoxdiv12 = document.createElement("div"),
                    skillBoxdiv12input = document.createElement("input"),
                    skillBoxdiv12p1 = document.createElement("p"),
                    skillBoxdiv12p2 = document.createElement("p"),
                skillBoxdiv13 = document.createElement("div"),
                    skillBoxdiv13input = document.createElement("input"),
                    skillBoxdiv13p1 = document.createElement("p"),
                    skillBoxdiv13p2 = document.createElement("p"),
                skillBoxdiv14 = document.createElement("div"),
                    skillBoxdiv14input = document.createElement("input"),
                    skillBoxdiv14p1 = document.createElement("p"),
                    skillBoxdiv14p2 = document.createElement("p"),
                skillBoxdiv15 = document.createElement("div"),
                    skillBoxdiv15input = document.createElement("input"),
                    skillBoxdiv15p1 = document.createElement("p"),
                    skillBoxdiv15p2 = document.createElement("p"),
                skillBoxdiv16 = document.createElement("div"),
                    skillBoxdiv16input = document.createElement("input"),
                    skillBoxdiv16p1 = document.createElement("p"),
                    skillBoxdiv16p2 = document.createElement("p"),
                skillBoxdiv17 = document.createElement("div"),
                    skillBoxdiv17input = document.createElement("input"),
                    skillBoxdiv17p1 = document.createElement("p"),
                    skillBoxdiv17p2 = document.createElement("p"),
                skillBoxdiv18 = document.createElement("div"),
                    skillBoxdiv18input = document.createElement("input"),
                    skillBoxdiv18p1 = document.createElement("p"),
                    skillBoxdiv18p2 = document.createElement("p"),
                skillBoxp = document.createElement("p"),
            passiveWisdom = document.createElement("div"),
                passiveWisdomp1 = document.createElement("p"),
                passiveWisdomp2 = document.createElement("p"),
            otherPro_Lang = document.createElement("div"),
                otherPro_Langp1 = document.createElement("p"),
                    otherPro_Langp1span = document.createElement("span"),
                otherPro_Langp2 = document.createElement("p"),
                    otherPro_Langp2span = document.createElement("span"),
                otherPro_Langp3 = document.createElement("p"),
                    otherPro_Langp3span = document.createElement("span"),
                otherPro_Langp4 = document.createElement("p"),
                    otherPro_Langp4span = document.createElement("span"),
                otherPro_Langp5 = document.createElement("p"),
            atkMagBox = document.createElement("div"),
                atkMagBoxp1 = document.createElement("p"),
                    atkMagBoxp1span1 = document.createElement("span"),
                    atkMagBoxp1span2 = document.createElement("span"),
                    atkMagBoxp1span3 = document.createElement("span"),
                atkMagBoxdiv1 = document.createElement("div"),
                    atkMagBoxdiv1input1 = document.createElement("input"), 
                    atkMagBoxdiv1input2 = document.createElement("input"), 
                    atkMagBoxdiv1input3 = document.createElement("input"), 
                atkMagBoxdiv2 = document.createElement("div"),
                    atkMagBoxdiv2input1 = document.createElement("input"), 
                    atkMagBoxdiv2input2 = document.createElement("input"), 
                    atkMagBoxdiv2input3 = document.createElement("input"), 
                atkMagBoxdiv3 = document.createElement("div"),
                    atkMagBoxdiv3input1 = document.createElement("input"), 
                    atkMagBoxdiv3input2 = document.createElement("input"), 
                    atkMagBoxdiv3input3 = document.createElement("input"), 
                atkMagBoxtextarea = document.createElement("textarea"),
                atkMagBoxp2 = document.createElement("p"),
            equBox = document.createElement("div"),
                equBoxdiv1 = document.createElement("div"),
                    equBoxdiv1p = document.createElement("p"),
                    equBoxdiv1input = document.createElement("input"),
                equBoxdiv2 = document.createElement("div"),
                    equBoxdiv2p = document.createElement("p"),
                    equBoxdiv2input = document.createElement("input"),
                equBoxdiv3 = document.createElement("div"),
                    equBoxdiv3p = document.createElement("p"),
                    equBoxdiv3input = document.createElement("input"),
                equBoxdiv4 = document.createElement("div"),
                    equBoxdiv4p = document.createElement("p"),
                    equBoxdiv4input = document.createElement("input"),
                equBoxdiv5 = document.createElement("div"),
                    equBoxdiv5p = document.createElement("p"),
                    equBoxdiv5input = document.createElement("input"),
                equBoxtextarea = document.createElement("textarea"),
                equBoxp = document.createElement("p"),
            traitsBox = document.createElement("div"),
                traitsBoxtextarea = document.createElement("textarea"),
                traitsBoxp = document.createElement("p");

    /* 생성 하는 단 */

    jsChartSet.appendChild(chartBox);   
        chartBox.appendChild(chartControl);
        chartBox.appendChild(chartContainer);
            chartContainer.appendChild(main_text);
            chartContainer.appendChild(main_title);
                main_title.appendChild(main_titleP1);
                main_title.appendChild(main_titleP2);
            chartContainer.appendChild(setBox1);
                setBox1.appendChild(setBox1p1);
                    setBox1p1.appendChild(setBox1p1span1);
                    setBox1p1.appendChild(setBox1p1span2);
                setBox1.appendChild(setBox1p2);
            chartContainer.appendChild(setBox2);
                setBox2.appendChild(setBox2p1);
                    setBox2p1.appendChild(setBox2p1span);
                setBox2.appendChild(setBox2p2);
            chartContainer.appendChild(setBox3);
                setBox3.appendChild(setBox3p1);
                    setBox3p1.appendChild(setBox3p1span);
                setBox3.appendChild(setBox3p2);
            chartContainer.appendChild(setBox4);
                setBox4.appendChild(setBox4p1);
                    setBox4p1.appendChild(setBox4p1span);
                setBox4.appendChild(setBox4p2);
            chartContainer.appendChild(stateBox1);
                stateBox1.appendChild(stateBox1p1);
                stateBox1.appendChild(stateBox1p2);
                stateBox1.appendChild(stateBox1p3);
            chartContainer.appendChild(stateBox2);
                stateBox2.appendChild(stateBox2p1);
                stateBox2.appendChild(stateBox2p2);
                stateBox2.appendChild(stateBox2p3);
            chartContainer.appendChild(stateBox3);
                stateBox3.appendChild(stateBox3p1);
                stateBox3.appendChild(stateBox3p2);
                stateBox3.appendChild(stateBox3p3);
            chartContainer.appendChild(stateBox4);
                stateBox4.appendChild(stateBox4p1);
                stateBox4.appendChild(stateBox4p2);
                stateBox4.appendChild(stateBox4p3);
            chartContainer.appendChild(stateBox5);
                stateBox5.appendChild(stateBox5p1);
                stateBox5.appendChild(stateBox5p2);
                stateBox5.appendChild(stateBox5p3);
            chartContainer.appendChild(stateBox6);
                stateBox6.appendChild(stateBox6p1);
                stateBox6.appendChild(stateBox6p2);
                stateBox6.appendChild(stateBox6p3);
            chartContainer.appendChild(GuardBox);
                GuardBox.appendChild(GuardBoxp1);
                GuardBox.appendChild(GuardBoxp2);
            chartContainer.appendChild(inttBox);
                inttBox.appendChild(inttBoxinput);
                inttBox.appendChild(inttBoxp);
            chartContainer.appendChild(speedBox);
                speedBox.appendChild(speedBoxp1);
                speedBox.appendChild(speedBoxp2);
            chartContainer.appendChild(insPoint);
                insPoint.appendChild(insPointp1);
                insPoint.appendChild(insPointp2);
            chartContainer.appendChild(propBonusPoint);
                propBonusPoint.appendChild(propBonusPointp1);
                propBonusPoint.appendChild(propBonusPointp2);
            chartContainer.appendChild(myTextArea1);
                myTextArea1.appendChild(myTextArea1textarea);
                myTextArea1.appendChild(myTextArea1p);
            chartContainer.appendChild(myTextArea2);
                myTextArea2.appendChild(myTextArea2textarea);
                myTextArea2.appendChild(myTextArea2p);
            chartContainer.appendChild(myTextArea3);
                myTextArea3.appendChild(myTextArea3textarea);
                myTextArea3.appendChild(myTextArea3p);
            chartContainer.appendChild(myTextArea4);
                myTextArea4.appendChild(myTextArea4textarea);
                myTextArea4.appendChild(myTextArea4p);
            chartContainer.appendChild(hitPointsBox);
                hitPointsBox.appendChild(hitPointsBoxp1);
                hitPointsBox.appendChild(hitPointsBoxp2);
                hitPointsBox.appendChild(hitPointsBoxp3);
            chartContainer.appendChild(hitPointsBox1);
                hitPointsBox1.appendChild(hitPointsBox1p1);
                hitPointsBox1.appendChild(hitPointsBox1p2);
                hitPointsBox1.appendChild(hitPointsBox1p3);
            chartContainer.appendChild(hitDiceBox);
                hitDiceBox.appendChild(hitDiceBoxp1);
                hitDiceBox.appendChild(hitDiceBoxp2);
                hitDiceBox.appendChild(hitDiceBoxp3);
            chartContainer.appendChild(deathBox);
                deathBox.appendChild(deathBoxform);
                    deathBoxform.appendChild(deathBoxformdiv1);
                        deathBoxformdiv1.appendChild(deathBoxformdiv1p);
                        deathBoxformdiv1.appendChild(deathBoxformdiv1input);
                    deathBoxform.appendChild(deathBoxformdiv2);
                        deathBoxformdiv2.appendChild(deathBoxformdiv2p);
                        deathBoxformdiv2.appendChild(deathBoxformdiv2input);
                    deathBoxform.appendChild(deathBoxformdiv3);
                        deathBoxformdiv3.appendChild(deathBoxformdiv3p);
            chartContainer.appendChild(savincBox);
                savincBox.appendChild(savincBoxdiv1);
                    savincBoxdiv1.appendChild(savincBoxdiv1input);
                    savincBoxdiv1.appendChild(savincBoxdiv1p1);
                    savincBoxdiv1.appendChild(savincBoxdiv1p2);
                    savincBoxdiv1.appendChild(savincBoxdiv1p3);
                savincBox.appendChild(savincBoxdiv2);
                    savincBoxdiv2.appendChild(savincBoxdiv2input);
                    savincBoxdiv2.appendChild(savincBoxdiv2p1);
                    savincBoxdiv2.appendChild(savincBoxdiv2p2);
                    savincBoxdiv2.appendChild(savincBoxdiv2p3);
                savincBox.appendChild(savincBoxdiv3);
                    savincBoxdiv3.appendChild(savincBoxdiv3input);
                    savincBoxdiv3.appendChild(savincBoxdiv3p1);
                    savincBoxdiv3.appendChild(savincBoxdiv3p2);
                    savincBoxdiv3.appendChild(savincBoxdiv3p3);
                savincBox.appendChild(savincBoxdiv4);
                    savincBoxdiv4.appendChild(savincBoxdiv4input);
                    savincBoxdiv4.appendChild(savincBoxdiv4p1);
                    savincBoxdiv4.appendChild(savincBoxdiv4p2);
                    savincBoxdiv4.appendChild(savincBoxdiv4p3);
                savincBox.appendChild(savincBoxdiv5);
                    savincBoxdiv5.appendChild(savincBoxdiv5input);
                    savincBoxdiv5.appendChild(savincBoxdiv5p1);
                    savincBoxdiv5.appendChild(savincBoxdiv5p2);
                    savincBoxdiv5.appendChild(savincBoxdiv5p3);
                savincBox.appendChild(savincBoxdiv6);
                    savincBoxdiv6.appendChild(savincBoxdiv6input);
                    savincBoxdiv6.appendChild(savincBoxdiv6p1);
                    savincBoxdiv6.appendChild(savincBoxdiv6p2);
                    savincBoxdiv6.appendChild(savincBoxdiv6p3);
                savincBox.appendChild(savincBoxp);
            chartContainer.appendChild(skillBox);
                skillBox.appendChild(skillBoxdiv1);
                    skillBoxdiv1.appendChild(skillBoxdiv1input);
                    skillBoxdiv1.appendChild(skillBoxdiv1p1);
                    skillBoxdiv1.appendChild(skillBoxdiv1p2);
                skillBox.appendChild(skillBoxdiv2);
                    skillBoxdiv2.appendChild(skillBoxdiv2input);
                    skillBoxdiv2.appendChild(skillBoxdiv2p1);
                    skillBoxdiv2.appendChild(skillBoxdiv2p2);
                skillBox.appendChild(skillBoxdiv3);
                    skillBoxdiv3.appendChild(skillBoxdiv3input);
                    skillBoxdiv3.appendChild(skillBoxdiv3p1);
                    skillBoxdiv3.appendChild(skillBoxdiv3p2);
                skillBox.appendChild(skillBoxdiv4);
                    skillBoxdiv4.appendChild(skillBoxdiv4input);
                    skillBoxdiv4.appendChild(skillBoxdiv4p1);
                    skillBoxdiv4.appendChild(skillBoxdiv4p2);
                skillBox.appendChild(skillBoxdiv5);
                    skillBoxdiv5.appendChild(skillBoxdiv5input);
                    skillBoxdiv5.appendChild(skillBoxdiv5p1);
                    skillBoxdiv5.appendChild(skillBoxdiv5p2);
                skillBox.appendChild(skillBoxdiv6);
                    skillBoxdiv6.appendChild(skillBoxdiv6input);
                    skillBoxdiv6.appendChild(skillBoxdiv6p1);
                    skillBoxdiv6.appendChild(skillBoxdiv6p2);
                skillBox.appendChild(skillBoxdiv7);
                    skillBoxdiv7.appendChild(skillBoxdiv7input);
                    skillBoxdiv7.appendChild(skillBoxdiv7p1);
                    skillBoxdiv7.appendChild(skillBoxdiv7p2);
                skillBox.appendChild(skillBoxdiv8);
                    skillBoxdiv8.appendChild(skillBoxdiv8input);
                    skillBoxdiv8.appendChild(skillBoxdiv8p1);
                    skillBoxdiv8.appendChild(skillBoxdiv8p2);
                skillBox.appendChild(skillBoxdiv9);
                    skillBoxdiv9.appendChild(skillBoxdiv9input);
                    skillBoxdiv9.appendChild(skillBoxdiv9p1);
                    skillBoxdiv9.appendChild(skillBoxdiv9p2);
                skillBox.appendChild(skillBoxdiv10);
                    skillBoxdiv10.appendChild(skillBoxdiv10input);
                    skillBoxdiv10.appendChild(skillBoxdiv10p1);
                    skillBoxdiv10.appendChild(skillBoxdiv10p2);
                skillBox.appendChild(skillBoxdiv11);
                    skillBoxdiv11.appendChild(skillBoxdiv11input);
                    skillBoxdiv11.appendChild(skillBoxdiv11p1);
                    skillBoxdiv11.appendChild(skillBoxdiv11p2);
                skillBox.appendChild(skillBoxdiv12);
                    skillBoxdiv12.appendChild(skillBoxdiv12input);
                    skillBoxdiv12.appendChild(skillBoxdiv12p1);
                    skillBoxdiv12.appendChild(skillBoxdiv12p2);
                skillBox.appendChild(skillBoxdiv13);
                    skillBoxdiv13.appendChild(skillBoxdiv13input);
                    skillBoxdiv13.appendChild(skillBoxdiv13p1);
                    skillBoxdiv13.appendChild(skillBoxdiv13p2);
                skillBox.appendChild(skillBoxdiv14);
                    skillBoxdiv14.appendChild(skillBoxdiv14input);
                    skillBoxdiv14.appendChild(skillBoxdiv14p1);
                    skillBoxdiv14.appendChild(skillBoxdiv14p2);
                skillBox.appendChild(skillBoxdiv15);
                    skillBoxdiv15.appendChild(skillBoxdiv15input);
                    skillBoxdiv15.appendChild(skillBoxdiv15p1);
                    skillBoxdiv15.appendChild(skillBoxdiv15p2);
                skillBox.appendChild(skillBoxdiv16);
                    skillBoxdiv16.appendChild(skillBoxdiv16input);
                    skillBoxdiv16.appendChild(skillBoxdiv16p1);
                    skillBoxdiv16.appendChild(skillBoxdiv16p2);
                skillBox.appendChild(skillBoxdiv17);
                    skillBoxdiv17.appendChild(skillBoxdiv17input);
                    skillBoxdiv17.appendChild(skillBoxdiv17p1);
                    skillBoxdiv17.appendChild(skillBoxdiv17p2);
                skillBox.appendChild(skillBoxdiv18);
                    skillBoxdiv18.appendChild(skillBoxdiv18input);
                    skillBoxdiv18.appendChild(skillBoxdiv18p1);
                    skillBoxdiv18.appendChild(skillBoxdiv18p2);
                skillBox.appendChild(skillBoxp);
            chartContainer.appendChild(passiveWisdom);
                passiveWisdom.appendChild(passiveWisdomp1);
                passiveWisdom.appendChild(passiveWisdomp2);
            chartContainer.appendChild(otherPro_Lang);
                otherPro_Lang.appendChild(otherPro_Langp1);
                    otherPro_Langp1.appendChild(otherPro_Langp1span);
                otherPro_Lang.appendChild(otherPro_Langp2);
                    otherPro_Langp2.appendChild(otherPro_Langp2span);
                otherPro_Lang.appendChild(otherPro_Langp3);
                    otherPro_Langp3.appendChild(otherPro_Langp3span);
                otherPro_Lang.appendChild(otherPro_Langp4);
                    otherPro_Langp4.appendChild(otherPro_Langp4span);
                otherPro_Lang.appendChild(otherPro_Langp5);
            chartContainer.appendChild(atkMagBox);
                atkMagBox.appendChild(atkMagBoxp1);
                    atkMagBoxp1.appendChild(atkMagBoxp1span1);
                    atkMagBoxp1.appendChild(atkMagBoxp1span2);
                    atkMagBoxp1.appendChild(atkMagBoxp1span3);
                atkMagBox.appendChild(atkMagBoxdiv1);
                    atkMagBoxdiv1.appendChild(atkMagBoxdiv1input1);
                    atkMagBoxdiv1.appendChild(atkMagBoxdiv1input2);
                    atkMagBoxdiv1.appendChild(atkMagBoxdiv1input3);
                atkMagBox.appendChild(atkMagBoxdiv2);
                    atkMagBoxdiv2.appendChild(atkMagBoxdiv2input1);
                    atkMagBoxdiv2.appendChild(atkMagBoxdiv2input2);
                    atkMagBoxdiv2.appendChild(atkMagBoxdiv2input3);
                atkMagBox.appendChild(atkMagBoxdiv3);
                    atkMagBoxdiv3.appendChild(atkMagBoxdiv3input1);
                    atkMagBoxdiv3.appendChild(atkMagBoxdiv3input2);
                    atkMagBoxdiv3.appendChild(atkMagBoxdiv3input3);
                atkMagBox.appendChild(atkMagBoxtextarea);
                atkMagBox.appendChild(atkMagBoxp2);
            chartContainer.appendChild(equBox);
                equBox.appendChild(equBoxdiv1);
                    equBoxdiv1.appendChild(equBoxdiv1p);
                    equBoxdiv1.appendChild(equBoxdiv1input);
                equBox.appendChild(equBoxdiv2);
                    equBoxdiv2.appendChild(equBoxdiv2p);
                    equBoxdiv2.appendChild(equBoxdiv2input);
                equBox.appendChild(equBoxdiv3);
                    equBoxdiv3.appendChild(equBoxdiv3p);
                    equBoxdiv3.appendChild(equBoxdiv3input);
                equBox.appendChild(equBoxdiv4);
                    equBoxdiv4.appendChild(equBoxdiv4p);
                    equBoxdiv4.appendChild(equBoxdiv4input);
                equBox.appendChild(equBoxdiv5);
                    equBoxdiv5.appendChild(equBoxdiv5p);
                    equBoxdiv5.appendChild(equBoxdiv5input);
                equBox.appendChild(equBoxtextarea);
                equBox.appendChild(equBoxp);
            chartContainer.appendChild(traitsBox);
                traitsBox.appendChild(traitsBoxtextarea);
                traitsBox.appendChild(traitsBoxp);

    /* 값 입력 하는 단 */

    chartBox.className = `chartBox chartBox${num}`;
        chartControl.className = "chartControl";
        chartControl.innerText = `${num+1}번 시트`;
        chartContainer.className = "chartContainer";
            main_text.className = `main_text`;
            main_text.innerText = `${myName}`;
            main_title.className = "main_title";
                main_titleP1.innerText = "캐릭터 이름";
                main_titleP2.innerText = "CHARACTER NAME";
                main_titleP2.className = "subtext";
            setBox1.className = "setBox setBox1";
                setBox1p1span1.className = "jsJobText";
                setBox1p1span1.innerText = `${myJob} `;
                setBox1p1span2.className = "jsLevelText";
                setBox1p1span2.innerText = `${myLevel} 레벨`;
                setBox1p2.className = "subtext";
                setBox1p2.innerText = "클래스 & 레벨";
            setBox2.className = "setBox setBox2";
                setBox2p1span.className = "jsNameText";
                setBox2p1span.innerText = `${myName}`;
                setBox2p2.className = "subtext";
                setBox2p2.innerText = "플레이어 이름";
            setBox3.className = "setBox setBox3";
                setBox3p1span.className = "jsRaceText";
                setBox3p1span.innerText = `${myEntp}`;
                setBox3p2.className = "subtext";
                setBox3p2.innerText = "종족";
            setBox4.className = "setBox setBox4";
                setBox4p1span.className = "jsExpText";
                setBox4p1span.innerText = `${leadLoadGameSet[num].exp}`;
                setBox4p2.className = "subtext";
                setBox4p2.innerText = "경험치";
            stateBox1.className = "state stateBox1";
                stateBox1p1.innerText = "힘";
                stateBox1p2.className = "jsPlusStr";
                stateBox1p2.innerText = `${fixState(myStr),fixstateStr}`; // 힘 수정치
                stateBox1p3.className = "jsStrText";
                stateBox1p3.innerText = `${myStr}`;
            stateBox2.className = "state stateBox2";
                stateBox2p1.innerText = "민첩";
                stateBox2p2.className = "jsPlusDex";
                stateBox2p2.innerText = `${fixState(myDex),fixstateDex}`; // 민첩 수정치
                stateBox2p3.className = "jsDexText";
                stateBox2p3.innerText = `${myDex}`;
            stateBox3.className = "state stateBox3";
                stateBox3p1.innerText = "건강";
                stateBox3p2.className = "jsPlusCon";
                stateBox3p2.innerText = `${fixState(myCon),fixstateCon}`; // 건강 수정치
                stateBox3p3.className = "jsConText";
                stateBox3p3.innerText = `${myCon}`;
            stateBox4.className = "state stateBox4";
                stateBox4p1.innerText = "지능";
                stateBox4p2.className = "jsPlusInt";
                stateBox4p2.innerText = `${fixState(myInt),fixstateInt}`; // 지능 수정치
                stateBox4p3.className = "jsIntText";
                stateBox4p3.innerText = `${myInt}`;
            stateBox5.className = "state stateBox5";
                stateBox5p1.innerText = "지혜";
                stateBox5p2.className = "jsPlusWis";
                stateBox5p2.innerText = `${fixState(myWis),fixstateWis}`; // 지혜 수정치
                stateBox5p3.className = "jsWisText";
                stateBox5p3.innerText = `${myWis}`;
            stateBox6.className = "state stateBox6";
                stateBox6p1.innerText = "매력";
                stateBox6p2.className = "jsPlusCha";
                stateBox6p2.innerText = `${fixState(myCha),fixstateCha}`; // 매력 수정치
                stateBox6p3.className = "jsChaText";
                stateBox6p3.innerText = `${myCha}`;
            GuardBox.className = "subState GuardBox";
                GuardBoxp1.innerText = `${10}`;   // 10 + 갑옷 보너스 + 방패 보너스 + 민첩 수정치 + 크기 수정치
                GuardBoxp2.innerText = "방어도";
            inttBox.className = "subState inttBox";
                inttBoxinput.type = "text";
                inttBoxinput.value = `${mySpeed}`; // 순서
                inttBoxp.innerText = "우선권";
            speedBox.className = "subState speedBox"
                speedBoxp1.innerText = `${movement}`;
                speedBoxp2.innerText = "이동속도";
            insPoint.className = "insPoint";
                insPointp1.innerText = `${myInspiration}`;
                insPointp2.innerText = "고양감";
            propBonusPoint.className = "propBonusPoint";
                propBonusPointp1.className = "jspropBonusPoint";
                propBonusPointp1.innerText = `+${proficiency}`;
                propBonusPointp2.innerText = "능숙도 보너스";
            myTextArea1.className = "textareaBox myTextArea1";
                myTextArea1textarea.className = "textarea";
                myTextArea1textarea.innerText = "입력해주세요";
                myTextArea1p.innerText = "성격 특성";
            myTextArea2.className = "textareaBox myTextArea2";
                myTextArea2textarea.className = "textarea";
                myTextArea2textarea.innerText = "입력해주세요";
                myTextArea2p.innerText = "이상";
            myTextArea3.className = "textareaBox myTextArea3";
                myTextArea3textarea.className = "textarea";
                myTextArea3textarea.innerText = "입력해주세요";
                myTextArea3p.innerText = "유대";
            myTextArea4.className = "textareaBox myTextArea4";
                myTextArea4textarea.className = "textarea";
                myTextArea4textarea.innerText = "입력해주세요";
                myTextArea4p.innerText = "결점";
            hitPointsBox.className = "hitPointsBox";
                hitPointsBoxp1.className = "subtext";
                hitPointsBoxp1.innerText = `최대 히트 포인트 : ${myjsMaxHitPoint}`;
                hitPointsBoxp2.className = "jsNowHitPoint";
                hitPointsBoxp2.innerText = `${myNowHitPoint}`;
                hitPointsBoxp3.innerText = "현재 히트 포인트 CURRENT POINTS";
            hitPointsBox1.className = "hitPointsBox1";
                hitPointsBox1p2.className = "jsEmpHitPoint";
                hitPointsBox1p2.innerText = `${mySubHitPoint}`;
                hitPointsBox1p3.innerText = "임시 히트 포인트"
            hitDiceBox.className = "hitDiceBox";
                hitDiceBoxp1.className = "subtext";
                hitDiceBoxp1.innerText = `Total : ${myHitDice}`;
                hitDiceBoxp2.className = "jsHitDice";
                hitDiceBoxp2.innerText = `${myHitDice}`;
                hitDiceBoxp3.innerText = "히트 다이스";
            deathBox.className = "deathBox";
                deathBoxformdiv1p.innerText = "성공";
                deathBoxformdiv1input.type = "range";
                deathBoxformdiv1input.value = 0;
                deathBoxformdiv1input.className = "death_Success";
                deathBoxformdiv1input.min = 1;
                deathBoxformdiv1input.max = 3;
                deathBoxformdiv2p.innerText = "실패";
                deathBoxformdiv2input.type = "range";
                deathBoxformdiv2input.value = 0;
                deathBoxformdiv2input.className = "death_Failure";
                deathBoxformdiv2input.min = 1;
                deathBoxformdiv2input.max = 3;
                deathBoxformdiv3p.innerText = "죽음 내성";
            savincBoxdiv1.className = "savinc savincStr";   //  내성 근력
                savincBoxdiv1input.type = "checkbox";
                savincBoxdiv1p1.innerText = `${fixState(myStr),fixstateStr}`;
                if(myJob === "파이터" || myJob === "바바리안" || myJob === "레인저")  {
                    savincBoxdiv1p1.innerText = `${savincStateStr}`;
                    savincBoxdiv1input.checked = true;
                }
                savincBoxdiv1p2.innerText = "힘";
                savincBoxdiv1p3.innerText = "STR";
            savincBoxdiv2.className = "savinc savincDex";   //  내성 민첩
                savincBoxdiv2input.type = "checkbox";
                savincBoxdiv2p1.innerText = `${fixState(myDex),fixstateDex}`;
                if(myJob === "로그" || myJob === "바드" || myJob === "레인저" || myJob === "알케미스트")  {
                    savincBoxdiv2p1.innerText = `${savincStateDex}`;
                    savincBoxdiv2input.checked = true;
                }
                savincBoxdiv2p2.innerText = "민첩";
                savincBoxdiv2p3.innerText = "DEX";
            savincBoxdiv3.className = "savinc savincCon";   // 내성 건강
                savincBoxdiv3input.type = "checkbox";
                savincBoxdiv3p1.innerText = `${fixState(myCon),fixstateCon}`;
                if(myJob === "파이터" || myJob === "바바리안" || myJob === "소서러" || myJob === "아티피서" || myJob === "알케미스트")  {
                    savincBoxdiv3p1.innerText = `${savincStateCon}`;
                    savincBoxdiv3input.checked = true;
                }
                savincBoxdiv3p2.innerText = "건강";
                savincBoxdiv3p3.innerText = "CON";
            savincBoxdiv4.className = "savinc savincInt";   // 내성 지능
                savincBoxdiv4input.type = "checkbox";
                savincBoxdiv4p1.innerText = `${fixState(myInt),fixstateInt}`;
                if(myJob === "로그" || myJob === "위저드" || myJob === "드루이드" || myJob === "아티피서")  {
                    savincBoxdiv4p1.innerText = `${savincStateInt}`;
                    savincBoxdiv4input.checked = true;
                }
                savincBoxdiv4p2.innerText = "지능";
                savincBoxdiv4p3.innerText = "INT";
            savincBoxdiv5.className = "savinc savincWis";   // 내성 지혜
                savincBoxdiv5input.type = "checkbox";
                savincBoxdiv5p1.innerText = `${fixState(myWis),fixstateWis}`;
                if(myJob === "팔라딘" || myJob === "클레릭" || myJob === "위저드" || myJob === "워락" || myJob === "드루이드")  {
                    savincBoxdiv5p1.innerText = `${savincStateWis}`;
                    savincBoxdiv5input.checked = true;
                }
                savincBoxdiv5p2.innerText = "지혜";
                savincBoxdiv5p3.innerText = "WIS";
            savincBoxdiv6.className = "savinc savincCha";   // 내성 매력
                savincBoxdiv6input.type = "checkbox";
                savincBoxdiv6p1.innerText = `${fixState(myCha),fixstateCha}`;
                if(myJob === "팔라딘" || myJob === "클레릭" || myJob === "바드" || myJob === "소서러" || myJob === "워락")  {
                    savincBoxdiv6p1.innerText = `${savincStateCha}`;
                    savincBoxdiv6input.checked = true;
                }
                savincBoxdiv6p2.innerText = "매력";
                savincBoxdiv6p3.innerText = "CHA";
            savincBoxp.className = "savincText";
            savincBoxp.innerText = "내성 굴림";


            skillBoxdiv1.className = "skill skill1";
                skillBoxdiv1input.type = "checkbox";
                if(myJob === "팔라딘" || myJob === "바바리안" || myJob === "클레릭" || myJob === "레인저" || myJob === "아티피서" || myJob === "위저드" || myJob === "소서러" || myJob === "워락" || myJob === "드루이드")  {   // 곡예/유연을 사용 못하는 클래스
                    skillBoxdiv1input.disabled = true;
                }
                skillBoxdiv1p1.innerText = `${fixState(myDex),fixstateDex}`;
                if(myJob === "로그" || myJob === "바드" || myJob === "레인저" || myJob === "알케미스트")  {
                    skillBoxdiv1p1.innerText = `${savincStateDex}`;
                }
                skillBoxdiv1p2.innerText = "곡예/유연"; //  민첩 굴림

            skillBoxdiv2.className = "skill skill2";
                skillBoxdiv2input.type = "checkbox";
                if(myJob === "팔라딘" || myJob === "클레릭" || myJob === "뭉크" || myJob === "로그" || myJob === "아티피서" || myJob === "알케미스트" || myJob === "위저드" || myJob === "소서러" || myJob === "워락")  {   // 동물 조련을 사용 못하는 클래스
                    skillBoxdiv2input.disabled = true;
                }
                skillBoxdiv2p1.innerText = `${fixState(myWis),fixstateWis}`;
                if(myJob === "팔라딘" || myJob === "클레릭" || myJob === "위저드" || myJob === "워락" || myJob === "드루이드")  {
                    skillBoxdiv2p1.innerText = `${savincStateWis}`;
                }
                skillBoxdiv2p2.innerText = "동물 조련"; // 지혜 굴림

            skillBoxdiv3.className = "skill skill3";
                skillBoxdiv3input.type = "checkbox";
                if(myJob === "파이터" || myJob === "팔라딘" || myJob === "바바리안" || myJob === "클레릭" || myJob === "뭉크" || myJob === "알케미스트" || myJob === "로그" || myJob === "레인저")  { // 마법 지식을 사용 못하는 클래스
                    skillBoxdiv3input.disabled = true;
                }
                skillBoxdiv3p1.innerText = `${fixState(myInt),fixstateInt}`;
                if(myJob === "로그" || myJob === "위저드" || myJob === "드루이드" || myJob === "아티피서")  {
                    skillBoxdiv3p1.innerText = `${savincStateInt}`;
                }
                skillBoxdiv3p2.innerText = "마법 지식"; // 지능 굴림
                
            skillBoxdiv4.className = "skill skill4";
                skillBoxdiv4input.type = "checkbox";
                if(myJob === "클레릭" || myJob === "아티피서" || myJob === "위저드" || myJob === "소서러" || myJob === "알케미스트" || myJob === "워락" || myJob === "드루이드")  {   // 운동을 사용 못하는 클래스
                    skillBoxdiv2input.disabled = true;
                }
                skillBoxdiv4p1.innerText = `${fixState(myStr),fixstateStr}`;
                if(myJob === "파이터" || myJob === "바바리안" || myJob === "레인저")  {
                    skillBoxdiv4p1.innerText = `${fixState(myStr),savincStateStr}`;
                }
                skillBoxdiv4p2.innerText = "운동";  // 근력 굴림

            skillBoxdiv5.className = "skill skill5";
                skillBoxdiv5input.type = "checkbox";
                if(myJob === "파이터" || myJob === "팔라딘" || myJob === "바바리안" || myJob === "알케미스트" || myJob === "클레릭" || myJob === "뭉크" || myJob === "레인저" || myJob === "아티피서" || myJob === "위저드" || myJob === "드루이드")  { // 속임수를 사용 못하는 클래스
                    skillBoxdiv5input.disabled = true;
                }
                skillBoxdiv5p1.innerText = `${fixState(myCha),fixstateCha}`;
                if(myJob === "팔라딘" || myJob === "클레릭" || myJob === "바드" || myJob === "소서러" || myJob === "워락")  {
                    skillBoxdiv5p1.innerText = `${savincStateCha}`;
                }
                skillBoxdiv5p2.innerText = "속임수";  // 매력 굴림

            skillBoxdiv6.className = "skill skill6";
                skillBoxdiv6input.type = "checkbox";
                if(myJob === "팔라딘" || myJob === "바바리안" || myJob === "로그" || myJob === "알케미스트" || myJob === "소서러" || myJob === "드루이드")  {   // 역사 지식을 사용 못하는 클래스
                    skillBoxdiv6input.disabled = true;
                }
                skillBoxdiv6p1.innerText = `${fixState(myInt),fixstateInt}`;
                if(myJob === "로그" || myJob === "위저드" || myJob === "드루이드" || myJob === "아티피서" || myJob === "레인저")  {
                    skillBoxdiv6p1.innerText = `${savincStateInt}`;
                }
                skillBoxdiv6p2.innerText = "역사 지식"; // 지능 굴림

            skillBoxdiv7.className = "skill skill7";
                skillBoxdiv7input.type = "checkbox";
                if(myJob === "바바리안" || myJob === "워락")  {   // 통찰력을 사용 못하는 클래스
                    skillBoxdiv7input.disabled = true;
                }
                skillBoxdiv7p1.innerText = `${fixState(myWis),fixstateWis}`;
                if(myJob === "팔라딘" || myJob === "클레릭" || myJob === "아티피서" || myJob === "위저드" || myJob === "워락" || myJob === "드루이드")  {
                    skillBoxdiv7p1.innerText = `${savincStateWis}`;
                }
                skillBoxdiv7p2.innerText = "통찰력";    // 지혜 굴림

            skillBoxdiv8.className = "skill skill8";
                skillBoxdiv8input.type = "checkbox";
                if(myJob === "클레릭" || myJob === "뭉크" || myJob === "레인저" || myJob === "알케미스트" || myJob === "아티피서" || myJob === "위저드" || myJob === "드루이드")  {   // 위협을 사용 못하는 클래스
                    skillBoxdiv8input.disabled = true;
                }
                skillBoxdiv8p1.innerText = `${fixState(myCha),fixstateCha}`;
                if(myJob === "팔라딘" || myJob === "클레릭" || myJob === "바드" || myJob === "소서러" || myJob === "워락")  {
                    skillBoxdiv8p1.innerText = `${savincStateCha}`;
                }
                skillBoxdiv8p2.innerText = "위협";  // 매력 굴림

            skillBoxdiv9.className = "skill skill9";
                skillBoxdiv9input.type = "checkbox";
                if(myJob === "파이터" || myJob === "팔라딘" || myJob === "바바리안" || myJob === "클레릭" || myJob === "뭉크" || myJob === "소서러" || myJob === "드루이드")  { // 조사를 사용 못하는 클래스
                    skillBoxdiv9input.disabled = true;
                }
                skillBoxdiv9p1.innerText = `${fixState(myInt),fixstateInt}`;
                if(myJob === "로그" || myJob === "위저드" || myJob === "드루이드" || myJob === "아티피서")  {
                    skillBoxdiv9p1.innerText = `${savincStateInt}`;
                }
                skillBoxdiv9p2.innerText = "조사";  //  지능 굴림

            skillBoxdiv10.className = "skill skill10";
                skillBoxdiv10input.type = "checkbox";
                if(myJob === "파이터" || myJob === "바바리안" || myJob === "뭉크" || myJob === "로그" || myJob === "레인저" || myJob === "소서러" || myJob === "워락")  {   // 의학을 사용 못하는 클래스
                    skillBoxdiv10input.disabled = true;
                }
                skillBoxdiv10p1.innerText = `${fixState(myWis),fixstateWis}`;
                if(myJob === "팔라딘" || myJob === "클레릭" || myJob === "위저드" || myJob === "워락" || myJob === "드루이드")  {
                    skillBoxdiv10p1.innerText = `${savincStateWis}`;
                }
                skillBoxdiv10p2.innerText = "의학"; // 지혜 굴림

            skillBoxdiv11.className = "skill skill11";
                skillBoxdiv11input.type = "checkbox";
                if(myJob === "파이터" || myJob === "팔라딘" || myJob === "클레릭" || myJob === "뭉크" || myJob === "로그" || myJob === "레인저" || myJob === "아티피서" || myJob === "위저드" || myJob === "소서러")  { // 자연지식을 사용 못하는 클래스
                    skillBoxdiv11input.disabled = true;
                }
                skillBoxdiv11p1.innerText = `${fixState(myInt),fixstateInt}`;
                if(myJob === "로그" || myJob === "위저드" || myJob === "드루이드" || myJob === "아티피서")  {
                    skillBoxdiv11p1.innerText = `${savincStateInt}`;
                }
                skillBoxdiv11p2.innerText = "자연 지식"; // 지능 굴림

            skillBoxdiv12.className = "skill skill12";
                skillBoxdiv12input.type = "checkbox";
                if(myJob === "팔라딘" || myJob === "팔라딘" || myJob === "클레릭" || myJob === "뭉크" || myJob === "아티피서" || myJob === "위저드" || myJob === "소서러" || myJob === "워락")  {   // 감지를 사용 못하는 클래스
                    skillBoxdiv12input.disabled = true;
                }
                skillBoxdiv12p1.innerText = `${fixState(myWis),fixstateWis}`;
                if(myJob === "팔라딘" || myJob === "클레릭" || myJob === "위저드" || myJob === "워락" || myJob === "드루이드")  {
                    skillBoxdiv12p1.innerText = `${savincStateWis}`;
                }
                skillBoxdiv12p2.innerText = "감지"; // 지헤 굴림

            skillBoxdiv13.className = "skill skill13";
                skillBoxdiv13input.type = "checkbox";
                if(myJob === "파이터" || myJob === "팔라딘" || myJob === "바바리안" || myJob === "알케미스트" || myJob === "클레릭" || myJob === "뭉크" || myJob === "레인저" || myJob === "아티피서" || myJob === "위저드" || myJob === "소서러" || myJob === "워락" || myJob === "드루이드")  {   // 공연/언행을 사용 못하는 클래스
                    skillBoxdiv13input.disabled = true;
                }
                skillBoxdiv13p1.innerText = `${fixState(myCha),fixstateCha}`;
                if(myJob === "팔라딘" || myJob === "클레릭" || myJob === "바드" || myJob === "소서러" || myJob === "워락")  {
                    skillBoxdiv13p1.innerText = `${savincStateCha}`;
                }
                skillBoxdiv13p2.innerText = "공연/언행"; // 매력 굴림

            skillBoxdiv14.className = "skill skill14";
                skillBoxdiv14input.type = "checkbox";
                if(myJob === "파이터" || myJob === "바바리안" || myJob === "뭉크" || myJob === "레인저" || myJob === "아티피서" || myJob === "위저드" || myJob === "워락" || myJob === "드루이드")  {   // 설득을 사용 못하는 클래스
                    skillBoxdiv14input.disabled = true;
                }
                skillBoxdiv14p1.innerText = `${fixState(myCha),fixstateCha}`;
                if(myJob === "팔라딘" || myJob === "클레릭" || myJob === "바드" || myJob === "소서러" || myJob === "워락")  {
                    skillBoxdiv14p1.innerText = `${savincStateCha}`;
                }
                skillBoxdiv14p2.innerText = "설득"; // 매력 굴림

            skillBoxdiv15.className = "skill skill15";
                skillBoxdiv15input.type = "checkbox";
                if(myJob === "파이터" || myJob === "바바리안" || myJob === "로그" || myJob === "레인저" || myJob === "워락" || myJob === "알케미스트")  {   // 종교지식을 사용 못하는 클래스
                    skillBoxdiv15input.disabled = true;
                }
                skillBoxdiv15p1.innerText = `${fixState(myInt),fixstateInt}`;
                if(myJob === "로그" || myJob === "위저드" || myJob === "드루이드" || myJob === "아티피서")  {
                    skillBoxdiv15p1.innerText = `${savincStateInt}`;
                }
                skillBoxdiv15p2.innerText = "종교 지식"; // 지능 굴림

            skillBoxdiv16.className = "skill skill16";
                skillBoxdiv16input.type = "checkbox";
                if(myJob === "파이터" || myJob === "팔라딘" || myJob === "바바리안" || myJob === "클레릭" || myJob === "뭉크" || myJob === "레인저" || myJob === "알케미스트" || myJob === "아티피서" || myJob === "위저드" || myJob === "소서러" || myJob === "워락" || myJob === "드루이드")  { // 소매치기를 사용 못하는 클래스
                    skillBoxdiv16input.disabled = true;
                }
                skillBoxdiv16p1.innerText = `${fixState(myDex),fixstateDex}`;
                if(myJob === "로그" || myJob === "바드" || myJob === "레인저" || myJob === "알케미스트")  {
                    skillBoxdiv16p1.innerText = `${savincStateDex}`;
                }
                skillBoxdiv16p2.innerText = "소매치기"; // 민첩 굴림

            skillBoxdiv17.className = "skill skill17";
                skillBoxdiv17input.type = "checkbox";
                if(myJob === "파이터" || myJob === "팔라딘" || myJob === "바바리안" || myJob === "클레릭" || myJob === "알케미스트" || myJob === "아티피서" || myJob === "위저드" || myJob === "소서러" || myJob === "워락" || myJob === "드루이드")  { // 은신을 사용 못하는 클래스
                    skillBoxdiv17input.disabled = true;
                }
                skillBoxdiv17p1.innerText = `${fixState(myDex),savincStateDex}`;
                if(myJob === "로그" || myJob === "바드" || myJob === "레인저" || myJob === "알케미스트")  {
                    skillBoxdiv17p1.innerText = `${savincStateDex}`;
                }
                skillBoxdiv17p2.innerText = "은신"; // 민첩 굴림

            skillBoxdiv18.className = "skill skill18";
                skillBoxdiv18input.type = "checkbox";
                if(myJob === "팔라딘" || myJob === "클레릭" || myJob === "뭉크" || myJob === "로그" || myJob === "아티피서" || myJob === "위저드" || myJob === "소서러" || myJob === "워락")  {   // 생존을 사용 못하는 클래스
                    skillBoxdiv18input.disabled = true;
                }
                skillBoxdiv18p1.innerText = `${fixState(myWis),fixstateWis}`;
                if(myJob === "팔라딘" || myJob === "클레릭" || myJob === "위저드" || myJob === "워락" || myJob === "드루이드")  {
                    skillBoxdiv18p1.innerText = `${savincStateWis}`;
                }
                skillBoxdiv18p2.innerText = "생존"; // 지혜 굴림

            skillBoxp.className = "skillText";
            skillBoxp.innerText = "SKILL";

            passiveWisdom.className = "passiveWisdom";
                passiveWisdomp1.className = "jsPassiveWisdom";
                passiveWisdomp1.innerText = `${10+(fixState(myWis),Number(fixstateWis))}`;
                skillBoxdiv12input.addEventListener("change",function() {
                    if(skillBoxdiv12input.checked)  {
                        passiveWisdomp1.innerText = `${10+(fixState(myWis),Number(savincStateWis))}`;
                    }else   {
                        passiveWisdomp1.innerText = `${10+(fixState(myWis),Number(fixstateWis))}`;
                    }
                })
                passiveWisdomp2.innerText = "상시 지혜 (지각력)";

            otherPro_Lang.className = "otherPro_Lang";
                otherPro_Langp1.innerText = `갑옷 : ${otherPro_Langp1span.innerText = `중갑, 경갑, 평갑, 방패`}`;
                otherPro_Langp2.innerText = `무기 : ${otherPro_Langp1span.innerText = `중갑, 경갑, 평갑, 방패`}`;
                otherPro_Langp3.innerText = `도구 : ${otherPro_Langp1span.innerText = `중갑, 경갑, 평갑, 방패`}`;
                otherPro_Langp4.innerText = `언어 : ${otherPro_Langp1span.innerText = `중갑, 경갑, 평갑, 방패`}`;
                otherPro_Langp5.className = `otherPro_LangText`;
                otherPro_Langp5.innerText = "기타 능숙도 & 언어들";
                
}
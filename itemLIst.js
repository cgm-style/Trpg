//  무기 리스트
const WEAPON = {
    Antimatter_Rifle : {
        Name : "대물저격총",
        Damage : "6d8 괴사",
        Weight : "10 lbs",
        Properties : "탄약 (화기), (범위 120/360), 재장전, 양손",
        Notes : "Reload (2 shots)"
    },
    Bad_News : {
        Name : "나쁜 소식",
        Damage : "2d12 뚫기",
        Weight : "25 lbs",
        Properties : "양손, 재장전, 불발",
        Notes : "없음"
    },
    Battleaxe : {
        Name : "배틀 엑스",
        Damage : "1d8 베기",
        Weight : "4 lbs",
        Properties : "다용도 (1d10)",
        Notes : "Combat, Damage"
    },
    Blowgun :  {
        Name : "바람 총",
        Damage : "1 뚫기",
        Weight : "1 lb",
        Properties : "탄약, 장전, (범위 25/100)",
        Notes : "Combat, Damage"
    },
    Blunderbuss :   {
        Name : "나팔 총",
        Damage : "2d8 뚫기",
        Weight : "10 lbs",
        Properties : "재장전, 불발",
        Notes : "없음"
    },
    Boomerang : {
        Name : "부메랑",
        Damage : "1d4 때리기",
        Weight : "없음",
        Properties : "(범위 60/120)",
        Notes : "Combat, Damage"
    },
    Club : {
        Name : "곤봉",
        Damage : "1d4 때리기",
        Weight : "2 lbs",
        Properties : "경량급",
        Notes : "Combat, Damage"
    },
    Crossbow_Hand : {
        Name : "핸드 크로스보우",
        Damage : "1d6 뚫기",
        Weight : "3 lbs",
        Properties : "탄약, (범위 30/120), 경량급, 장전",
        Notes : "Combat, Damage"
    },
    Crossbow_Heavy : {
        Name : "헤비 크로스보우",
        Damage : "1d10 뚫기",
        Weight : "18 lbs",
        Properties : "탄약, 중량급, 장전, (범위 100/400), 양손",
        Notes : "Combat, Damage"
    },
    Crossbow_Light : {
        Name : "라이트 크로스보우",
        Damage : "1d8 뚫기",
        Weight : "5 lbs",
        Properties : "탄약, 장전, (범위 80/320), 양손",
        Notes : "Combat, Damage"
    },
    Dagger : {
        Name : "단검",
        Damage : "1d4 뚫기",
        Weight : "1 lb",
        Properties : "기교, 경량급, 던지기 (범위 20/60)",
        Notes : "Combat, Damage"
    },
    Dart : {
        Name : "다트",
        Damage : "1d4 뚫기",
        Weight : "1/4 lb",
        Properties : "기교, 던지기 (범위 20/60)",
        Notes : "Combat, Damage"
    },
    Double_Bladed_Scimitar : {
        Name : "양날 시미터",
        Damage : "2d4 베기",
        Weight : "6 lbs",
        Properties : "특수(자신의 차례에 공격 액션의 일부로 양날 시미 터로 공격 하면 즉시 보너스 액션을 사용하여 근접 공격을 할 수 있습니다. 이 공격은 2d4 대신 1d4 베기 피해를 줍니다.), 양손",
        Notes : "Combat, Damage"
    },
    Flail : {
        Name : "편곤",
        Damage : "1d8 때리기",
        Weight : "2 lbs",
        Properties : "없음",
        Notes : "Combat, Damage"
    },
    Glaive : {
        Name : "글레이브",
        Damage : "1d10 베기",
        Weight : "6 lbs",
        Properties : "중량급, 리치, 양손",
        Notes : "Combat, Control, Damage"
    },
    Greataxe : {
        Name : "그레이트 엑스",
        Damage : "1d12 베기",
        Weight : "7 lbs",
        Properties : "중량급, 양손",
        Notes : "Combat, Damage"
    },
    Greatclub : {
        Name : "그레이트 곤봉",
        Damage : "1d8 때리기",
        Weight : "10 lbs",
        Properties : "양손",
        Notes : "Combat, Damage"
    },
    Greatsword : {
        Name : "그레이트 칼",
        Damage : "2d6 베기",
        Weight : "6 lbs",
        Properties : "중량급, 양손",
        Notes : "Combat, Damage"
    },
    Halberd : {
        Name : "핼버드",
        Damage : "1d10 베기",
        Weight : "6 lbs",
        Properties : "중량급, 리치, 양손",
        Notes : "Combat, Control, Damage"
    },
    Hand_Mortar : {
        Name : "유탄 발사기",
        Damage : "2d8 화염",
        Weight : "10 lbs",
        Properties : "재장전, 불발, Explosive",
        Notes : "없음"
    },
    Handaxe : {
        Name : "핸드 엑스",
        Damage : "1d6 베기",
        Weight : "2 lbs",
        Properties : "경량급, 던지기 (범위 20/60)",
        Notes : "Combat, Damage"
    },
    Javelin : {
        Name : "재블린",
        Damage : "1d6 뚫기",
        Weight : "2 lbs",
        Properties : "던지기 (범위 30/120)",
        Notes : "Combat, Damage"
    },
    Lance : {
        Name : "랜스",
        Damage : "1d12 뚫기",
        Weight : "6 lbs",
        Properties : "리치, 특수(랜스를 사용하여 5 피트 이내의 대상을 공격하면 불이익이 있습니다.)",
        Notes : "Combat, Control, Damage"
    },
    Laser_Pistol : {
        Name : "레이저 권총",
        Damage : "3d6 광휘",
        Weight : "2 lbs",
        Properties : "탄약 (화기), (범위 40/120), 재장전",
        Notes : "Reload (50 shots)"
    },
    Laser_Rifle : {
        Name : "레이저 총",
        Damage : "3d8 광휘",
        Weight : "7 lbs",
        Properties : "탄약 (화기), (범위 100/300), 재장전, 양손",
        Notes : "Reload (50 shots)"
    },
    Light_Hammer :  {
        Name : "라이트 헤머",
        Damage : "1d4 때리기",
        Weight : "2 lbs",
        Properties : "경량급, 던지기 (범위 20/60)",
        Notes : "Combat, Damage"
    },
    Longbow : {
        Name : "롱보우",
        Damage : "1d8 뚫기",
        Weight : "2 lbs",
        Properties : "탄약, 중량급, (범위 150/600), 양손" ,
        Notes : "Combat, Damage"
    },
    Longsword : {
        Name : "롱소드",
        Damage : "1d8 베기",
        Weight : "3 lbs",
        Properties : "다용도 (1d10)" ,
        Notes : "Combat, Damage"
    },
    Mace : {
        Name : "철퇴",
        Damage : "1d6 때리기",
        Weight : "4 lbs",
        Properties : "없음" ,
        Notes : "Combat, Damage"
    },
    Maul : {
        Name : "도끼",
        Damage : "2d6 때리기",
        Weight : "10 lbs",
        Properties : "중량급, 양손" ,
        Notes : "Combat, Damage"
    },
    Morningstar : {
        Name : "모닝스타",
        Damage : "1d8 뚫기",
        Weight : "4 lbs",
        Properties : "없음" ,
        Notes : "Combat, Damage"
    },
    Musket : {
        Name : "머스켓",
        Damage : "1d12 뚫기",
        Weight : "10 lbs",
        Properties : "탄약 (화기), (범위 40/120), 장전, 양손" ,
        Notes : "Combat, Damage"
    },
    Net : {
        Name : "그물 총",
        Damage : "0 때리기",
        Weight : "3 lbs",
        Properties : "특수(그물에 맞은 생물 은 해방 될 때까지 제한 됩니다. 그물은 형태가없는 생물이나 거대하거나 더 큰 생물에는 영향을 미치지 않습니다. 생물은 자신의 행동을 사용하여 DC 10 Strength check를 수행하여 성공시 자신 또는 다른 생물을 해방시킬 수 있습니다. 그물에 5의 베기 피해를 입히면 (AC 10) 생물을 해치지 않고 해방시켜 효과를 끝내고 그물을 파괴합니다.), 던지기 (범위 5/15)" ,
        Notes : "Combat, Damage"
    },
    Pike : {
        Name : "단창",
        Damage : "1d10 뚫기",
        Weight : "18 lbs",
        Properties : "중량급, 리치, 양손" ,
        Notes : "Combat, Control, Damage"
    },
    Pistol : {
        Name : "권총",
        Damage : "1d10 뚫기",
        Weight : "3 lbs",
        Properties : "탄약 (화기), (범위 30/90), 장전" ,
        Notes : "Combat, Damage"
    },
    Pistol_Automatic : {
        Name : "자동 권총",
        Damage : "2d6 뚫기",
        Weight : "3 lbs",
        Properties : "탄약 (화기), (범위 50/150), 재장전" ,
        Notes : "Reload (15 shots)"
    },
    Quarterstaff : {
        Name : "쿼터스태프",
        Damage : "1d6 때리기",
        Weight : "4 lbs",
        Properties : "다용도 (1d8)" ,
        Notes : "Combat, Damage"
    },
    Rapier : {
        Name : "레이피어",
        Damage : "1d8 뚫기",
        Weight : "2 lbs",
        Properties : "기교" ,
        Notes : "Combat, Damage"
    },
    Revolver : {
        Name : "리볼버",
        Damage : "2d8 뚫기",
        Weight : "3 lbs",
        Properties : "탄약 (화기), (범위 40/120), 재장전" ,
        Notes : "Reload (6 shots)"
    },
    Rifle_Automatic : {
        Name : "자동소총",
        Damage : "2d8 뚫기",
        Weight : "8 lbs",
        Properties : "탄약 (화기), (범위 80/240), 재장전, 양손, Burst Fire" ,
        Notes : "Reload (30 shots)"
    },
    Rifle_Hunting : {
        Name : "사냥 용 소총",
        Damage : "2d10 뚫기",
        Weight : "8 lbs",
        Properties : "탄약 (화기), (범위 80/240), 재장전, 양손" ,
        Notes : "Reload (5 shots)"
    },
    Scimitar : {
        Name : "시미터",
        Damage : "1d6 베기",
        Weight : "3 lbs",
        Properties : "기교, 경량급" ,
        Notes : "Combat, Damage"
    },
    Shortbow : {
        Name : "숏보우",
        Damage : "1d6 뚫기",
        Weight : "2 lbs",
        Properties : "탄약, (범위 80/320), 양손" ,
        Notes : "Combat, Damage"
    },
    Shortsword : {
        Name : "숏소드",
        Damage : "1d6 뚫기",
        Weight : "2 lbs",
        Properties : "기교, 경량급" ,
        Notes : "Combat, Damage"
    },
    Shotgun : {
        Name : "샷건",
        Damage : "2d8 뚫기",
        Weight : "7 lbs",
        Properties : "탄약 (화기), (범위 30/90), 재장전, 양손" ,
        Notes : "Reload (2 shots)"
    },
    Sickle : {
        Name : "낫",
        Damage : "1d4 베기",
        Weight : "2 lbs",
        Properties : "경량급" ,
        Notes : "Combat, Damage"
    },
    Sling : {
        Name : "슬링",
        Damage : "1d4 때리기",
        Weight : "없음",
        Properties : "탄약, (범위 30/120)" ,
        Notes : "Combat, Damage"
    },
    Spear : {
        Name : "스피어",
        Damage : "1d6 뚫기",
        Weight : "3 lbs",
        Properties : "던지기 (범위 20/60), 다용도 (1d8)" ,
        Notes : "Combat, Damage"
    },
    Trident : {
        Name : "삼지창",
        Damage : "1d6 뚫기",
        Weight : "4 lbs",
        Properties : "던지기 (범위 20/60), 다용도 (1d8)" ,
        Notes : "Combat, Damage"
    },
    War_Pick : {
        Name : "전쟁 망치",
        Damage : "1d8 뚫기",
        Weight : "2 lbs",
        Properties : "없음" ,
        Notes : "Combat, Damage"
    },
    Warhammer : {
        Name : "워해머",
        Damage : "1d8 때리기",
        Weight : "2 lbs",
        Properties : "다용도 (1d10)" ,
        Notes : "Combat, Damage"
    },
    Whip : {
        Name : "채찍",
        Damage : "1d4 베기",
        Weight : "3 lbs",
        Properties : "기교, 리치" ,
        Notes : "Combat, Control, Damage"
    },
    Yklwa : {
        Name : "익쿨와",
        Damage : "1d8 뚫기",
        Weight : "2 lbs",
        Properties : "던지기 (범위 10/30)" ,
        Notes : "Combat, Damage"
    }
}
// 방어구 리스트

// 일반 아이템들


let initialState = {
  visitDiary: [
    {
      oleumKname: "어대오름",
      oleumEname: "eodae",
      oleumAddr: "제주시 구좌읍 덕천리",
      oleumAltitu: 55,
      text: "장관이었다!",
      x: "126.760841705975",
      y: "33.4956497827199",
      explan: "비고 55m의 말굽형(북서향) 화구를 가진 화산체이다.",
      imgPath: "https://gis.jeju.go.kr/images/oleum/eodae.png",
    },
    {
      oleumKname: "백약이오름",
      oleumEname: "baeg-yagi",
      oleumAddr: "서귀포시  표선면 성읍리",
      oleumAltitu: 132,
      text: "일몰이이뻣다",
      x: "126.789766576052",
      y: "33.4368094390949",
      explan:
        "비고 132m의 원형 화구를 지닌 화산체이다. 예부터 약초가 많이 자생하고 있어 백약이오름이라 명칭되었다.",
      imgPath: "https://gis.jeju.go.kr/images/oleum/baeg-yagi.png",
    },
    {
      explan:
        "비고 51m의 원형 화구를 가진 오름이다.  거칠지 않은 산 체와 완만한 탐방로가 있어 여유로운 분위기의 오름이다.",
      imgPath: "https://gis.jeju.go.kr/images/oleum/abu.png",
      oleumAddr: "제주시 구좌읍 송당리",
      oleumAltitu: 51,
      oleumEname: "abu",
      oleumKname: "아부오름",
      text: "너무아름답다!",
      x: "126.777283002793",
      y: "33.4488750035003",
    },
  ],
};

function reducer(state = initialState, action) {
  console.log("action은?", action);
  console.log(state);

  return { ...state };
}

export default reducer;

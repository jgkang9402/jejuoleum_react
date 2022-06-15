let initialState = {

  
  // id: 0,
  // // toDo: [],
  // toDo: ["달리기", "잠자기", "자전거"],
  // done: [],
  // notDone: [],
};

function reducer(state = initialState, action) {
  console.log("action은?", action); //action은? {type: 'increment'}
  console.log(state);
  // const {type,payload} = action



  // if (action.type === "ADD_TASK") {
  //   return {
  //     ...state,
  //     toDo: [...state.toDo, action.payload],
  //   };
  // } else if (action.type == "DONE_TASK") {
  //   // true,false를 값과 함께 객체형식으로 받은다음 중복생기지않게 클래스코드짜면될듯 아직미완성
  //   if (state.done.includes(action.payload)) {
  //     console.log(123);
  //     // return
  //   }
  //   return {
  //     ...state,
  //     // done:[...state.done,action.payload]
  //     done: [
  //       ...state.done,
  //       state.done.includes(action.payload) ? null : action.payload,
  //     ],
  //   };
  // }

  // if (action.type === "increment") {
  //   return { ...state, count: state.count + action.payload.num };
  //   // state = initialState, 즉 state에있는값을 count 해서 +1한후 리턴해준거임
  //   // ...state 는 다른 state도 있을수있다는 가정하에 그것들은 유지하며 바꿔서 리턴하는거
  // } else if (action.type === "login") {
  //   return {
  //     ...state,
  //     id: action.payload.id,
  //     password: action.payload.password,
  //   };
  // } else if (action.type === "decrement") {
  //   return { ...state, count: state.count - action.payload.num };
  // }

  // 위의 if문을 switch문으로 했을때
  // switch (action.type) {
  //   case "increment":
  //     return { ...state, count: state.count + action.payload.num };
  //   case "login":
  //     return {
  //       ...state,
  //       id: action.payload.id,
  //       password: action.payload.password,
  //     };
  //   case "decrement":
  //     return { ...state, count: state.count - action.payload.num };
  //   default:
  //     return { ...state };
  // }

  return { ...state }; // store는 return값을 무조건 받아야해서 기본리턴이항상필요
}

export default reducer;

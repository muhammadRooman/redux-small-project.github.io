import { actionType } from "../Types/Type";

const initailState = {
  data: [], //initial array
  filterData:[]
};

export const dataProducer = (state = initailState, action) => {
  console.log("🚀 ~ file: Reducer.js ~ line 9 ~ dataProducer ~ action", action);

  switch (action.type) {
    case actionType.SET_DATA:
      return {
        ...state,
        data: action.payload, //updated array
      };
//SEND_ID

      case actionType.SEND_ID:
      let dataId= action.payload;
    const x =  state.data.filter((items)=>items.id === dataId)
    console.log("🚀 ~ file: Reducer.js ~ line 22 ~ dataProducer ~ x", x)
   
      return {
        ...state,
        filterData: x,
      };
    default:
      return state;
  }
};

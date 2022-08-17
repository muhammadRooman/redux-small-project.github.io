import { actionType } from "../Types/Type";

//fetch data
export const setData = (data) => {
  console.log("🚀 ~ file: Action.js ~ line 4 ~ setData ~ data", data);

  return {
    //type:"SET_DATA",
    type: actionType.SET_DATA,
    payload: data,
  };
};

//sendID
export const sendID = (id) => {
  console.log("🚀 ~ file: Action.js ~ line 16 ~ sendID ~ data", id);

  return {
    //type:"SET_DATA",
    type: actionType.SEND_ID,
    payload: id,
  };
};

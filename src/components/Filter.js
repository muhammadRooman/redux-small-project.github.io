import React from "react";
import { sendID } from "../Redux/Action/Action";
import { useDispatch, useSelector } from "react-redux/es/exports";
const Filter = () => {
  const dispatch  = useDispatch()
  const data = useSelector((state) => state.dataProducer.data);
  console.log("🚀 ~ file: Filter.js ~ line 7 ~ Filter ~ data", data);

  return (
    <div>
      Filter
      <div>
        {data.map((items) => {
          const { id, name } = items;
          return (
            <div>
              <ul key={id}>
                <li onClick={()=>dispatch(sendID(id))}>{name}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;

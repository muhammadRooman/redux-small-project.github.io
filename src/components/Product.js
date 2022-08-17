import React, { useEffect } from "react";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../Redux/Action/Action";
const Product = () => {
  const dispatch = useDispatch();
  const data_selector = useSelector((state) => state.dataProducer.data);
  const filter_selector = useSelector((state) => state.dataProducer.filterData);
  console.log(
    "🚀 ~ file: Product.js ~ line 10 ~ Product ~ filter_selector",
    filter_selector
  );
  console.log(
    "🚀 ~ file: Product.js ~ line 9 ~ Product ~ selector",
    data_selector
  );
  const getapi = async () => {
    const api = process.env.REACT_APP_API_URL;
    console.log("api", api);
    const response = await fetch(
      `https://api.json-generator.com/templates/jpRRCMtSY1Ur/data?access_token=${api}`
    );
    console.log(api);
    const data = await response.json();
    console.log("API Datas", data);
    dispatch(setData(data.data));
  };

  useEffect(() => {
    getapi();
  }, []);

  return (
    <div>
      <div>
        <Filter />
      </div>

      <div style={{ marginLeft: "20%" }}>
        <h1>Products</h1>
        {filter_selector.length === 0
          ? filter_selector.map((items) => {
              const { id, name, Image } = items;

              return (
                <div>
                  <div key={id}>
                    <img
                      src={Image}
                      alt={name}
                      className="img-fluid"
                      style={{ width: "20%" }}
                    />
                    <h4>{name}</h4>
                    <hr
                      style={{
                        width: "20%",
                        position: "relative",
                        right: "40%",
                      }}
                    />
                  </div>
                </div>
              );
            })
          : filter_selector &&
            filter_selector.map((items) => {
              const { id, name, Image } = items;

              return (
                <div>
                  <div key={id}>
                    <img
                      src={Image}
                      alt={name}
                      className="img-fluid"
                      style={{ width: "20%" }}
                    />
                    <h4>{name}</h4>
                    <hr
                      style={{
                        width: "20%",
                        position: "relative",
                        right: "40%",
                      }}
                    />
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Product;

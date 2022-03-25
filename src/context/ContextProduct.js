import React, { useReducer } from "react";
import axios from "axios";

const API = "http://localhost:8000/products";
export const contextProduct = React.createContext();

const INIT_STATE = {
  products: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload.data };
    default:
      return state;
  }
};

const ContextProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getAllProduct() {
    let res = axios(API);
    dispatch({
      type: "GET_PRODUCT",
      payload: res,
    });
  }

  return (
    <contextProduct.Provider
      value={{ products: state.products, getAllProduct }}
    >
      {children}
    </contextProduct.Provider>
  );
};
export default ContextProductProvider;

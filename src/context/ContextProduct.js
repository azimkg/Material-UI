import React, { useReducer } from "react";
import axios from "axios";

const API = " http://localhost:8001/products";
export const contextProduct = React.createContext();

const INIT_STATE = {
  products: [],
  pages: 0,
  editTask: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 1),
      };
    case "EDIT_PRODUCT":
      return {
        ...state,
        editTask: action.payload,
      };
    default:
      return state;
  }
};

const ContextProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getAllProduct() {
    let res = await axios(API + window.location.search);
    dispatch({
      type: "GET_PRODUCT",
      payload: res,
    });
  }

  async function addAnimal(newAnimal) {
    await axios.post(API, newAnimal);
    getAllProduct();
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getAllProduct();
  }
  async function editAnimal(id) {
    let { data } = await axios(`${API}/${id}`);
    console.log(data);
    dispatch({
      type: "EDIT_PRODUCT",
      payload: data,
    });
  }
  async function getOneAnimal(id, editedAnimal) {
    await axios.patch(`${API}/${id}`, editedAnimal);
    getAllProduct();
  }

  return (
    <contextProduct.Provider
      value={{
        products: state.products,
        pages: state.pages,
        editTask: state.editTask,
        getAllProduct,
        addAnimal,
        deleteProduct,
        editAnimal,
        getOneAnimal,
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};
export default ContextProductProvider;

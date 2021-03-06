import React, { useReducer } from "react";
import axios from "axios";

const API = "http://localhost:8000/products";
export const contextProduct = React.createContext();

const INIT_STATE = {
  products: [],
  editProduct: null,
  pages: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 1),
      };
    case "GET_EDIT_PRODUCT":
      return {
        ...state,
        editProduct: action.payload.data,
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

  async function getEditProduct(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_EDIT_PRODUCT",
      payload: res,
    });
  }

  const editedProduct = async (id, edited) => {
    await axios.patch(`${API}/${id}`, edited);
    getAllProduct();
  };

  return (
    <contextProduct.Provider
      value={{
        products: state.products,
        editProduct: state.editProduct,
        pages: state.pages,
        getAllProduct,
        addAnimal,
        deleteProduct,
        getEditProduct,
        editedProduct,
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};
export default ContextProductProvider;

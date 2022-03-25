import React, { useContext, useState } from "react";
import { contextProduct } from "../../context/ContextProduct";
import "./AddProduct.css";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const { addAnimal } = useContext(contextProduct);

  function handleAdd() {
    let newAnimal = {
      title,
      price,
      image,
    };
    addAnimal(newAnimal);
  }

  return (
    <div className="AddProduct">
      <div className="add">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="inp"
          type="text"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="inp"
          type="text"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image"
          className="inp"
          type="text"
        />
        <button onClick={handleAdd} className="btn">
          Добавить
        </button>
      </div>
    </div>
  );
};

export default AddProduct;

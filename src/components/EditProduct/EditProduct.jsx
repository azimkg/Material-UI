import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { contextProduct } from "../../context/ContextProduct";
import "./EditProduct.css";

const EditProduct = () => {
  const params = useParams();
  const { getOneAnimal, editAnimal, editTask } = useContext(contextProduct);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  console.log(editTask);
  //
  useEffect(() => {
    getOneAnimal(params.id);
  }, []);
  useEffect(() => {
    setTitle(editTask?.title);
    setPrice(editTask?.price);
    setImage(editTask?.image);
  }, [editTask]);
  //
  function save() {
    let newAnimal = {
      title,
      price,
      image,
    };
    editAnimal(params.id, newAnimal);
  }
  return (
    <div className="main_modal">
      <div className="inner_modal">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          type="text"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image"
          type="text"
        />
        <Link to={"/"}>
          <button onClick={save}>Сохранить</button>
        </Link>
      </div>
    </div>
  );
};

export default EditProduct;

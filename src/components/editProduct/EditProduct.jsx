import { Backdrop, Button, CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contextProduct } from "../../context/ContextProduct";
import "./EditProduct.css";

const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(null);
  const { getEditProduct, editedProduct, editProduct } =
    useContext(contextProduct);
  const [open, setOpen] = useState(false);

  console.log(editProduct);
  useEffect(() => {
    getEditProduct(params.id);
  }, []);

  useEffect(() => {
    setEdit(editProduct);
  }, [editProduct]);

  const handleValue = (e) => {
    let edited = {
      ...edit,
      [e.target.name]: e.target.value,
    };
    setEdit(edited);
  };
  console.log(edit);

  const save = () => {
    editedProduct(params.id, edit);
    navigate("/");
  };

  return edit ? (
    <div className="edit">
      <div className="form">
        <input
          className="inps"
          type="text"
          value={edit.title}
          name="title"
          onChange={handleValue}
        />
        <input
          className="inps"
          type="text"
          value={edit.price}
          name="price"
          onChange={handleValue}
        />
        <input
          className="inps"
          type="text"
          value={edit.image}
          name="image"
          onChange={handleValue}
        />
        <Button variant="outlined" onClick={save}>
          Сохранить
        </Button>
      </div>
    </div>
  ) : (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={() => setOpen(false)}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default EditProduct;

import { Alert, Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contextProduct } from "../../context/ContextProduct";
import "./AddProduct.css";
import addDog from "../Icons/Add.png";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { addAnimal } = useContext(contextProduct);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  function handleAdd() {
    if (title === "" || price === "" || image === "") {
      alert("Заполните все поля!");
      return;
    }
    let newAnimal = {
      title,
      price,
      image,
    };
    addAnimal(newAnimal);
    handleClose();

    setTitle("");
    setPrice("");
    setImage("");
  }

  return (
    <div>
      <Button onClick={handleOpen}>
        <img
          src={addDog}
          style={{
            height: "80px",
            width: "80px",
            color: "black",
            cursor: "pointer",
          }}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div class="modal">
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
              <button className="btn" onClick={handleAdd}>
                Добавить
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default AddProduct;

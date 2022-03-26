import React, { useContext, useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { contextProduct } from "../../context/ContextProduct";
import "./MediaCard.css";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Section from "../Section/Section";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MediaCard() {
  const params = useParams();
  const [edit, setEdit] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(1);
  const { products, getAllProduct, deleteProduct, pages } =
    useContext(contextProduct);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getAllProduct();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: searchValue,
      _limit: 4,
      _page: page,
    });
  }, [searchValue, page]);
  useEffect(() => {
    getAllProduct();
  }, [searchParams]);

  return (
    <div className="card">
      <div className="product">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search..."
          className="inp1"
        />
        {products.map((item) => (
          <Card
            key={item.id}
            style={{ marginTop: "20px", border: "1px solid white" }}
            sx={{ width: 600 }}
          >
            <CardMedia
              style={{ cursor: "not-allowed" }}
              component="img"
              height="400"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => deleteProduct(item.id)} size="small">
                Удалить
              </Button>
              <Link style={{ textDecoration: "none" }} to={`/edit/${item.id}`}>
                <Button size="small">Изменить</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
      <div className="page">
        <button
          className="btn-pages"
          disabled={page == 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          Назад
        </button>
        <span
          style={{
            fontSize: "24px",
            color: "grey",
            fontWeight: "bold",
            marginTop: "15px",
          }}
        >
          {page}
        </span>
        <button
          className="btn-pages"
          disabled={page == pages ? true : false}
          onClick={() => setPage(page + 1)}
        >
          Вперед
        </button>
      </div>
      <Section />
    </div>
  );
}

export default MediaCard;

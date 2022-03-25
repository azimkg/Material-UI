import React, { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { contextProduct } from "../../context/ContextProduct";
import "./MediaCard.css";

function MediaCard() {
  const { products, getAllProduct, deleteProduct } = useContext(contextProduct);
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className="card">
      <div className="product">
        {products.map((item) => (
          <Card
            key={item.id}
            style={{ marginTop: "20px", border: "1px solid white" }}
            sx={{ maxWidth: 600 }}
          >
            <CardMedia
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
              <Button size="small">Изменить</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MediaCard;

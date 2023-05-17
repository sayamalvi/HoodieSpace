import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button, Tabs, Tab } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state/index";
import { useParams } from "react-router-dom";
import Item from "../../components/Item";

const ItemDetails = () => {
  const dispatch = useDispatch();

  //from the url grab itemId
  const { itemId } = useParams();
  //will be used for tabs
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  //related products
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  async function getItem() {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET" }
    );

    const itemJSON = await item.json();
    setItem(itemJSON.data);
  }
  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );

    const itemsJSON = await items.json();
    setItems(itemsJSON.data);
  }
  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]);

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
          />
        </Box>
        <Box flex="1 1 50%" mb="10px">
          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.name}</Typography>
            <Typography>{item?.attributes?.price}</Typography>
            <Typography>{item?.attributes?.longDescription}</Typography>
          </Box>
          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: "0",
                minWidth: "150px",
                padding: "10px 40px",
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </Button>
          </Box>
          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlinedIcon />
              <Typography>ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES:{item?.attributes?.category}</Typography>
          </Box>
        </Box>
      </Box>
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <div>{item?.attributes?.longDescription}</div>
        )}
        {value === "reviews" && <div>Reviews</div>}
      </Box>
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {/* only take 4 items  */}
          {items?.slice(0, 4).map((item, index) => (
            <Item key={`${item.name}-${index}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;

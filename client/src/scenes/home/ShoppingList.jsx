import React, { useState, useEffect } from "react";
import { Box, Typography, Tabs, Tab, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state/index";
import { useDispatch, useSelector } from "react-redux";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [randomItems, setRandomItems] = useState(new Set());

  async function getItems() {
    const perPage = 44;
    const items = await fetch(
      `http://localhost:1337/api/items?populate=image&pagination[start]=0&pagination[limit]=-1`,
      {
        method: "GET",
      }
    );
    const itemsJSON = await items.json();
    dispatch(setItems(itemsJSON.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    // Generate random items
    const generateRandomItems = () => {
      const newRandomItems = new Set();
      while (newRandomItems.size < 6 && newRandomItems.size < items.length) {
        const randomIndex = Math.floor(Math.random() * items.length);
        newRandomItems.add(items[randomIndex]);
      }
      setRandomItems(newRandomItems);
    };

    generateRandomItems();
  }, [items]);

  return (
    <Box width="80%" margin="50px auto">
      <Typography textAlign="center" fontSize="25px">
        FEATURED
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {/* Display random items */}
        {Array.from(randomItems).map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;

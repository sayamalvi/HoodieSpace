import React, { useState, useEffect } from "react";
import { Box, Typography, Tabs, Tab, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state/index";
import { useDispatch, useSelector } from "react-redux";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  // grab all the items from strapi backend
  async function getItems() {
    const perPage = 44;
    const items = await fetch(
      `http://localhost:1337/api/items?populate=*&pagination[start]=0&pagination[limit]=-1`,
      {
        method: "GET",
      }
    );
    const itemsJSON = await items.json();

    //populate items array
    dispatch(setItems(itemsJSON.data));
    {
      console.log(itemsJSON);
    }
  }

  useEffect(() => {
    // call the strapi api
    getItems();
  }, []);

  return (
    <Box width="80%" margin="50px auto">
      <Typography textAlign="center" fontSize="25px">
        FEATURED
      </Typography>
    </Box>
  );
};

export default ShoppingList;

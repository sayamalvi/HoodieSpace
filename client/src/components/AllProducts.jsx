import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import Item from "./Item";
import { setItems } from "../state";

const AllProducts = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  async function getItems() {
    const items = await fetch("http://localhost:1337/api/items?populate=*", {
      method: "GET",
    });
    const itemsJSON = await items.json();

    //populate items array
    dispatch(setItems(itemsJSON.data));
  }

  useEffect(() => {
    // call the strapi api
    getItems();
  }, []);
  return (
    <Box>
      <Typography textAlign="center" fontSize="35px" m="30px">
        ALL PRODUCTS
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {items.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}}`} />
        ))}
      </Box>
    </Box>
  );
};
export default AllProducts;

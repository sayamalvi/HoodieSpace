import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import Item from "./Item";
import { setItems } from "../state";

const Lowers = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const lowers = items.filter((item) => item.attributes.category === "lowers");
  async function getItems() {
    const items = await fetch("http://localhost:1337/api/items?populate=*", {
      method: "GET",
    });
    const itemsJSON = await items.json();

    dispatch(setItems(itemsJSON.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Box>
      <Typography textAlign="center" fontSize="35px" m="30px">
        JOGGERS
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {lowers.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}}`} />
        ))}
      </Box>
    </Box>
  );
};

export default Lowers;

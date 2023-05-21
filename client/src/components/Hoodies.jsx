import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import Item from "./Item";
import { setItems } from "../state";

const Hoodies = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const hoodies = items.filter(
    (item) => item.attributes.category === "hoodies"
  );
  async function getItems() {
    const items = await fetch("http://localhost:1337/api/items?populate=*&pagination[start]=0&pagination[limit]=-1", {
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
        HOODIES
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {hoodies.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}}`} />
        ))}
      </Box>
    </Box>
  );
};

export default Hoodies;

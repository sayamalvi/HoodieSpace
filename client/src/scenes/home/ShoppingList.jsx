import React, { useState, useEffect } from "react";
import { Box, Typography, Tabs, Tab, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state/index";
import { useDispatch, useSelector } from "react-redux";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const isNotMobile = useMediaQuery("(min-width:600px)");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // grab all the items from strapi backend
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

  const tshirts = items.filter(
    (item) => item.attributes.category === "tshirts"
  );
  const hoodies = items.filter(
    (item) => item.attributes.category === "hoodies"
  );
  const lowers = items.filter((item) => item.attributes.category === "lowers");
  return (
    <Box width="80%" margin="50px auto">
      <Typography textAlign="center" fontSize="25px">
        Our Featured Products
      </Typography>
      <Tabs
        textColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{
          sx: {
            display: isNotMobile ? "block" : "none",
          },
        }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="T-SHIRTS" value="tshirts" />
        <Tab label="HOODIES" value="hoodies" />
        <Tab label="LOWERS" value="lowers" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}}`} />
          ))}
        {value === "tshirts" &&
          tshirts.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}}`} />
          ))}
        {value === "hoodies" &&
          hoodies.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}}`} />
          ))}
        {value === "lowers" &&
          lowers.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;

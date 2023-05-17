import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state/index";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [hovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  const { category, price, name, image } = item?.attributes;
  const url = image?.data?.attributes?.formats?.medium?.url;

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => {
          setIsHovered(false);
        }}
      >
        <img
          alt={item.name}
          width="300px"
          height="350px"
          src={`http://localhost:1337${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{
            cursor: "pointer",
          }}
        />
        <Box
          display={hovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              sx={{
                backgroundColor: shades.primary[300],
                color: "white",
                "&:hover": {
                  backgroundColor: shades.primary[200],
                },
              }}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {/* I first used the regex but the first letter was still in lowercase so I first converted first letter to uppercase then used regex. This regex will  */}
          {category.charAt(0).toUpperCase() +
            category.replace(/([a-z])([A-Z])/g, "$1 $2").slice(1)}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">Rs.{price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;

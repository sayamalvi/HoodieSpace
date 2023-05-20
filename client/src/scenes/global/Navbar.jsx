import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Badge,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen, setIsMenuOpen } from "../../state";
import logo from "../../../public/logo.jpg";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isNotMobile = useMediaQuery("(min-width:600px)");

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      borderRadius="5px"
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      background="rgba(255, 255, 255,0.18)"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      sx={{
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
      color="black"
      position="sticky"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* logo */}
        <Box
          fontWeight="bold"
          fontSize="12px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.primary[500]}
        >
          HOODIE
          <Box
            component="img"
            sx={{
              height: 30,
              width: 40,
            }}
            src={logo}
          />
          SPACE
        </Box>
        <Box display={isNotMobile ? "none" : "block"}>
          <IconButton
            onClick={() => dispatch(setIsMenuOpen({}))}
            sx={{ margin: "0", padding: "0" }}
          >
            <MenuOutlined />
          </IconButton>
        </Box>
        {/* Icons */}
        <Box
          display={isNotMobile ? "flex" : "none"}
          justifyContent="space-between"
          alignItems="center"
          columnGap={isNotMobile ? "20px" : "2px"}
          zIndex="2"
        >
          <Button>
            <Typography
              fontWeight="bold"
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
              }}
            >
              HOME
            </Typography>
          </Button>
          <Button aria-controls="product-menu" onClick={handleClick}>
            <Typography
              fontWeight="bold"
              sx={{
                cursor: "pointer",
              }}
            >
              SHOP
            </Typography>
          </Button>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              sx={{ color: "black" }}
              onClick={() => dispatch(setIsCartOpen({}))}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
        </Box>
      </Box>
      <Menu
        id="product-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            navigate("/all");
            handleClose();
          }}
        >
          ALL
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/tees");
            handleClose();
          }}
        >
          TEES
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/hoodies");
            handleClose();
          }}
        >
          HOODIES
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/lowers");
            handleClose();
          }}
        >
          JOGGERS
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Navbar;

import React from "react";
import { Box, IconButton, Typography, Badge } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { setIsMenuOpen, setIsCartOpen } from "../../state/index";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";

const HamMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const isMenuOpen = useSelector((state) => state.cart.isMenuOpen);
  return (
    //overlay
    <Box
      display={isMenuOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      right="0"
      top="0"
      overflow="auto"
    >
      {/* modal */}
      <Box
        position="fixed"
        left="0"
        top="0"
        width="100%"
        height="100%"
        backgroundColor="white"
      >
        <IconButton
          size="large"
          onClick={() => dispatch(setIsMenuOpen({}))}
          sx={{
            position: "absolute",
            top: "15px",
            right: "35px",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          height="100%"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          gap="20px"
          alignItems="center"
          textAlign="center"
        >
          <Typography
            sx={{
              cursor: "pointer",
            }}
            color={shades.primary[300]}
            fontSize="30px"
            fontWeight="bold"
            onClick={() => {
              navigate("/");
              dispatch(setIsMenuOpen({}));
            }}
          >
            HOME
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
            }}
            color={shades.primary[300]}
            fontSize="30px"
            fontWeight="bold"
            onClick={() => {
              navigate("/");
              dispatch(setIsMenuOpen({}));
            }}
          >
            SHOP
          </Typography>
          <Box display="flex">
            <Typography
              sx={{
                cursor: "pointer",
              }}
              color={shades.primary[300]}
              fontSize="30px"
              fontWeight="bold"
              onClick={() => {
                dispatch(setIsMenuOpen({}));
                dispatch(setIsCartOpen({}));
              }}
            >
              CART
            </Typography>
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
              ></IconButton>
            </Badge>
          </Box>
          <Typography
            sx={{
              cursor: "pointer",
            }}
            color={shades.primary[300]}
            fontSize="30px"
            fontWeight="bold"
            onClick={() => {
              navigate("/login");
              dispatch(setIsMenuOpen({}));
            }}
          >
            LOGIN
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HamMenu;
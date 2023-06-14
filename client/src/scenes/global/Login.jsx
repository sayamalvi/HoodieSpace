import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { setIsLoginModalOpen } from "../../state/index";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isLoginModalOpen = useSelector((state) => state.cart.isLoginModalOpen);
  return (
    <Box
      display={isLoginModalOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.7)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      {/* modal */}
      <Box
        position="fixed"
        left="0"
        right="0"
        top="9%"
        margin="0 auto"
        width="max(400px, 30%)"
        height="80%"
        backgroundColor="white"
      >
        <IconButton onClick={() => dispatch(setIsLoginModalOpen({}))}>
          <CloseIcon />
        </IconButton>
        {/* <form action="http://localhost:1337/api/connect/google" method="GET">
          <Button sx={{ display: "block", m: "0 auto" }} type="submit" >
            Sign in with google
          </Button>
        </form> */}
        <Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

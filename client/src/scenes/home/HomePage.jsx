import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image from "../../assets/1.webp";

const HomeCarousel = () => {
  const isNotMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box>
      <img
        src={image}
        style={{
          width: "100%",
          height: "700px",
          objectFit: "cover",
          backgroundAttachment: "fixed",
        }}
      />
      {/* <Box
        sx={{
          width: "100%",
          height: "700px",
          position: "absolute",
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          opacity: 0.9,
          color: "#ffffff",
          fontSize: "20px",
          padding: "20px",
        }}
      > */}
      {/* <Typography
          color='rgba(255, 255, 255, 0.7)'
          position="relative"
          top="20%"
          textAlign="left"
          fontSize="90px"
          sx={{
            wordBreak: "break-word",
          }}
        >
          Hoodies You've Never Worn Before
        </Typography> */}
      {/* </Box> */}
    </Box>
  );
};

export default HomeCarousel;

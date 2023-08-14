import React from "react";
import Hero from "../components/Hero";
import { Container } from "@mui/material";
import { useTheme } from "@emotion/react";

const HomePage = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        [theme.breakpoints.down("sm")]: {
          px: 1,
        },
      }}
    >
      <Hero />
    </Container>
  );
};

export default HomePage;

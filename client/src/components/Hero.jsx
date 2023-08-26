import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";
import { useGetProfileQuery } from "../store/usersApiSlice";

export default function Hero() {
  const { userInfo } = useSelector((state) => state.auth);
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 275,
        my: 10,
        mx: 15,
        textAlign: "center",
        padding: 2,
        [theme.breakpoints.down("md")]: {
          mx: 0,
        },
        [theme.breakpoints.down("sm")]: {
          my: 5,
        },
      }}
    >
      <CardContent>
        <Typography variant="h3" fontWeight={300} my={1}>
          MERN authentication
        </Typography>
        <Typography mt={3}>
          Kickstart your MERN authentication projects with this comprehensive
          boilerplate. Securely store JWT in HTTP-Only cookies for heightened
          security. Leverage Redux Toolkit for efficient state management and
          Material UI for polished user interfaces. Seamlessly build apps that
          combine robustness, security, and user experience.
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: 1 }}>
        {userInfo ? (
          <UserInfo userInfo={userInfo} />
        ) : (
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              component={Link}
              to="/login"
              size="medium"
            >
              Login
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/register"
              size="medium"
              sx={{
                backgroundColor: theme.palette.primary[400],

                "&:hover": {
                  backgroundColor: theme.palette.primary[500],
                },
              }}
            >
              Register
            </Button>
          </Stack>
        )}
      </CardActions>
    </Card>
  );
}

import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { stringAvatar, stringToColor } from "../utils/stringAvatar";
import { useTheme } from "@emotion/react";

const UserInfo = ({ userInfo }) => {
  const { name, email } = userInfo;
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        minWidth: "fit-content",
        bgcolor: theme.palette.grey[100],
        border: 1,
        borderColor: theme.palette.grey[200],
        borderRadius: 1,
        py: 1,
        px: 4
      }}
    >
      <Typography sx={{ fontWeight: "bold", mb: .6 }}>{name}</Typography>
      <Typography>{email}</Typography>
    </Box>
  );
};

export default UserInfo;

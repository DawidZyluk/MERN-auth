import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import { useRequestVerifyAccountMutation } from "../store/usersApiSlice";
import { toast } from "react-hot-toast";

const UserInfo = ({ userInfo }) => {
  const { name, email, verified } = userInfo;
  const [requestVerification] = useRequestVerifyAccountMutation();
  const theme = useTheme();
  const resendVerificationEmail = async () => {
    try {
      const res = await requestVerification().unwrap();
      console.log(res);
      toast.success(res.message)
    } catch (error) {
      toast.error(error.data.message)
    }
  };
  return (
    <Container sx={{width: "fit-content"}}>
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
    {!verified && <Button onClick={resendVerificationEmail}>Verify your e-mail</Button>}
    </Container>
  );
};

export default UserInfo;

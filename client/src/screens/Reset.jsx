import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Formik } from "formik";
import * as yup from "yup";
import { useResetMutation } from "../store/usersApiSlice";
import { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { useTheme } from "@emotion/react";
import { toast } from "react-hot-toast";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
});

const initialValues = {
  email: "",
};

export default function Reset() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [reset, { error }] = useResetMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (values, onSubmitProps) => {
    try {
      await reset(values.email).unwrap();
      toast.success("Password reset e-mail have been sent");
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ mb: 2 }} component="h1" variant="h5">
          Reset your password
        </Typography>
        {error && (
          <Card
            variant="outlined"
            sx={{
              width: "100%",
              textAlign: "center",
              py: 1,
              borderColor: theme.palette.error.light,
              backgroundColor: theme.palette.error[50],
            }}
          >
            <Typography sx={{ color: theme.palette.error.main }}>
              {error.data.message}
            </Typography>
          </Card>
        )}
        <Formik
          validateOnBlur={false}
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={loginSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isValid,
            isSubmitting,
          }) => (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitting || !isValid}
              >
                Send instructions
              </Button>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

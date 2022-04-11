import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { login } from "../store/actions/auth";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import CustomInput from "../UI/CustomInput";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    flexGrow: 1,
    height: "100%",
  },
  card: {
    display: "flex",
    padding: 10,
    flexDirection: "column",
    minWidth: 400,
  },
});

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const loginPressed = async (data) => {
    dispatch(login(data));
  };
  return (
    <Grid className={classes.root} alignItems="center" justify="center">
      <Card className={classes.card}>
        <Typography variant="h3" align="center" paddingY={1}>
          Login
        </Typography>

        <CustomInput
          control={control}
          inputProps={{
            autoCapitalize: "none",
            label: "Username",
            margin: "normal",
            variant: "outlined",
            size: "small",
          }}
          name="username"
          rules={{
            required: true,
          }}
          errors={{
            type: errors?.username?.type,
            messages: {
              required: "This field is required",
            },
          }}
        />

        <CustomInput
          control={control}
          inputProps={{
            autoCapitalize: "none",
            label: "Password",
            margin: "normal",
            variant: "outlined",
            size: "small",
            type: "password",
          }}
          name="password"
          rules={{
            required: true,
          }}
          errors={{
            type: errors?.password?.type,
            messages: {
              required: "This field is required",
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(loginPressed)}
        >
          Login
        </Button>
      </Card>
    </Grid>
  );
}

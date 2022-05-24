import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { contentsActions } from "../../store/slices/contents";
import CustomInput from "../CustomInput";
import { Controller, useForm } from "react-hook-form";
import Slide from "@mui/material/Slide";
import { createLevel, updateLevel } from "../../store/actions/levels";
import { FormControlLabel, Switch } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Modal() {
  const { modal, total } = useSelector((state) => state.contents.levels);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(contentsActions.hideLevelModal());
  };
  console.log("total", total);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      number: 0,
      images: 0,
      for3Stars: 85,
      for2Stars: 70,
      for1Stars: 50,
      seconds: 60,
      sendPushNotification: false,
    },
  });
  React.useEffect(() => {
    if (modal?.level) {
      reset({
        ...modal?.level,
        sendPushNotification: false,
      });
      return;
    }
    reset({
      number: total + 1 || 0,
      images: 0,
      for3Stars: 85,
      for2Stars: 70,
      for1Stars: 50,
      seconds: 60,
      sendPushNotification: false,
    });
  }, [modal]);

  const createPressed = async (data) => {
    if (modal?.level?.id) {
      data.id = modal?.level?.id;
      dispatch(updateLevel(data, reset));
    } else {
      dispatch(createLevel(data, reset));
    }
  };
  console.log("errors", errors);
  return (
    <Dialog
      open={modal.visible}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      TransitionComponent={Transition}
    >
      <DialogTitle id="alert-dialog-title">
        {modal.mode === "create" ? "Create a" : "Update the"} Level
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="alert-dialog-description">
          <CustomInput
            control={control}
            inputProps={{
              autoCapitalize: "none",
              label: "Level Number",
              margin: "normal",
              variant: "outlined",
              size: "small",
              type: "number",
            }}
            name="number"
            rules={{
              required: true,
            }}
            errors={{
              type: errors?.number?.type,
              messages: {
                required: "This field is required",
              },
            }}
          />
          <CustomInput
            control={control}
            inputProps={{
              autoCapitalize: "none",
              label: "Seconds",
              margin: "normal",
              variant: "outlined",
              size: "small",
              type: "number",
            }}
            name="seconds"
            rules={{
              required: true,
            }}
            errors={{
              type: errors?.seconds?.type,
              messages: {
                required: "This field is required",
              },
            }}
          />
          <CustomInput
            control={control}
            inputProps={{
              autoCapitalize: "none",
              label: "Images",
              margin: "normal",
              variant: "outlined",
              size: "small",
              type: "number",
            }}
            name="images"
            rules={{
              required: true,
            }}
            errors={{
              type: errors?.images?.type,
              messages: {
                required: "This field is required",
              },
            }}
          />

          <CustomInput
            control={control}
            inputProps={{
              autoCapitalize: "none",
              label: "Hit Rate for 3 Stars (%)",
              margin: "normal",
              variant: "outlined",
              size: "small",
              type: "number",
            }}
            name="for3Stars"
            rules={{
              required: true,
              min: 0,
              max: 100,
            }}
            errors={{
              type: errors?.for3Stars?.type,
              messages: {
                required: "This field is required",
                min: "Must be greater than 0",
                max: "Must be less than 100",
              },
            }}
          />
          <CustomInput
            control={control}
            inputProps={{
              autoCapitalize: "none",
              label: "Hit Rate for 2 Stars (%)",
              margin: "normal",
              variant: "outlined",
              size: "small",
              type: "number",
            }}
            name="for2Stars"
            rules={{
              required: true,
              min: 0,
              max: 100,
            }}
            errors={{
              type: errors?.for2Stars?.type,
              messages: {
                required: "This field is required",
                min: "Must be greater than 0",
                max: "Must be less than 100",
              },
            }}
          />
          <CustomInput
            control={control}
            inputProps={{
              autoCapitalize: "none",
              label: "Hit Rate for 1 Stars (%)",
              margin: "normal",
              variant: "outlined",
              size: "small",
              type: "number",
            }}
            name="for1Stars"
            rules={{
              required: true,
              min: 0,
              max: 100,
            }}
            errors={{
              type: errors?.for1Stars?.type,
              messages: {
                required: "This field is required",
                min: "Must be greater than 0",
                max: "Must be less than 100",
              },
            }}
          />
          {modal.mode === "create" && (
            <Controller
              control={control}
              name="sendPushNotification"
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Switch
                      name="sendPushNotification"
                      checked={field.value ?? false}
                      {...field}
                    />
                  }
                  label="Send Notification"
                />
              )}
            />
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button onClick={handleClose} color="error">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit(createPressed)}
          variant="contained"
          color="primary"
        >
          {modal.mode === "create" ? "Create" : "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

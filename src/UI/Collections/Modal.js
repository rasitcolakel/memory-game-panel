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
import { useForm } from "react-hook-form";
import Slide from "@mui/material/Slide";
import { API, graphqlOperation } from "aws-amplify";
import { createCollections } from "../../graphql/mutations";
import {
  createCollection,
  updateCollection,
} from "../../store/actions/collections";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Modal() {
  const { modal } = useSelector((state) => state.contents.collections);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(contentsActions.hideCollectionModal());
  };
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
    },
  });
  React.useEffect(() => {
    if (modal?.collection?.title) {
      reset({
        title: modal?.collection?.title,
      });
      return;
    }
    reset({ title: "" });
  }, [modal]);
  const createPressed = async (data) => {
    if (modal?.collection?.title) {
      data.id = modal?.collection?.id;
      dispatch(updateCollection(data, reset));
    } else {
      dispatch(createCollection(data, reset));
    }
  };
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
        {modal.mode === "create" ? "Create a" : "Update the"} Collection
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="alert-dialog-description">
          <CustomInput
            control={control}
            inputProps={{
              autoCapitalize: "none",
              label: "Title",
              margin: "normal",
              variant: "outlined",
              size: "small",
            }}
            name="title"
            rules={{
              required: true,
            }}
            errors={{
              type: errors?.title?.type,
              messages: {
                required: "This field is required",
              },
            }}
          />
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

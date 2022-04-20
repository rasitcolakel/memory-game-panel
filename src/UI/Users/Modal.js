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
import {
  createCollection,
  updateCollection,
} from "../../store/actions/collections";
import { getImages } from "../../store/actions/image";
import ImagePicker from "../ImagePicker";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Modal() {
  const { modal } = useSelector((state) => state.contents.collections);
  const images = useSelector((state) => state.contents.images);

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

  React.useEffect(() => {
    if (images.data === null) {
      dispatch(getImages());
    }
  }, []);
  const [selected, setSelected] = React.useState(
    modal.collection
      ? modal.collection.images.items.length > 0
        ? modal.collection.images.items.map((item) => item.image.url)
        : []
      : []
  );
  const selectImage = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  React.useEffect(() => {
    setSelected(
      modal.collection
        ? modal.collection.images.items.length > 0
          ? modal.collection.images.items.map((item) => item.image.id)
          : []
        : []
    );
  }, [modal.collection]);
  const createPressed = async (data) => {
    if (modal?.collection?.title) {
      data.id = modal?.collection?.id;
      data.images = modal?.collection?.images;
      dispatch(updateCollection(data, selected, reset));
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
          {modal.mode === "update" && (
            <ImagePicker selectImage={selectImage} selected={selected} />
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

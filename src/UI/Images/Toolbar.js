import { Upload } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createImageAction } from "../../store/actions/image";
import CircularProgressWithLabel from "../CircularProgressWithLabel";

export default function CollectionsToolbar() {
  const [image, setImage] = React.useState(null);
  const dispatch = useDispatch();
  const { uploading } = useSelector((state) => state.contents.images);
  const handleReset = (e) => {
    setImage(null);
  };

  React.useEffect(() => {
    if (image) dispatch(createImageAction(image, handleReset));
  }, [image]);
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
      dividers
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Images
      </Typography>
      {uploading?.visible ? (
        <CircularProgressWithLabel
          value={uploading?.value}
          isFinished={uploading?.isFinished}
        />
      ) : (
        <Tooltip title="Filter list">
          <label htmlFor="icon-button-file">
            <input
              accept="image/png"
              id="icon-button-file"
              type="file"
              style={{
                display: "none",
              }}
              onChange={(e) => {
                setImage(e.target.files);
              }}
              multiple
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <Upload />
            </IconButton>
          </label>
        </Tooltip>
      )}
    </Toolbar>
  );
}

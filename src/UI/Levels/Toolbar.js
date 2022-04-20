import { Add } from "@mui/icons-material";
import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { contentsActions } from "../../store/slices/contents";

export default function CollectionsToolbar() {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(
      contentsActions.showLevelModal({
        modal: {
          visible: true,
          mode: "create",
        },
      })
    );
  };
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
        Levels
      </Typography>

      <Tooltip title="Filter list">
        <IconButton onClick={handleOpen}>
          <Add />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

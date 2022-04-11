import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/slices/ui";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Toast() {
  const { toast } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  if (!toast.visible) return <></>;
  return (
    <Snackbar
      open={toast.visible}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        severity={toast?.status}
        onClose={() => {
          dispatch(uiActions.closeToast());
        }}
      >
        {toast?.description}
      </Alert>
    </Snackbar>
  );
}

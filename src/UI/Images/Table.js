import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { contentsActions } from "../../store/slices/contents";
import { deleteImageAction, getImages } from "../../store/actions/image";
import {
  Button,
  CircularProgress,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import ConfirmDialog from "../ConfirmDialog";

export default function ImageTable() {
  const dispatch = useDispatch();
  const { data, nextToken, loading } = useSelector(
    (state) => state.contents.images
  );
  const [showModal, setShowModal] = React.useState(null);
  const handleDelete = (id) => {
    dispatch(deleteImageAction(id, handleClose));
  };
  const handleClose = () => {
    setShowModal(null);
  };

  React.useEffect(() => {
    dispatch(getImages(true));
  }, []);

  const loadMore = () => {
    dispatch(getImages());
  };

  return (
    <TableContainer>
      <ImageList cols={5} gap={25}>
        {data &&
          data.map((item) => (
            <ImageListItem key={item.url}>
              <img
                src={`${process.env.REACT_APP_IMAGE_URL + item.url}`}
                loading="lazy"
              />
              <ImageListItemBar
                position="top"
                sx={{
                  background: "transparent",
                }}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    onClick={() => setShowModal(item.id)}
                  >
                    <Delete color="error" />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
      </ImageList>
      <ConfirmDialog
        title={`Delete Collection`}
        message={`Are you sure you want to delete this collection?`}
        onConfirm={() => handleDelete(showModal)}
        open={showModal !== null}
        onClose={() => setShowModal(null)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        {nextToken && (
          <Button onClick={loadMore} disabled={loading} variant="contained">
            {loading ? "LOADING..." : "LOAD MORE"}
          </Button>
        )}
      </div>
    </TableContainer>
  );
}

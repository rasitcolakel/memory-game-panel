import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { contentsActions } from "../../store/slices/contents";
import {
  deleteCollection,
  getCollections,
} from "../../store/actions/collections";
import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import ConfirmDialog from "../ConfirmDialog";

export default function CollectionsTable() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.contents.collections);
  const [showModal, setShowModal] = React.useState(null);
  const handleDelete = (id) => {
    dispatch(deleteCollection(id, handleClose));
  };
  const handleClose = () => {
    setShowModal(null);
  };

  React.useEffect(() => {
    if (data === null) dispatch(getCollections());
  }, []);

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <IconButton
                    color="success"
                    onClick={() =>
                      dispatch(
                        contentsActions.showCollectionModal({
                          modal: {
                            visible: true,
                            mode: "update",
                            collection: row,
                          },
                        })
                      )
                    }
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => setShowModal(row.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <ConfirmDialog
          title={`Delete Collection`}
          message={`Are you sure you want to delete this collection?`}
          onConfirm={() => handleDelete(showModal)}
          open={showModal !== null}
          onClose={() => setShowModal(null)}
        />
      </Table>
    </TableContainer>
  );
}

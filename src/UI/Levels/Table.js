import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { deleteLevel, getLevels } from "../../store/actions/levels";
import { contentsActions } from "../../store/slices/contents";
import { Button, IconButton, Rating } from "@mui/material";
import { Delete, Edit, Star } from "@mui/icons-material";
import ConfirmDialog from "../ConfirmDialog";

export default function LevelsTable() {
  const dispatch = useDispatch();
  const { data, nextToken, loading } = useSelector(
    (state) => state.contents.levels
  );
  const [showModal, setShowModal] = React.useState(null);
  const handleDelete = (id) => {
    dispatch(deleteLevel(id, handleClose));
  };
  const handleClose = () => {
    setShowModal(null);
  };

  React.useEffect(() => {
    dispatch(getLevels(true));
  }, []);
  const loadMore = () => {
    dispatch(getLevels());
  };
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="center">Images</TableCell>
            <TableCell align="center">Seconds</TableCell>
            <TableCell align="center">
              <Rating
                value={3}
                max={3}
                readOnly
                emptyIcon={
                  <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </TableCell>
            <TableCell align="center">
              <Rating
                value={2}
                max={3}
                readOnly
                emptyIcon={
                  <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </TableCell>
            <TableCell align="center">
              <Rating
                value={1}
                max={3}
                readOnly
                emptyIcon={
                  <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </TableCell>
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
                  {row.number}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.images}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.seconds}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.for3Stars}%
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.for2Stars}%
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.for1Stars}%
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <IconButton
                    color="success"
                    onClick={() =>
                      dispatch(
                        contentsActions.showLevelModal({
                          modal: {
                            visible: true,
                            mode: "update",
                            level: row,
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
          message={`Are you sure you want to delete this level?`}
          onConfirm={() => handleDelete(showModal)}
          open={showModal !== null}
          onClose={() => setShowModal(null)}
        />
      </Table>
      {nextToken && (
        <Button onClick={loadMore} disabled={loading} variant="contained">
          {loading ? "LOADING..." : "LOAD MORE"}
        </Button>
      )}
    </TableContainer>
  );
}

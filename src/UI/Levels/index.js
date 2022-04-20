import { Divider, Grid, Paper } from "@mui/material";
import React from "react";
import Modal from "./Modal";
import Table from "./Table";
import Toolbar from "./Toolbar";

export default function index() {
  return (
    <Grid container spacing={2} justifyContent="center" padding={2}>
      <Grid item xs={8}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <Toolbar />
          <Divider />
          <div
            style={{
              padding: "1rem",
            }}
          >
            <Table />
          </div>
        </Paper>
      </Grid>
      <Modal />
    </Grid>
  );
}

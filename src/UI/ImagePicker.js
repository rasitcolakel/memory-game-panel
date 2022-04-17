import { Check } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import RenderImage from "./RenderImage";

export default function ImagePicker({ selected, selectImage }) {
  const images = useSelector((state) => state.contents.images);
  return (
    <Grid
      container
      spacing={3}
      style={{
        marginTop: 30,
        width: "90%",
        margin: "auto",
      }}
    >
      {images.data?.map((image) => (
        <Grid item xs={3} onClick={() => selectImage(image.id)}>
          <div
            style={{
              cursor: "pointer",
              border: selected.includes(image.id)
                ? "2px solid #2ecc71"
                : "2px solid #eee",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <RenderImage url={image.url} width={80} height={80} />

            {selected.includes(image.id) && (
              <Check
                style={{
                  position: "absolute",
                  top: 2,
                  right: 2,
                  color: "#fff",
                  fontSize: "25px",
                  margin: 0,
                  background: "#2ecc71",
                  borderRadius: "50%",
                }}
              />
            )}
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

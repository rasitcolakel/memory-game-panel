import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  loading: false,
  toast: {
    visible: false,
    title: null,
    status: null,
    description: null,
  },
};

const slice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload.loading;
    },
    showToast(state, action) {
      state.toast = { ...action.payload.toast, visible: true };
    },
    closeToast(state) {
      state.toast = { ...initialState.toast };
    },
  },
});

export const uiReducer = slice.reducer;
export const uiActions = slice.actions;

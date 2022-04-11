import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  collections: {
    data: null,
    page: 0,
    modal: {
      visible: false,
      mode: null,
      collection: null,
    },
  },
};

const slice = createSlice({
  name: "contents",
  initialState: initialState,
  reducers: {
    // Collection Reducers
    showCollectionModal(state, action) {
      state.collections.modal = {
        ...state.collections.modal,
        ...action.payload.modal,
      };
    },
    hideCollectionModal(state, action) {
      state.collections.modal = { ...initialState.collections.modal };
    },
    setCollections(state, actions) {
      if (state.collections.data === null) {
        state.collections.data = actions.payload.data;
        return;
      }
      state.collections.data = [
        ...state.collections.data,
        ...actions.payload.data,
      ];
    },
    addCollection(state, actions) {
      if (state.collections.data === null) state.collections.data = [];
      state.collections.data.push(actions.payload.collection);
    },
    updateCollection(state, actions) {
      state.collections.data = state.collections.data.map((collection) => {
        if (collection.id === actions.payload.collection.id) {
          return actions.payload.collection;
        }
        return collection;
      });
    },
    deleteCollection(state, actions) {
      state.collections.data = state.collections.data.filter(
        (collection) => collection.id !== actions.payload.id
      );
    },
  },
});

export const contentsReducer = slice.reducer;
export const contentsActions = slice.actions;

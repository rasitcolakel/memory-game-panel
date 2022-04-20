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
    loading: false,
    nextToken: null,
  },
  users: {
    data: null,
    page: 0,
    modal: {
      visible: false,
      mode: null,
      collection: null,
    },
    loading: false,
    nextToken: null,
  },
  images: {
    data: null,
    page: 0,
    uploading: {
      visible: false,
      value: 0,
      isFinished: false,
    },
    modal: {
      visible: false,
      mode: null,
      collection: null,
    },
    loading: false,
    nextToken: null,
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
    resetCollections(state) {
      state.collections = {
        ...initialState.collections,
      };
    },
    setCollections(state, actions) {
      state.collections.nextToken = actions.payload.nextToken;
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
    setCollectionLoading(state, actions) {
      state.collections.loading = actions.payload.loading;
    },
    // Images Reducers
    showImageModal(state, action) {
      state.images.modal = {
        ...state.images.modal,
        ...action.payload.modal,
      };
    },
    hideImageModal(state, action) {
      state.images.modal = { ...initialState.images.modal };
    },
    resetImages(state) {
      state.images = {
        ...initialState.images,
      };
    },
    setImages(state, actions) {
      state.images.nextToken = actions.payload.nextToken;
      if (state.images.data === null) {
        state.images.data = actions.payload.data;
        return;
      }
      state.images.data = [...state.images.data, ...actions.payload.data];
    },
    addImage(state, actions) {
      if (state.images.data === null) state.images.data = [];
      state.images.data.push(actions.payload.collection);
    },
    updateImage(state, actions) {
      state.images.data = state.images.data.map((collection) => {
        if (collection.id === actions.payload.collection.id) {
          return actions.payload.collection;
        }
        return collection;
      });
    },
    deleteImage(state, actions) {
      state.images.data = state.images.data.filter(
        (collection) => collection.id !== actions.payload.id
      );
    },
    setImageUploading(state, actions) {
      state.images.uploading = {
        ...state.images.uploading,
        ...actions.payload.uploading,
      };
    },
    resetImageUploading(state, actions) {
      state.images.uploading = { ...initialState.images.uploading };
    },
    setImageLoading(state, actions) {
      state.images.loading = actions.payload.loading;
    },
    // User Reducers
    showUserModal(state, action) {
      state.users.modal = {
        ...state.users.modal,
        ...action.payload.modal,
      };
    },
    hideUserModal(state, action) {
      state.users.modal = { ...initialState.users.modal };
    },
    resetUsers(state) {
      state.users = {
        ...initialState.users,
      };
    },
    setUsers(state, actions) {
      state.users.nextToken = actions.payload.nextToken;
      if (state.users.data === null) {
        state.users.data = actions.payload.data;
        return;
      }
      state.users.data = [...state.users.data, ...actions.payload.data];
    },

    setUserLoading(state, actions) {
      state.users.loading = actions.payload.loading;
    },
  },
});

export const contentsReducer = slice.reducer;
export const contentsActions = slice.actions;

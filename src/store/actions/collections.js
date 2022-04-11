import { Auth, API, graphqlOperation } from "aws-amplify";
import { uiActions } from "../slices/ui";
import store from "../index";
import {
  createCollections,
  deleteCollections,
  updateCollections,
} from "../../graphql/mutations";
import { listCollections } from "../../graphql/queries";
import { contentsActions } from "../slices/contents";
export const getCollections = () => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading({ loading: true }));
    dispatch(uiActions.closeToast());
    try {
      const { user } = store.getState().auth;
      const query = await API.graphql({
        query: listCollections,
      });
      dispatch(
        contentsActions.setCollections({
          data: query.data.listCollections.items,
        })
      );
    } catch (e) {
      await dispatch(
        uiActions.showToast({
          toast: {
            title: "Error",
            status: "error",
            description: e.message,
          },
        })
      );
    }
    dispatch(uiActions.setLoading({ loading: false }));
  };
};

export const createCollection = (data, reset) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading({ loading: true }));
    try {
      const { user } = store.getState().auth;
      const newCollection = await API.graphql({
        query: createCollections,
        variables: { input: { title: data.title, userID: user.sub } },
      });
      dispatch(
        contentsActions.addCollection({
          collection: newCollection.data.createCollections,
        })
      );
      dispatch(contentsActions.hideCollectionModal());
      dispatch(uiActions.closeToast());
      if (typeof reset === "function") reset();
    } catch (e) {
      await dispatch(
        uiActions.showToast({
          toast: {
            title: "Error",
            status: "error",
            description: e.message,
          },
        })
      );
    }
    dispatch(uiActions.setLoading({ loading: false }));
  };
};

export const updateCollection = (data, reset) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading({ loading: true }));
    try {
      const { user } = store.getState().auth;
      const updatedCollection = await API.graphql({
        query: updateCollections,
        variables: {
          input: { id: data.id, title: data.title, userID: user.sub },
        },
      });
      dispatch(
        contentsActions.updateCollection({
          collection: updatedCollection.data.updateCollections,
        })
      );
      dispatch(contentsActions.hideCollectionModal());
      dispatch(uiActions.closeToast());
      if (typeof reset === "function") reset();
    } catch (e) {
      await dispatch(
        uiActions.showToast({
          toast: {
            title: "Error",
            status: "error",
            description: e.message,
          },
        })
      );
    }
    dispatch(uiActions.setLoading({ loading: false }));
  };
};
export const deleteCollection = (id, callback) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading({ loading: true }));
    try {
      const { user } = store.getState().auth;
      await API.graphql({
        query: deleteCollections,
        variables: {
          input: { id },
        },
      });
      dispatch(contentsActions.deleteCollection({ id }));
      dispatch(uiActions.closeToast());
      callback();
    } catch (e) {
      await dispatch(
        uiActions.showToast({
          toast: {
            title: "Error",
            status: "error",
            description: e.message,
          },
        })
      );
    }
    dispatch(uiActions.setLoading({ loading: false }));
  };
};

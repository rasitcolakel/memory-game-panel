import { Auth, API, graphqlOperation } from "aws-amplify";
import { uiActions } from "../slices/ui";
import store from "../index";

import { contentsActions } from "../slices/contents";
import { listUsers } from "../../graphql/queries";
export const getUsers = (reset) => {
  return async (dispatch) => {
    if (reset) {
      await dispatch(contentsActions.resetUsers());
    }
    dispatch(uiActions.setLoading({ loading: true }));
    dispatch(uiActions.closeToast());
    const { nextToken } = store.getState().contents.users;
    dispatch(
      contentsActions.setUserLoading({
        loading: true,
      })
    );
    try {
      let variables = {
        limit: 20,
      };
      if (nextToken) {
        variables.nextToken = nextToken;
      }
      const query = await API.graphql(graphqlOperation(listUsers, variables));
      dispatch(
        contentsActions.setUsers({
          data: query.data.listUsers.items,
          nextToken: query.data.listUsers.nextToken,
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
    dispatch(
      contentsActions.setUserLoading({
        loading: false,
      })
    );
    dispatch(uiActions.setLoading({ loading: false }));
  };
};

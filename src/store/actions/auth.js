import { Auth } from "aws-amplify";
import { authActions } from "../slices/auth";
import { uiActions } from "../slices/ui";
import jwtDecode from "jwt-decode";
export const login = (params) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading({ loading: true }));
    try {
      dispatch(uiActions.closeToast());
      const response = await Auth.signIn(params.username, params.password);

      if (response) {
        const currentUser = await Auth.currentAuthenticatedUser();
        if (currentUser) {
          let token = currentUser.signInUserSession.idToken.jwtToken;
          let user = jwtDecode(token);
          if (user["cognito:groups"].includes("Admins")) {
            dispatch(
              authActions.login({
                token: token,
              })
            );
          } else {
            await Auth.signOut();

            dispatch(
              uiActions.showToast({
                toast: {
                  title: "Error",
                  status: "error",
                  description:
                    "You can not access the admin panel. Because you are not an admin.",
                },
              })
            );
          }
        }
      }
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

export const register = (params, navigation) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading({ loading: true }));
    try {
      let { username, password, email, name } = params;
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          name,
          preferred_username: username,
        },
      });
      if (user !== null) {
        navigation.navigate("EmailConfirmation", {
          username,
          password,
        });
      }
    } catch (e) {
      dispatch(
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

export const confirmSignUp = (params, navigation) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading({ loading: true }));
    try {
      let confirm = await Auth.confirmSignUp(params.username, params.code);
      if (confirm) {
        const response = await Auth.signIn(params.username, params.password);
        if (response) {
          const currentUser = await Auth.currentAuthenticatedUser();
          if (currentUser) {
            let user = jwtDecode(
              currentUser.signInUserSession.idToken.jwtToken
            );
            let input = {
              name: user.name,
              email: user.email,
              username: user["cognito:username"],
            };

            dispatch(
              authActions.login({
                token: currentUser.signInUserSession.idToken.jwtToken,
              })
            );
          }
        }
      }
    } catch (e) {
      dispatch(
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

export const resendSignUp = (params) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading({ loading: true }));
    try {
      await Auth.resendSignUp(params.username);
      dispatch(
        uiActions.showToast({
          toast: {
            title: "Success",
            status: "success",
            description: "A confirmation code has been sent to your email.",
          },
        })
      );
    } catch (e) {
      dispatch(
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

export const signOut = () => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading({ loading: true }));
    try {
      await Auth.signOut();
      dispatch(authActions.signOut());
    } catch (e) {
      dispatch(
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

export const checkUser = () => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading({ loading: true }));
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      if (currentUser) {
        let token = currentUser.signInUserSession.idToken.jwtToken;
        let user = jwtDecode(token);
        if (user["cognito:groups"].includes("Admins")) {
          dispatch(
            authActions.login({
              token: token,
            })
          );
        }
      }
    } catch (e) {
      await dispatch(authActions.signOut());
    }
    dispatch(uiActions.setLoading({ loading: false }));
  };
};

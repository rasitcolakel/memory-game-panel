import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { uiActions } from "../slices/ui";
import store from "../index";
import {
  createImage,
  deleteImage,
  deleteImageCollections,
  updateImage,
} from "../../graphql/mutations";
import { listImages } from "../../graphql/queries";
import { contentsActions } from "../slices/contents";
import { v4 as uuidv4 } from "uuid";

export const getImages = (reset) => {
  return async (dispatch) => {
    if (reset) {
      await dispatch(contentsActions.resetImages());
    }
    dispatch(uiActions.setLoading({ loading: true }));
    dispatch(uiActions.closeToast());
    const { nextToken } = store.getState().contents.images;
    dispatch(
      contentsActions.setImageLoading({
        loading: true,
      })
    );
    try {
      let variables = {
        limit: 50,
      };
      if (nextToken) {
        variables.nextToken = nextToken;
      }
      const query = await API.graphql(graphqlOperation(listImages, variables));
      await dispatch(
        contentsActions.setImages({
          data: query.data.listImages?.items,
          nextToken: query.data.listImages.nextToken,
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
      contentsActions.setImageLoading({
        loading: false,
      })
    );
    dispatch(uiActions.setLoading({ loading: false }));
  };
};

export const createImageAction = (data, reset) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading({ loading: true }));
    try {
      for (let i = 0; i < data.length; i++) {
        console.log("data", data);
        let value = (100 / data.length) * (i + 1);
        await dispatch(
          contentsActions.setImageUploading({
            uploading: {
              visible: true,
              value,
            },
          })
        );
        const file = data[i];
        const fileName = uuidv4();
        const fileExtension = file.name.split(".").pop();
        const filePut = await Storage.put(
          `${fileName}.${fileExtension}`,
          file,
          {
            contentType: file.type,
            ACL: "public-read",
          }
        );
        let { key } = filePut;
        const { user } = store.getState().auth;
        const newImage = await API.graphql({
          query: createImage,
          variables: { input: { url: key, userID: user.sub } },
        });
        dispatch(
          contentsActions.addImage({
            collection: newImage.data.createImage,
          })
        );
      }
      await dispatch(
        contentsActions.setImageUploading({
          uploading: {
            visible: true,
            isFinished: true,
          },
        })
      );
      setTimeout(async () => {
        await dispatch(contentsActions.resetImageUploading());
      }, 3000);
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

export const updateImageAction = (data, reset) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading({ loading: true }));
    try {
      const { user } = store.getState().auth;
      const updatedCollection = await API.graphql({
        query: updateImage,
        variables: {
          input: { id: data.id, title: data.title, userID: user.sub },
        },
      });

      dispatch(
        contentsActions.updateCollection({
          collection: updatedCollection.data.updateImage,
        })
      );
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

const unlinkAllCollectionsFromImage = async (data) => {
  const links = data?.collections?.items;
  console.log("links", links);
  links &&
    links.map(async (link) => {
      await API.graphql({
        query: deleteImageCollections,
        variables: { input: { id: link.id } },
      });
    });
};

export const deleteImageAction = (id, callback) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading({ loading: true }));
    try {
      const { data } = store.getState().contents.images;
      const image = data.find((item) => item.id === id);

      unlinkAllCollectionsFromImage(image)
        .then(async () => {
          await API.graphql({
            query: deleteImage,
            variables: {
              input: { id },
            },
          });
        })
        .catch((e) => {
          console.log(e);
        });

      dispatch(contentsActions.deleteImage({ id }));
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

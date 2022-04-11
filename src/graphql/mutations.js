/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      username
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      username
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      username
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCollections = /* GraphQL */ `
  mutation CreateCollections(
    $input: CreateCollectionsInput!
    $condition: ModelCollectionsConditionInput
  ) {
    createCollections(input: $input, condition: $condition) {
      id
      title
      images {
        items {
          id
          collectionsID
          imageID
          createdAt
          updatedAt
        }
        nextToken
      }
      userID
      user {
        id
        name
        email
        username
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCollections = /* GraphQL */ `
  mutation UpdateCollections(
    $input: UpdateCollectionsInput!
    $condition: ModelCollectionsConditionInput
  ) {
    updateCollections(input: $input, condition: $condition) {
      id
      title
      images {
        items {
          id
          collectionsID
          imageID
          createdAt
          updatedAt
        }
        nextToken
      }
      userID
      user {
        id
        name
        email
        username
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCollections = /* GraphQL */ `
  mutation DeleteCollections(
    $input: DeleteCollectionsInput!
    $condition: ModelCollectionsConditionInput
  ) {
    deleteCollections(input: $input, condition: $condition) {
      id
      title
      images {
        items {
          id
          collectionsID
          imageID
          createdAt
          updatedAt
        }
        nextToken
      }
      userID
      user {
        id
        name
        email
        username
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      url
      collections {
        items {
          id
          collectionsID
          imageID
          createdAt
          updatedAt
        }
        nextToken
      }
      userID
      user {
        id
        name
        email
        username
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      url
      collections {
        items {
          id
          collectionsID
          imageID
          createdAt
          updatedAt
        }
        nextToken
      }
      userID
      user {
        id
        name
        email
        username
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      url
      collections {
        items {
          id
          collectionsID
          imageID
          createdAt
          updatedAt
        }
        nextToken
      }
      userID
      user {
        id
        name
        email
        username
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLevels = /* GraphQL */ `
  mutation CreateLevels(
    $input: CreateLevelsInput!
    $condition: ModelLevelsConditionInput
  ) {
    createLevels(input: $input, condition: $condition) {
      id
      number
      gameRules
      userID
      user {
        id
        name
        email
        username
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLevels = /* GraphQL */ `
  mutation UpdateLevels(
    $input: UpdateLevelsInput!
    $condition: ModelLevelsConditionInput
  ) {
    updateLevels(input: $input, condition: $condition) {
      id
      number
      gameRules
      userID
      user {
        id
        name
        email
        username
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLevels = /* GraphQL */ `
  mutation DeleteLevels(
    $input: DeleteLevelsInput!
    $condition: ModelLevelsConditionInput
  ) {
    deleteLevels(input: $input, condition: $condition) {
      id
      number
      gameRules
      userID
      user {
        id
        name
        email
        username
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const createImageCollections = /* GraphQL */ `
  mutation CreateImageCollections(
    $input: CreateImageCollectionsInput!
    $condition: ModelImageCollectionsConditionInput
  ) {
    createImageCollections(input: $input, condition: $condition) {
      id
      collectionsID
      imageID
      collections {
        id
        title
        images {
          nextToken
        }
        userID
        user {
          id
          name
          email
          username
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      image {
        id
        url
        collections {
          nextToken
        }
        userID
        user {
          id
          name
          email
          username
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateImageCollections = /* GraphQL */ `
  mutation UpdateImageCollections(
    $input: UpdateImageCollectionsInput!
    $condition: ModelImageCollectionsConditionInput
  ) {
    updateImageCollections(input: $input, condition: $condition) {
      id
      collectionsID
      imageID
      collections {
        id
        title
        images {
          nextToken
        }
        userID
        user {
          id
          name
          email
          username
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      image {
        id
        url
        collections {
          nextToken
        }
        userID
        user {
          id
          name
          email
          username
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteImageCollections = /* GraphQL */ `
  mutation DeleteImageCollections(
    $input: DeleteImageCollectionsInput!
    $condition: ModelImageCollectionsConditionInput
  ) {
    deleteImageCollections(input: $input, condition: $condition) {
      id
      collectionsID
      imageID
      collections {
        id
        title
        images {
          nextToken
        }
        userID
        user {
          id
          name
          email
          username
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      image {
        id
        url
        collections {
          nextToken
        }
        userID
        user {
          id
          name
          email
          username
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
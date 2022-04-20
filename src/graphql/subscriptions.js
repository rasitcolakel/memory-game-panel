/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      email
      username
      isNotificationsAccepted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      email
      username
      isNotificationsAccepted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      email
      username
      isNotificationsAccepted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateNotifications = /* GraphQL */ `
  subscription OnCreateNotifications($owner: String) {
    onCreateNotifications(owner: $owner) {
      id
      senderID
      sender {
        id
        name
        email
        username
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      receiverID
      receiver {
        id
        name
        email
        username
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateNotifications = /* GraphQL */ `
  subscription OnUpdateNotifications($owner: String) {
    onUpdateNotifications(owner: $owner) {
      id
      senderID
      sender {
        id
        name
        email
        username
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      receiverID
      receiver {
        id
        name
        email
        username
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteNotifications = /* GraphQL */ `
  subscription OnDeleteNotifications($owner: String) {
    onDeleteNotifications(owner: $owner) {
      id
      senderID
      sender {
        id
        name
        email
        username
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      receiverID
      receiver {
        id
        name
        email
        username
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCollections = /* GraphQL */ `
  subscription OnCreateCollections {
    onCreateCollections {
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
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCollections = /* GraphQL */ `
  subscription OnUpdateCollections {
    onUpdateCollections {
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
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCollections = /* GraphQL */ `
  subscription OnDeleteCollections {
    onDeleteCollections {
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
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
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
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
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
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
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
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLevels = /* GraphQL */ `
  subscription OnCreateLevels {
    onCreateLevels {
      id
      number
      gameRules
      userID
      user {
        id
        name
        email
        username
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLevels = /* GraphQL */ `
  subscription OnUpdateLevels {
    onUpdateLevels {
      id
      number
      gameRules
      userID
      user {
        id
        name
        email
        username
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLevels = /* GraphQL */ `
  subscription OnDeleteLevels {
    onDeleteLevels {
      id
      number
      gameRules
      userID
      user {
        id
        name
        email
        username
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePushToken = /* GraphQL */ `
  subscription OnCreatePushToken($owner: String) {
    onCreatePushToken(owner: $owner) {
      pushToken
      userID
      user {
        id
        name
        email
        username
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePushToken = /* GraphQL */ `
  subscription OnUpdatePushToken($owner: String) {
    onUpdatePushToken(owner: $owner) {
      pushToken
      userID
      user {
        id
        name
        email
        username
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePushToken = /* GraphQL */ `
  subscription OnDeletePushToken($owner: String) {
    onDeletePushToken(owner: $owner) {
      pushToken
      userID
      user {
        id
        name
        email
        username
        isNotificationsAccepted
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateImageCollections = /* GraphQL */ `
  subscription OnCreateImageCollections {
    onCreateImageCollections {
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
          isNotificationsAccepted
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
          isNotificationsAccepted
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
export const onUpdateImageCollections = /* GraphQL */ `
  subscription OnUpdateImageCollections {
    onUpdateImageCollections {
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
          isNotificationsAccepted
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
          isNotificationsAccepted
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
export const onDeleteImageCollections = /* GraphQL */ `
  subscription OnDeleteImageCollections {
    onDeleteImageCollections {
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
          isNotificationsAccepted
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
          isNotificationsAccepted
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

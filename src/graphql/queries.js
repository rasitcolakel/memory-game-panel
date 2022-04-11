/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        username
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCollections = /* GraphQL */ `
  query GetCollections($id: ID!) {
    getCollections(id: $id) {
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
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $filter: ModelCollectionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
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
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLevels = /* GraphQL */ `
  query GetLevels($id: ID!) {
    getLevels(id: $id) {
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
export const listLevels = /* GraphQL */ `
  query ListLevels(
    $filter: ModelLevelsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getImageCollections = /* GraphQL */ `
  query GetImageCollections($id: ID!) {
    getImageCollections(id: $id) {
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
export const listImageCollections = /* GraphQL */ `
  query ListImageCollections(
    $filter: ModelImageCollectionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageCollections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        collectionsID
        imageID
        collections {
          id
          title
          userID
          createdAt
          updatedAt
        }
        image {
          id
          url
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

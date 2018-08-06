import gql from 'graphql-tag';

export const ADD_USER = gql`
  mutation AddUser($user: StukentUserCreateInput!) {
    createStukentUser(data: $user) {
      email
    }
  }
`;

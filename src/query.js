import gql from 'graphql-tag';

export const IS_USER_EXISTS = gql`
  query User($email: String!) {
    stukentUsers(where: {email: $email}) {
      status,
      id,
      email
    }
  }
`;

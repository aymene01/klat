export default /* GraphQL */ `
  mutation CreateAccount($username: String!, $password: String!, $passwordConfirmation: String!) {
    createAccount(username: $username, password: $password, passwordConfirmation: $passwordConfirmation) {
      user {
        uuid
        username
      }
      meta {
        token
      }
    }
  }
`

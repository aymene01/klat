export default /* GraphQL */ `
  mutation CreateSession($username: String!, $password: String!) {
    createSession(username: $username, password: $password) {
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

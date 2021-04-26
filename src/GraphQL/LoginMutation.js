import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
mutation GetLoglin ($username: String! $password: String!) {
    userLogin(username: $username password: $password) {
    token
    user {
      _id
      username
      firstname
      lastname
      roles
      isStaff
    }
  }
}
`
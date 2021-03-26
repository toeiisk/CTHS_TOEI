import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers {
    Users{
      _id
      username
      email
      firstname
      lastname
      phone
      roles
      address
    }
  }
`
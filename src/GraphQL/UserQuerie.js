import { gql } from '@apollo/client'

export const ME_QUERY = gql`
query {
  me {
    _id
    username
    firstname
    lastname
    address
    roles
    isStaff
    email
  }
}
`
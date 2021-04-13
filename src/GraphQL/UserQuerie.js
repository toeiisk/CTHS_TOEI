import { gql } from '@apollo/client'

export const ME_QUERY = gql`
query {
  me {
    _id
    name
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
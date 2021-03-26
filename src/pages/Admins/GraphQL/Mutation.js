import { gql } from '@apollo/client'

export const ADD_USER = gql`
    mutation AddUser($record: CreateOneUserInput!){
        createUser(record: $record){
        record{
        username
        email
        firstname
        lastname
        phone
        roles
        address
    }
  }
}
`
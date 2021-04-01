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

export const UPDATE_USER_BY_ID = gql`
  mutation UpdateUserByID($record: UpdateByIdUserInput!,  $id: MongoID!){
    updateUserById(record: $record, _id: $id){
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
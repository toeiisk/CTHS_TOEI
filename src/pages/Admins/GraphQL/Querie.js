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
export const GET_USER = gql`
  query GetUser($id: MongoID!){
    userById(_id: $id){
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
import { gql } from '@apollo/client'

export const ADD_PATIENT = gql`
  mutation AddPatients($record: CreateOnePatientInput!){
    createPatient(record: $record){
      record{
        firstname
        lastname
        idcardNumber
        birthdate
        nationality
        race
        status
        bloodType
        phone
        address
        hospitalRefer
        congenitalDisease
    }
  }
}
`

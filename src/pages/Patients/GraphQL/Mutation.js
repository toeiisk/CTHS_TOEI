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

export const UPDATE_PATIENT_BY_ID = gql`
  mutation UpdatePatient($record: UpdateByIdPatientInput!,  $id: MongoID!){
    updatePatientById(record: $record, _id: $id){
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

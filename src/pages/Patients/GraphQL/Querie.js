import { gql } from '@apollo/client'

export const GET_PATIENTS = gql`
  query GetPatients {
    allPatients{
      _id
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
`

export const GET_PATIENT = gql`
  query GetPatient($id: MongoID!){
    patientById(_id: $id){
      _id
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
      treatment{
        _id
        weight
        height
        bloodPressure
        pulseRate
        tempurature
        respiratoryRate
        bmi
        oxygenSaturation
        medicalCertificate
        createdAt
      }
    }
  }
`

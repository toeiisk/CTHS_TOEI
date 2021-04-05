import { gql } from '@apollo/client'

export const ADD_TREATMENT = gql`
 mutation CreateTreatment($record: CreateOneTreatmentInput!){
  createTreatment(record: $record){
    record{
      patientId
      weight
      height
      bloodPressure
      pulseRate
      tempurature
      respiratoryRate
      bmi
      oxygenSaturation
      medicalCertificate
    }
  }
}
`

export const UPDATE_TREATMENT = gql`
 mutation UpdateTreatment($record: UpdateByIdTreatmentInput!, $id: MongoID!){
  updateTreatmentById(record: $record, _id: $id){
    record{
      patientId
      weight
      height
      bloodPressure
      pulseRate
      tempurature
      respiratoryRate
      bmi
      oxygenSaturation
      medicalCertificate
    }
  }
}
`



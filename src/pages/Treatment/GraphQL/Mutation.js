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

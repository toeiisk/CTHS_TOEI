import { gql } from "@apollo/client";

export const CREATE_DIAGNOSIS = gql`
  mutation createDiagnosis($record: CreateOneDiagnosisInput!){
    createDiagnosis(record: $record){
      record{
        userId
        treatmentId
        detail
        advice
        followUpDate
        followUpDetail
      }
    }
  }
`
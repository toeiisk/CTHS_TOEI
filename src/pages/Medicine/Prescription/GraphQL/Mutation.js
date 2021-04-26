import { gql } from '@apollo/client'

export const ADD_PRESCRPRION= gql`
  mutation createPrescription($record: CreateOnePrescriptionInput!){
    createPrescription(record: $record){
      record{
        treatmentId
        creatorId
        detail
        status
        dispenseItemId{
          amount
          dispenseId
        }
    }
  }
}
`
export const UPDATE_PRESCRIPTION_BY_ID = gql`
  mutation confirmPrescription($prescriptionId: ID!){
    confirmPrescription(prescriptionId: $prescriptionId){
      prescription{
        status
      }
  }
}
`
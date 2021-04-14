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

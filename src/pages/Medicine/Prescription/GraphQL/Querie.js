import { gql } from "@apollo/client";

export const GET_TREATMENTS_MEDICINE = gql`
  query allPrescriptions {
    allPrescriptions {
      _id
      detail
      status
      creatorId
      dispensaryId
      treatmentId
    }
  }
`;

export const GET_PRESCRIPTION_BY_ID = gql`
  query GetPrecriptionById($id: MongoID!) {
    prescriptionById(_id: $id) {
      _id
      creatorId
      detail
      status
      treatmentId
      dispensaryId
      dispenseItemId {
        dispenseId
        amount
      }
    }
  }
`;

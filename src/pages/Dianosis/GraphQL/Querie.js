import { gql } from "@apollo/client";

export const GET_TREATMENTS_DOAGNOSIS = gql`
  query GetTreatments {
    allTreatments(filter: {status: DIAGNOSIS} ) {
      _id
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
      createdAt
      patient {
        firstname
        lastname
        idcardNumber
      }
      type
      status
    }
  }
`;
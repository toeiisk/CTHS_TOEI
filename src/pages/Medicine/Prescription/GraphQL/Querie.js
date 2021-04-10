import { gql } from "@apollo/client";

export const GET_TREATMENTS_MEDICINE = gql`
  query GetTreatments {
    allTreatments(filter: {status: MEDICINE} ) {
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
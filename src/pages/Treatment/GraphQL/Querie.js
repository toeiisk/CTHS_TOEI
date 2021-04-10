import { gql } from "@apollo/client";

export const GET_TREATMENT_BY_ID = gql`
  query GetTreatment($id: MongoID!) {
    treatmentById(_id: $id) {
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
      status
      ... on General {
        chiefComplaint
        presentIllness
      }
      ... on Skin {
        rashArea
        rashDate
        rashDetail
        isItching
        isPain
        isStinging
        isFever
        isSwelling
        physicalExamination
      }
      ... on Accident {
        isEmergency
        isInsurance
        isSafety
        woundArea
        woundDate
        woundLocation
        isTreatBefore
        treatBeforeDetail
        treatBeforeDate
      }
      ... on ContinueAccident {
        isInsurance
        lesion
        advice
        moreDetail
      }
      ... on Eyes {
        leftEye
        rightEye
        isPain
        isIrritation
        isItching
        isConjunctivitis
        isSore
        isSwelling
        isTear
        isBlurred
        isGum
        isPurulent
        isMatter
        physicalExamination
      }
      ... on Fever {
        isFever
        isCough
        isPhlegm
        isSnot
        isHeadache
        isStuffy
        isAnorexia
        isSoreThroat
        isEyeItching
        isInjectedPharynx
        isExudates
        isLungClear
        physicalExamination
      }
      ... on Diarrhea {
        diarrheaAmount
        diarrheaDetail
        stomachache
        isVomit
        isFluxStool
        isFever
        bowelSound
        physicalExamination
      }
      ... on Pain {
        acheArea
        acheDate
        painScore
        acheDetail
        trigger
        crackDetail
        physicalExamination
      }
    }
  }
`;

export const GET_TREATMENTS = gql`
  query GetTreatments {
    allTreatments {
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

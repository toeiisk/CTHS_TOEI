import { gql } from '@apollo/client'

export const ADD_GENERAL_FORM = gql`
 mutation CreateOneGeneral($record: CreateOneGeneralInput!){
  createGeneralTreatment(record: $record){
    record{
      userId
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
      chiefComplaint
      presentIllness
    }
  }
}
`
export const ADD_SKIN_FORM = gql`
 mutation createSkinTreatment($record: CreateOneSkinInput!){
  createSkinTreatment(record: $record){
    record{
      userId
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
  }
}
`
export const ADD_ACCIDENT_FORM = gql`
 mutation createAccidentTreatment($record: CreateOneAccidentInput!){
  createAccidentTreatment(record: $record){
    record{
      userId
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
  }
}
`
export const ADD_CONACCIDENT_FORM = gql`
 mutation createConAccidentTreatment($record: CreateOneContinueAccidentInput!){
  createConAccidentTreatment(record: $record){
    record{
      userId
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
      isInsurance
      lesion
      advice
      moreDetail
    }
  }
}
`
export const ADD_EYES_FORM = gql`
 mutation createEyesTreatment($record: CreateOneEyesInput!){
  createEyesTreatment(record: $record){
    record{
      userId
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
  }
}
`
export const ADD_FEVER_FORM = gql`
 mutation createFeverTreatment($record: CreateOneFeverInput!){
  createFeverTreatment(record: $record){
    record{
      userId
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
  }
}
`
export const ADD_DIARRHEA_FORM = gql`
 mutation createDiarrheaTreatment($record: CreateOneDiarrheaInput!){
  createDiarrheaTreatment(record: $record){
    record{
      userId
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
      diarrheaAmount
      diarrheaDetail
      stomachache
      isVomit
      isFluxStool
      isFever
      bowelSound
      physicalExamination
    }
  }
}
`
export const ADD_PAIN_FORM = gql`
 mutation createPainTreatment($record: CreateOnePainInput!){
  createPainTreatment(record: $record){
    record{
      userId
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



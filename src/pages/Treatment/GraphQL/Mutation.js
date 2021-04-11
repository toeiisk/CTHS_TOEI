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
// Update Treatment By ID

export const UPDATE_GENERAL_FORM = gql`
 mutation updateGeneralTreatmentById($record: UpdateByIdGeneralInput!, $id: MongoID!){
  updateGeneralTreatmentById(record: $record, _id: $id){
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
export const UPDATE_SKIN_FORM = gql`
 mutation updateSkinTreatmentById($record:  UpdateByIdSkinInput!, $id: MongoID!){
  updateSkinTreatmentById(record: $record, _id: $id){
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
export const UPDATE_ACCIDENT_FORM = gql`
 mutation updateAccidentTreatmentById($record: UpdateByIdAccidentInput!, $id: MongoID!){
  updateAccidentTreatmentById(record: $record, _id: $id){
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
export const UPDATE_CONACCIDENT_FORM = gql`
 mutation updateConAccidentTreatmentById($record: UpdateByIdContinueAccidentInput!, $id: MongoID!){
  updateConAccidentTreatmentById(record: $record, _id: $id){
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
export const UPDATE_EYES_FORM = gql`
 mutation updateEyesTreatmentById($record: UpdateByIdEyesInput!, $id: MongoID!){
  updateEyesTreatmentById(record: $record, _id: $id){
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
export const UPDATE_FEVER_FORM = gql`
 mutation updateFeverTreatmentById($record: UpdateByIdFeverInput!, $id: MongoID!){
  updateFeverTreatmentById(record: $record, _id: $id){
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
export const UPDATE_DIARRHEA_FORM = gql`
 mutation updateDiarrheaTreatmentById($record: UpdateByIdDiarrheaInput!, $id: MongoID!){
  updateDiarrheaTreatmentById(record: $record, _id: $id){
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
export const UPDATE_PAIN_FORM = gql`
 mutation updatePainTreatmentById($record: UpdateByIdPainInput!, $id: MongoID!){
  updatePainTreatmentById(record: $record, _id:$id){
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




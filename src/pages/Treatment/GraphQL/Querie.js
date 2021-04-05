import { gql } from '@apollo/client'

export const GET_TREATMENT_BY_ID = gql`
    query GetTreatment($id: MongoID!){
    treatmentById(_id: $id){
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
`
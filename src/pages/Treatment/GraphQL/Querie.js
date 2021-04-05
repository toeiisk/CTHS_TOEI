import { gql } from '@apollo/client'

export const GET_TREATMENT_BY_ID = gql`
    query GetTreatment($id: MongoID!){
    treatmentById(_id: $id){
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
    }
}
`

export const GET_TREATMENTS = gql `
    query GetTreatments{
        allTreatments{
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
            patient{
                firstname
                lastname
                idcardNumber
            }
        }
    }
`
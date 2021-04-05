import { gql } from '@apollo/client';

export const ADD_MEDICINE = gql`
	mutation CreateMedicine($record: CreateOneMedicineInput!) {
		createMedicine(record: $record) {
			record {
				medType
				name
				description
				amount
				unitType
			}
		}
	}
`;

export const UPDATE_MEDICINE_BY_ID = gql`
	mutation UpdateMedicineById($record: UpdateByIdMedicineInput!, $id: MongoID!) {
		updateMedicineById(record: $record, _id: $id) {
			record {
				medType
				name
				description
				amount
				unitType
			}
		}
	}
`;

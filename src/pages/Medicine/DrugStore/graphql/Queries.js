import { gql } from '@apollo/client';
export const GET_MEDICINES = gql`
	query getMedicine {
		allMedicines {
			_id
			medType
			name
			description
			amount
			unitType
		}
	}
`;

export const GET_MEDICINE = gql`
	query getMedicine($id: MongoID!) {
		medicineById(_id: $id) {
			_id
			medType
			name
			description
			amount
			unitType
		}
	}
`;

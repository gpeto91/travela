import gql from 'graphql-tag';

export const SAVE_TRAVEL = gql`
    mutation createTravel(
        $name: String!,
        $phone: String!,
        $destination: String!,
        $origin: String!,
        $dateTo: Int!,
        $dateFrom: Int!,
        $numberPeople: Int!
    ) {
        createTravel(
            travel: {
                name: $name,
                phone: $phone,
                destination: $destination,
                origin: $origin,
                dateTo: $dateTo,
                dateFrom: $dateFrom,
                numberPeople: $numberPeople
            }) {
                code
                message
                success
                travel {
                    name
                    phone
                    origin
                    destination
                    dateFrom
                    dateTo
                    numberPeople
                }
            }
    }
`

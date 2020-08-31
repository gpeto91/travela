const { gql } = require("apollo-server");

const mutation = gql`
   type Mutation {
      createTravel(travel: TravelInput): UpdatePostMutationResponse
      updateTravel(id: String, travel: TravelInput): Travel
      deleteTravel(id: String): Travel
   }

   input TravelInput {
      name: String,
      phone: String,
      destination: String,
      origin: String,
      dateFrom: Int,
      dateTo: Int,
      numberPeople: Int
   }

`;

module.exports = mutation;

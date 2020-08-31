const { gql } = require("apollo-server");

const types = gql`
   interface MutationResponse {
      code: Int!,
      success: Boolean!,
      message: String!
   }

   type UpdatePostMutationResponse implements MutationResponse {
      code: Int!
      success: Boolean!
      message: String!
      travel: Travel
   }

   type Travel {
      id: ID!
      name: String!
      phone: String!
      destination: String!
      origin: String!
      dateTo: Int!
      dateFrom: Int!
      numberPeople: Int!
   }
`;

module.exports = types;

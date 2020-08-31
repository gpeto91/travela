const { gql } = require("apollo-server");

const query = gql`
   type Query {
      travels: Int!
      travel(id: ID!): Travel
   }
`;

module.exports = query;

// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type User {
    _id: ID
    email: String
    password: String
    savedCustomers: [Customer]
  }

  type Auth {
    token: ID
    user: User
    customer: Customer
  }

  type Part {
    _id: ID
    name: String
    description: String
    price: Float
    quantity: Int
  }

  type Repair {
    _id: ID
    purchaseDate: String
    parts: [Part]
  }

  type Customer {
    _id: ID
    firstName: String
    lastName: String
    cellPhone: String
    repairs: [Repair]
  }

  type Query {
    user: User
    customer: Customer
    parts(name: String): [Part]
    repair(_id: ID!): Repair
    part(_id: ID!): Part
    checkout(parts: [ID]!): Checkout
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
    checkIn(cellPhone: String!): Customer
    addCustomer(firstName: String!, lastName: String!, cellPhone: String!): Customer
    updateCustomer(firstName: String, lastName: String, cellPhone: String): Customer
    addRepair(parts: [ID]!): Repair
    updatePart(_id: ID!, quantity: Int!): Part
  }

  type Checkout {
    session: ID
  }
`;

// export the typeDefs
module.exports = typeDefs;
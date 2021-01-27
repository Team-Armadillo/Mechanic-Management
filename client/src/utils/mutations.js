import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_REPAIR = gql`
  mutation addRepair($parts: [ID]!) {
    addRepair(parts: $products) {
      purchaseDate
      parts {
        _id
      name
      description
      price
      quantity
      }
    }
  }
`;

export const ADD_CUSTOMER = gql`
  mutation addCustomer($userId: ID!, $firstName: String!, $lastName: String!, $cellPhone: String!, $make: String!, $model: String!, $color: String!) {
    addCustomer(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
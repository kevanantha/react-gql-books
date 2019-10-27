import { gql } from 'apollo-boost'

export const BOOKS = gql`
  {
    books {
      id
      name
    }
  }
`

export const AUTHORS = gql`
  {
    authors {
      id
      name
    }
  }
`

export const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`

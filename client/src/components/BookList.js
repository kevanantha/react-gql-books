import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const BOOKS = gql`
  {
    books {
      id
      name
    }
  }
`

export default function BookList() {
  const { loading, error, data } = useQuery(BOOKS)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error :(</div>

  console.log(data.books)
  return (
    <>
      <ul id="book-list">
        {data.books.map(book => {
          return <li key={book.id}>{book.name}</li>
        })}
      </ul>
    </>
  )
}

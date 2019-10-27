import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { BOOKS } from '../queries/queries'

export default function BookList() {
  const { loading, error, data } = useQuery(BOOKS)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error :(</div>

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

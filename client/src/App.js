import React from 'react'

import BookList from './components/BookList'
import AddBook from './components/AddBook'

export default function App() {
  return (
    <>
      <h1>Freaking's Book List</h1>
      <BookList />
      <AddBook />
    </>
  )
}

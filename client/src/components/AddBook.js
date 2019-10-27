import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { AUTHORS, BOOKS, ADD_BOOK } from '../queries/queries'

export default function AddBook() {
  const { loading, error, data } = useQuery(AUTHORS)
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [authorId, setAuthorId] = useState('')
  const [addBook, { _ }] = useMutation(ADD_BOOK)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await addBook({
        variables: {
          name,
          genre,
          authorId
        },
        refetchQueries: [{ query: BOOKS }]
      })
      setName('')
      setGenre('')
      setAuthorId('')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {error && <div>{error}</div>}
      <form id="add-book" onSubmit={handleSubmit}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" value={genre} onChange={e => setGenre(e.target.value)} />
        </div>

        <div className="field">
          <label>Author:</label>
          <select value={authorId} onChange={e => setAuthorId(e.target.value)}>
            <option disabled>Select Author</option>
            {loading && <option disabled>Loading...</option>}
            {data &&
              data.authors.map(author => (
                <option value={author.id} key={author.id}>
                  {author.name}
                </option>
              ))}
          </select>
        </div>

        <button>+</button>
      </form>
    </>
  )
}

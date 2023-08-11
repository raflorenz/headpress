import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import './App.css'

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      fetch('https://wptavern.com/wp-json/wp/v2/posts').then((res) => res.json(),),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <h1>Headpress</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
      <pre>{JSON.stringify(data[0], null, 2)}</pre>
    </>
  )
}

export default App

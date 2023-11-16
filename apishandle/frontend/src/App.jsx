import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [producs, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products')
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })() // IFFI
  }, [])


  if (error) {
    return <h1>Something went wrong!!</h1>
  }

  if (loading) {
    return <h1>loadding..</h1>
  }

  return (
    <>

      <h1>APIs Handle</h1>
      <h2>Number of Product are: {producs.length}</h2>
    </>
  )
}

export default App

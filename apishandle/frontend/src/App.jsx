import { useEffect, useState } from 'react'
import axios from 'axios'



function App() {
  // const [producs, error, loading] = customRecatQuery('/api/products')

  const [producs, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [search, setSearch] = useState('')

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal
        })
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request Canceled', error.message)
          return
        }
        setError(true)
        setLoading(false)
      }
    })() // IFFI

    return () => {
      controller.abort()
    }
  }, [search])


  // if (error) {
  //   return <h1>Something went wrong!!</h1>
  // }

  // if (loading) {
  //   return <h1>loadding..</h1>
  // }

  return (
    <>

      <h1>APIs Handle</h1>

      <input type="text" placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}

      />
      {loading && (<h1>Loading..</h1>)}
      {error && <h1>Something went wrong!</h1>}
      <h2>Number of Product are: {producs.length}</h2>
    </>
  )
}

export default App


const customRecatQuery = (urlPath) => {

  return [producs, loading, error]
}
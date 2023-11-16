import express from 'express'


const app = express();

app.get('/api/products', (req, res) =>{
const products = [
  {
    id: 1,
    name: 'table wooden',
    price: 200,
    image: 'https://cdn.pixabay.com/photo/2018/05/30/15/31/globe-3441673_1280.jpg'
  },
  {
    id: 2,
    name: 'table glass',
    price: 200,
    image: 'https://cdn.pixabay.com/photo/2018/05/30/15/31/globe-3441673_1280.jpg'
  },
  {
    id: 3,
    name: 'Wooden Temple',
    price: 200,
    image: 'https://cdn.pixabay.com/photo/2018/05/30/15/31/globe-3441673_1280.jpg'
  },
  {
    id: 4,
    name: 'Table polyester',
    price: 150,
    image: 'https://cdn.pixabay.com/photo/2018/05/30/15/31/globe-3441673_1280.jpg'
  }
]


// localhost:3000/api/products?search=metal

if(req.query.search){
  const filterProducts = products.filter(product => product.name.includes(req.query.search))

  res.send(filterProducts)
  return;  // Importend Mentode otherwise application broken
}

setTimeout(() => {
  res.send(products)
}, 3000)

})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
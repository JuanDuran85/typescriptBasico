import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'Hola mundo',
  })
})

app.listen(port, () => {
  console.debug(`Example app listening on port ${port}`)
})
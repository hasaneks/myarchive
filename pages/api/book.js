import mongoMiddleware from '../../core/api/mongo-middleware'

export default mongoMiddleware(async (req, res, connection, models) => {
  const { query, body, method } = req

  switch (method) {
    case 'GET':
      models.Book.find()
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err) => {
          console.log(err)
          res.status(500)
        })

      break
    case 'POST':
      const book = new models.Book(body)
      book
        .save()
        .then((result) => {
          console.log('Başarılı')
          res.status(200).json(result)
        })
        .catch((err) => {
          // console.log(err)
          res.status(500).json(err)
        })

      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
})

import mongoMiddleware from '../../core/api/MongoMiddleware'

export default mongoMiddleware(async (req, res, connection, models) => {
  const {
    query: { id },
    body,
    method
  } = req

  switch (method) {
    case 'GET':
      if (id) {
        models.Book.findById(id)
          .then((result) => {
            res.status(200).json(result)
          })
          .catch((err) => {
            res.status(404).json('Not found Book')
          })
      } else {
        models.Book.find()
          .then((result) => {
            res.status(200).json(result)
          })
          .catch((err) => {
            console.log(err)
            res.status(500)
          })
      }

      break
    case 'POST':
      const book = new models.Book(body)
      book
        .save()
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err) => {
          console.log(err)
          res.status(500).json(err)
        })

      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
})

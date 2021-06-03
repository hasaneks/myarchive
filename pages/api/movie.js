// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoMiddleware from '../../core/api/mongo-middleware'

export default mongoMiddleware(async (req, res, connection, models) => {
  const {
    query: { id, movieName },
    body,
    method
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      console.log('GET')

      models.Movie.find()
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err) => {
          console.log(err)
          res.status(500)
        })

      break
    case 'POST':
      const movie = new models.Movie(body)
      movie
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

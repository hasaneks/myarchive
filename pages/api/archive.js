import mongoMiddleware from '../../core/api/mongo-middleware'
import apiHandler from '../../core/api/api-handler'

export default mongoMiddleware(async (req, res, connection, models) => {
  const { method } = req

  apiHandler(res, method, {
    GET: (response) => {
      models.User.find({}, (error, user) => {
        if (error) {
          connection.close()
          response.status(500).json({ error })
        } else {
          response.status(200).json(user)
          connection.close()
        }
      })
    }
  })
})

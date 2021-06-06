import connectToMongo from './connectToMongoDb'

const mongoMiddleware = (handler) => async (req, res) => {
  const { connection, models } = await connectToMongo()
  try {
    await handler(req, res, connection, models)
  } catch (e) {
    connection.close()
    res.status(500).json({ error: e.message || 'something went wrong' })
  }
}

export default mongoMiddleware

import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'

const server = fastify()

server.register(fastifyJwt, {
  secret: 'supersecret'
})

server.post('/signup', (req, reply) => {
  // some code
  const payload = {}
  const token = server.jwt.sign({ payload })
  reply.send({ token })
})

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

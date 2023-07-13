import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'

const server = fastify()

server.register(fastifyJwt, {
  secret: 'supersecret'
})

server.post('/signup', (req, reply) => {
  // some code
  const payload = { id: 12345 }
  const token = server.jwt.sign(payload)
  reply.send({ token })
})

server.get('/ping', async (request, reply) => {
  server.log.debug(request.user.id)
  server.log.debug(request.user.age)
  server.log.debug(request.user.name)
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

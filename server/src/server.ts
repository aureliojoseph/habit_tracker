import Fastify from 'fastify'

const app = Fastify()

app.get('/', () => {
  return 'NLW - Setup'
})

app.listen({
  port: 3333
})
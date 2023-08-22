import 'dotenv/config'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true, // permite que qualquer front-end acesse as rotas
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(memoriesRoutes)
app.register(authRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server runnig on http://localhost:3333')
  })

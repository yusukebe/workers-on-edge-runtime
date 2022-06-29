import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

app.use('*', poweredBy())

const username = 'foo'
const password = 'bar'
app.use('/auth/*', basicAuth({ username, password }))

app.get('/', (c) => c.text('Hello Edge Runtime! This is Hono!'))
app.get('/auth/*', (c) => c.text('You are authorized!'))

export default app

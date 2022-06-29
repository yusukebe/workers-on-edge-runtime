import app from './app'

describe('Test the application', () => {
  it('Should return 200 response', async () => {
    const res = await app.request('http://localhost/')
    expect(res.status).toBe(200)
    expect(res.headers.get('x-powered-by')).toBe('Hono')
  })
})

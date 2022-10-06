import { rest } from 'msw'
import { mockData, mockSingleDentist } from './data'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.json(mockData),
    )
  }),
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    return res(
      ctx.json(mockSingleDentist),
    )
  })
]
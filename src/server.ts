import fastify from 'fastify'
// import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .where('amount', 1500)
    .select('*')
  return transactions

  // const transaction = await knex('transactions')
  //   .insert({
  //     id: crypto.randomUUID(),
  //     title: 'Transação de teste 23',
  //     amount: 1000,
  //   })
  //   .returning('*')

  // return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })

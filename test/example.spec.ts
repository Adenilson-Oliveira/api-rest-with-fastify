import { expect, test } from 'vitest'

test('o usuário consegue criar uma nova transação', () => {
  // fazer uma chamada http p/ criar uma nova transação
  //
  // validação
  const replyStatusCode = 200

  expect(replyStatusCode).toEqual(200)
})

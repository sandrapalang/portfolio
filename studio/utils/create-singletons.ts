import { getCliClient } from 'sanity/cli'

const singletons = [
  { _type: 'homePage', _id: 'homePage-en', language: 'en' },
  { _type: 'homePage', _id: 'homePage-sv', language: 'sv' },
]

const client = getCliClient()
const transaction = client.transaction()

async function createSingletons() {
  singletons.forEach((doc) => {
    transaction.createIfNotExists(doc)
  })

  await transaction
    .commit()
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
}

createSingletons()

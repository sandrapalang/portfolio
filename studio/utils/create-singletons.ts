import { getCliClient } from 'sanity/cli'

type Singleton = {
  _type: string
  _id: string
  language?: string
}

const singletons: Singleton[] = [
  { _type: 'homePage', _id: 'homePage-en', language: 'en' },
  { _type: 'homePage', _id: 'homePage-sv', language: 'sv' },
  { _type: 'header', _id: 'header' },
  { _type: 'stringTranslation', _id: 'stringTranslation-en', language: 'en' },
  { _type: 'stringTranslation', _id: 'stringTranslation-sv', language: 'sv' },
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

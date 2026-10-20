import { defineQuery } from 'next-sanity'

import { client } from '../client'

const headerQuery = defineQuery(`*[_type == "header"][0]{ name }`)

export const getHeader = () => client.fetch(headerQuery)

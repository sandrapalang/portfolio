import { client } from '../client'

export const getHeader = () => client.fetch(`*[_type == "header"][0]{ name }`)

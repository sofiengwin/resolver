// import test from './test'
import {client} from './database'

const hello = () => {
  console.log('Hello World')
  client
  console.log(client)
  // test()
}

hello()


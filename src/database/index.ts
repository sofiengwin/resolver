import { Client } from 'pg';

export const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'bat_development',
  password: 'password',
  port: 5432,
})

client.connect()
  .then((res) => {
    console.log({res})
    client.query('SELECT * FROM tips')
      .then((res) => {
        console.log('HELLO WORDL', res.rows)


        client.end()
      })
      .catch((error) => console.log({error}))
  })
  .catch((err) => console.log({err}))


import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGREES_HOST,
    port: process.env.POSTGREES_PORT,
    user: process.env.POSTGREES_USER,
    database: process.env.POSTGREES_DATABASE,
    password: process.env.POSTGREES_PASSWORD,
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};

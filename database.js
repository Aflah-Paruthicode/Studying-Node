
const { MongoClient } = require('mongodb');
const URL = 'mongodb+srv://aflah:@chatapp.ziqd6ut.mongodb.net/'



const client = new MongoClient(URL); 

const dbName = 'chatApp' 

async function main() { 
    await client.connect()
      console.log('Connected successfully to server');
       

          
            return 'done.';   

} 

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

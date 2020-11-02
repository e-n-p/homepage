const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useUnifiedTopology: true});

export const db = {
	connect: async () => await client.connect(),
	getClient: () => client,
	end: async () => await client.close(),
	
	
}
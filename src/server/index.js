var express = require('express')
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

var resolvers = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: resolvers,
	graphiql: true
}));
app.listen(4000, () => console.log('Server running on localhost:4000'));

var express = require('express');
var fetch = require('node-fetch');
var graphqlHTTP = require('express-graphql');
var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLString
} = require('graphql');

function fetchFeeds() {
	return fetch('http://rss2json.com/api.json?rss_url=http%3A%2F%2Fes.gizmodo.com%2Frss')
		.then(res => res.json())
		.then(data => data.items);
}

const FeedType = new GraphQLObjectType({
	name: 'Feed',
	fields: () => ({
		title: { type: GraphQLString },
		description: { type: GraphQLString },
		link: { type: GraphQLString },
		pubDate: { type: GraphQLString },
		content: { type: GraphQLString },
		author: { type: GraphQLString}
	})
});

const RootQueryType = new GraphQLObjectType({
	name: 'Root',
	fields: () => ({
		feeds: {
			type: new GraphQLList(FeedType),
			resolve: fetchFeeds
		}
	})
});

const RootSchema = new GraphQLSchema({
	query: RootQueryType
});

var app = express();
app.use('/graphql', graphqlHTTP({
	schema: RootSchema,
	graphiql: true
}));
app.listen(4000, () => console.log('Server running on localhost:4000'));

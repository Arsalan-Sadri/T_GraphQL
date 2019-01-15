const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Name of the variable (node) used in this code
const BookType = new GraphQLObjectType({
    // Name of the node available to users
    name: "Book",
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        }
    })
});

// Name of the variable (query) used in this code
const RootQueryType = new GraphQLObjectType({
    // Name of the query available to users
    name: "RootQuery",
    fields: {
        // Name of the query function to be used
        book: {
            // The node on which the query will be made
            type: BookType,
            // Arguments to be passed along with the query function
            args: {
                // ID of the book
                id: {
                    type: GraphQLString
                }
            },
            // The resolve function is fired when query is run 
            resolve(parent, args) {
                return _.find(books, { id: args.id });
            }
        }
    }
});

const books = [
    {
        name: "Name of the Wind",
        genre: "Fantasy",
        id: "1"
    },
    {
        name: "The Final Empire",
        genre: "Fantasy",
        id: "2"
    },
    {
        name: "The Long Earth",
        genre: "Sci-Fi",
        id: "3"
    }
];

module.exports = new GraphQLSchema({
    // which query is available to users to use
    query: RootQueryType
});

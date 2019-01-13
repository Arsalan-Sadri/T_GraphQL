const graphql = require("graphql");

const { GraphQLObjectTpye, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
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

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        // name of the query
        book: {
            // the node on which the query will be made
            type: BookType,
            // arguments to be passed along with the query
            args: {
                // the id of the book
                id: {
                    type: GraphQLString
                }
            },
            // once the query is received, this resolve function is fired
            resolve(parent, args) {}
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
    // which query is available to user to use
    query: RootQuery
});
